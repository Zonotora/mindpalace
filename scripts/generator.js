const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const folderPath = "src/pages";
const templatePath = "src/templates/folder.js";
const keywordsPath = "src/keywords.json";

const activeFiles = execSync(
  `git diff --name-only ${folderPath}; git ls-files --others --exclude-standard`
).toString();

const isDirectory = (url) => fs.statSync(url).isDirectory();
const isMarkdownFile = (url) =>
  fs.statSync(url).isFile() && path.extname(url) === ".md";
const isKeyWordsFile = (url) => path.basename(url, ".md") === "keywords";

const getFiles = (url, func) =>
  fs
    .readdirSync(url)
    .map((name) => path.join(url, name))
    .filter(func);

const generateFrontmatter = ({
  slug,
  title,
  header,
  tags,
  created,
  isUpdate = false,
}) =>
  [
    "---",
    `slug: ${slug}`,
    `tags: ${tags ? tags : "[]"}`,
    `lastModified: ${new Date().toISOString().split("T")[0]}`,
    `created: ${created ? created : new Date().toISOString().split("T")[0]}`,
    `title: ${title}`,
    `header: ${JSON.stringify(header)}`,
    "---",
  ].join("\n") + `${isUpdate ? "" : "\n\n"}`;

const updateFrontmatter = (fileContent, slug, title, header) => {
  const frontmatter = {};

  // update existing frontmatter
  if (fileContent.startsWith("---\n")) {
    const [, frontmatterContent, ...rest] = fileContent.split("---\n");

    const content = `\n${rest
      .map((e, i) => `${i !== 0 ? "---\n" : ""}${e}`)
      .join("")}`;

    frontmatterContent.split("\n").forEach((line) => {
      if (line) {
        const [key, value] = line.split(":");
        frontmatter[key] = value.trim();
      }
    });

    return `${generateFrontmatter({
      ...frontmatter,
      ...{ slug, title, header },
      isUpdate: true,
    })}${content}`;
  }
  // generate new frontmatter
  return `${generateFrontmatter({ slug, title, header })}${fileContent}`;
};

const resolveFile = (file) => {
  // if file has not any active changes, skip it
  if (!activeFiles.includes(file)) return;

  const url = file.replace(folderPath, "");
  const parsedUrl = path.parse(url);
  const resolvedPath = path.join(parsedUrl.dir, parsedUrl.name);
  const fileContent = fs.readFileSync(file, { encoding: "utf8" });
  // filter out code blocks, because some languages have # as a comment token
  const filteredFileContent = fileContent
    .split("```")
    .filter((e, i) => i % 2 == 0)
    .join("");
  const header = filteredFileContent
    .split("\n")
    .filter((line) => line.startsWith("#"))
    .map((line) => {
      return {
        depth: line.lastIndexOf("#") - line.indexOf("#") + 1,
        name: line.substring(line.lastIndexOf("#") + 1, line.length).trim(),
        link: line
          .substring(line.lastIndexOf("#") + 1, line.length)
          .trim()
          .replace(/å/g, "a")
          .replace(/Å/g, "A")
          .replace(/ä/g, "a")
          .replace(/Ä/g, "A")
          .replace(/ö/g, "o")
          .replace(/Ö/g, "O")
          .split(" ")
          .join("-"),
      };
    });

  const title = parsedUrl.name
    .split("-")
    .map((s) => `${s.charAt(0).toUpperCase()}${s.substring(1, s.length)}`)
    .join(" ");

  // update frontmatter for each file
  const content = updateFrontmatter(fileContent, resolvedPath, title, header);
  fs.writeFileSync(file, content);
};

const generateKeywordsDictionary = (file) => {
  const fileContent = fs.readFileSync(file, { encoding: "utf8" });
  const lines = fileContent.split("\n");

  const keywords = {};
  let name = "";
  let description = "";

  lines.forEach((line, index) => {
    if (index === lines.length - 1 && name !== "") {
      keywords[name] = description + line;
    }

    if (line.startsWith("#")) {
      if (name !== "") {
        keywords[name] = description;
        description = "";
      }
      const parts = line.split("#");
      name = parts[parts.length - 1].trim().split(" ").join("-").toLowerCase();
    } else if (name !== "") {
      description += line;
    }
  });

  return keywords;
};

const generateDirectory = (url, dirs, files, numberOfFiles, numberOfDirs) => {
  const excludedRootUrl = url.replace(folderPath, "");
  const template = fs
    .readFileSync(templatePath, { encoding: "utf8" })
    .replace(
      'const { url, dirs, files } = { url: "", dirs: [], files: [] };',
      `const { url, dirs, files } = { url: "${excludedRootUrl}", dirs: [${dirs}], files: [${files}] };`
    )
    .replace(
      "const [numberOfFiles, numberOfDirs] = [0, 0];",
      `const [numberOfFiles, numberOfDirs ] = [${numberOfFiles}, ${numberOfDirs}];`
    );

  fs.writeFileSync(`${url}/index.js`, template);
};

function resolveAndGenerate(url) {
  const dirs = getFiles(url, isDirectory);
  const files = getFiles(url, isMarkdownFile);

  files.forEach((file) => resolveFile(file));

  const [numberOfFiles, numberOfDirs] = findFileAndDirectoryCount(url);

  generateDirectory(
    url,
    dirs.map((dir) => `"${path.parse(dir).name}"`),
    files.map((file) => `"${path.parse(file).name}"`),
    numberOfFiles,
    numberOfDirs
  );

  dirs.forEach((dir) => {
    resolveAndGenerate(dir);
  });
}

function resolveKeywords(url) {
  const dirs = getFiles(url, isDirectory);
  const files = getFiles(url, isMarkdownFile);

  let keywords = {};
  files.forEach((file) => {
    if (isKeyWordsFile(file)) {
      const contents = generateKeywordsDictionary(file);
      keywords = { ...keywords, ...contents };
    }
  });

  dirs.forEach((dir) => {
    const contents = resolveKeywords(dir);
    keywords = { ...keywords, ...contents };
  });
  return keywords;
}

function findFileAndDirectoryCount(url) {
  const dirs = getFiles(url, isDirectory);
  const files = getFiles(url, isMarkdownFile);

  let numberOfFiles = files.length;
  let numberOfDirs = dirs.length;

  dirs.forEach((dir) => {
    const [fs, ds] = findFileAndDirectoryCount(dir);
    numberOfFiles += fs;
    numberOfDirs += ds;
  });

  return [numberOfFiles, numberOfDirs];
}

(() => {
  const keywords = resolveKeywords(folderPath);
  const json = JSON.stringify(keywords);
  fs.writeFileSync(keywordsPath, json);
  execSync(`node_modules/prettier/bin-prettier.js --write ${keywordsPath}`);

  resolveAndGenerate(folderPath);
})();
