const fs = require("fs");
const path = require("path");

const folderPath = "src/pages";
const templatePath = "src/templates/indexTemplate.js";

const isDirectory = (url) => fs.statSync(url).isDirectory();
const isMarkdownFile = (url) =>
  fs.statSync(url).isFile() && path.extname(url) === ".md";

const getFiles = (url, func) =>
  fs
    .readdirSync(url)
    .map((name) => path.join(url, name))
    .filter(func);

const createFrontmatter = (slug, headers) =>
  [
    "---",
    `slug: ${slug}`,
    `date: ${new Date().toISOString().split("T")[0]}`,
    "title: This is the title",
    `headers: '${JSON.stringify(headers)}'`,
    "---",
    "\n",
  ].join("\n");

const resolveFile = (file) => {
  const url = file.replace(folderPath, "");
  const parsedUrl = path.parse(url);
  const resolvedPath = path.join(parsedUrl.dir, parsedUrl.name);
  const fileContent = fs.readFileSync(file, { encoding: "utf8" });
  const headers = fileContent
    .split("\n")
    .filter((line) => line.startsWith("#"))
    .map((line) => {
      return {
        depth: line.lastIndexOf("#") - line.indexOf("#") + 1,
        name: line
          .substring(line.lastIndexOf("#") + 1, line.length)
          .trim()
          .split(" ")
          .join("-"),
      };
    });

  if (!fileContent.startsWith("---")) {
    fs.writeFileSync(
      file,
      `${createFrontmatter(resolvedPath, headers)}${fileContent}`
    );
  }
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
