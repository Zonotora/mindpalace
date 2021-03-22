const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const folderPath = "src/pages";
const templatePath = "src/templates/folder.js";

const activeFiles = execSync(
  `git diff --name-only ${folderPath}; git ls-files --others --exclude-standard`
).toString();

const isDirectory = (url) => fs.statSync(url).isDirectory();
const isMarkdownFile = (url) =>
  fs.statSync(url).isFile() && path.extname(url) === ".md";

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

const generate = (url, dirs, files) => {
  const excludedRootUrl = url.replace(folderPath, "");
  const template = fs
    .readFileSync(templatePath, { encoding: "utf8" })
    .replace(
      'const { url, dirs, files } = { url: "", dirs: [], files: [] };',
      `const { url, dirs, files } = { url: "${excludedRootUrl}", dirs: [${dirs}], files: [${files}] };`
    );

  fs.writeFileSync(`${url}/index.js`, template);
};

(function run(url) {
  const dirs = getFiles(url, isDirectory);
  const files = getFiles(url, isMarkdownFile);

  files.forEach((file) => resolveFile(file));

  generate(
    url,
    dirs.map((dir) => `"${path.parse(dir).name}"`),
    files.map((file) => `"${path.parse(file).name}"`)
  );

  dirs.forEach((dir) => {
    run(dir);
  });
})(folderPath);
