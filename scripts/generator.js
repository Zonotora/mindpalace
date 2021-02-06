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

const createFrontmatter = (slug, title, header) =>
  [
    "---",
    `slug: ${slug}`,
    `date: ${new Date().toISOString().split("T")[0]}`,
    `title: ${title}`,
    `header: ${JSON.stringify(header)}`,
    "---",
    "\n",
  ].join("\n");

const resolveFile = (file) => {
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

  if (!fileContent.startsWith("---")) {
    fs.writeFileSync(
      file,
      `${createFrontmatter(resolvedPath, title, header)}${fileContent}`
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
