const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const folderPath = "src/pages";
const templatePath = "src/templates/folder.js";
const keywordsPath = "src/keywords.json";
const fileStructurePath = "src/pages/structure.md";

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

const getFrontmatter = (fileContent) => {
  const frontmatter = {};
  const [, frontmatterContent, ...rest] = fileContent.split("---\n");

  // everything that is not frontmatter
  // if we have no content than add '---' to the last line
  const content = `\n${rest
    .map((e, i) => `${i !== 0 ? "---\n" : ""}${e}`)
    .join("")}`;

  if (frontmatterContent) {
    frontmatterContent.split("\n").forEach((line) => {
      if (line) {
        // we dont care if each line has more than one ':'
        const [key, value, ...rest] = line.split(":");
        if (rest.length !== 0)
          frontmatter[key] = [value, ...rest].join(":").trim();
        else frontmatter[key] = value.trim();
      }
    });
  }

  return [frontmatter, content];
};

const updateFrontmatter = (fileContent, slug, title, header) => {
  // update existing frontmatter
  if (fileContent.startsWith("---\n")) {
    const [frontmatter, content] = getFrontmatter(fileContent);

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

const generateDirectory = (
  url,
  dirs,
  files,
  numberOfFiles,
  numberOfDirs,
  tags,
  tagsInFiles
) => {
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
    )
    .replace(
      "const [tags, tagsInFiles] = [{}, {}];",
      `const [tags, tagsInFiles] = [${tags}, ${tagsInFiles}];`
    );

  fs.writeFileSync(`${url}/index.js`, template);
};

function resolveAndGenerate(url) {
  const dirs = getFiles(url, isDirectory);
  const files = getFiles(url, isMarkdownFile);

  files.forEach((file) => resolveFile(file));

  const [numberOfFiles, numberOfDirs, tags, tagsInFiles] = getMetaInformation(
    url
  );

  generateDirectory(
    url,
    dirs.map((dir) => `"${path.parse(dir).name}"`),
    files.map((file) => `"${path.parse(file).name}"`),
    numberOfFiles,
    numberOfDirs,
    JSON.stringify(tags),
    JSON.stringify(tagsInFiles)
  );

  dirs.forEach((dir) => {
    resolveAndGenerate(dir);
  });
}

const generateFileStructure_ = (url, indent, last, isRoot) => {
  const dir = url.split("/");
  let ret = `${indent}${isRoot ? "root" : last ? "└──" : "├──"} ${
    isRoot ? "" : dir[dir.length - 1]
  }\n`;
  indent += isRoot ? "" : last ? "    " : "│   ";
  const dirs = getFiles(url, isDirectory);
  const files = getFiles(url, isMarkdownFile);

  files.forEach((file, i) => {
    const localIndent =
      i === files.length - 1 && dirs.length === 0 ? "└──" : "├──";

    ret += `${indent}${localIndent} ${path.basename(
      file,
      path.extname(file)
    )}\n`;
  });

  dirs.forEach((dir, i) => {
    ret += generateFileStructure_(dir, indent, i === dirs.length - 1, false);
  });

  return ret;
};

const generateFileStructure = () => {
  if (fs.existsSync(fileStructurePath)) {
    const fileContent = fs.readFileSync(fileStructurePath, {
      encoding: "utf8",
    });
    const frontmatter = fileContent.split("---").filter((s) => s !== "")[0];
    console.log(frontmatter);

    const structure = generateFileStructure_(folderPath, "", "", true);

    fs.writeFileSync(
      fileStructurePath,
      `---${frontmatter}---\n\n<pre>${structure}</pre>`
    );
  }
};

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

function getMetaInformation(url) {
  const dirs = getFiles(url, isDirectory);
  const files = getFiles(url, isMarkdownFile);

  let numberOfFiles = files.length;
  let numberOfDirs = dirs.length;
  let tagsInFiles = {};
  let tags = {};

  files.forEach((file) => {
    const fileContent = fs.readFileSync(file, { encoding: "utf8" });
    const [frontmatter] = getFrontmatter(fileContent);

    if ("tags" in frontmatter) {
      for (const tag of JSON.parse(frontmatter["tags"])) {
        if (tag in tags) tags[tag] += 1;
        else tags[tag] = 1;

        const id = path.basename(file, path.extname(file));

        if (id in tagsInFiles) tagsInFiles[id] = [...tagsInFiles[id], tag];
        else tagsInFiles[id] = [tag];
      }
    }
  });

  dirs.forEach((dir) => {
    const [fs, ds, ts, tis] = getMetaInformation(dir);
    numberOfFiles += fs;
    numberOfDirs += ds;

    if (Object.keys(ts).length !== 0) {
      for (const key in ts) {
        if (key in tags) tags[key] += ts[key];
        else tags[key] = ts[key];
      }
    }

    if (Object.keys(tis).length !== 0) {
      const uniqueTags = [];
      for (const key in tis) {
        for (const t of tis[key]) {
          if (!uniqueTags.includes(t)) uniqueTags.push(t);
        }
      }

      const id = dir.substring(url.length + 1);

      tagsInFiles[id] = uniqueTags;
    }
  });

  return [numberOfFiles, numberOfDirs, tags, tagsInFiles];
}

(() => {
  const keywords = resolveKeywords(folderPath);
  const json = JSON.stringify(keywords);
  fs.writeFileSync(keywordsPath, json);
  execSync(`node_modules/prettier/bin-prettier.js --write ${keywordsPath}`);
  resolveAndGenerate(folderPath);
  generateFileStructure();
})();
