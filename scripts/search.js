const lunr = require("lunr");
const fs = require("fs");
const path = require("path");

const folderPath = "src/pages";
const indexPath = "src/index.json";
const pagesPath = "src/pages.json";

const isDirectory = (url) => fs.statSync(url).isDirectory();
const isMarkdownFile = (url) =>
  fs.statSync(url).isFile() && path.extname(url) === ".md";
const getFiles = (url, func) =>
  fs
    .readdirSync(url)
    .map((name) => path.join(url, name))
    .filter(func);

const traverse = (url) => {
  const dirs = getFiles(url, isDirectory);
  const files = getFiles(url, isMarkdownFile);
  const pages = [];

  files.forEach((file) => {
    const fileContent = fs.readFileSync(file, { encoding: "utf8" });
    const [_, frontmatter, content] = fileContent.split("---");
    const header = {};
    for (const line of frontmatter.split("\n")) {
      const [key, value] = line.split(":");
      if (key) header[key.trim()] = value.trim();
    }
    // console.log(content);

    let isCode = false;
    let lastHeaderName = "";
    let subContent = "";
    for (const line of content.split("\n")) {
      if (line === "") continue;
      if (line.startsWith("```")) isCode = !isCode;
      if (!isCode && line.startsWith("#")) {
        const parts = line.split(" ");
        const headerName = parts.slice(1).join("-");

        pages.push({
          id: `${header.slug}#${lastHeaderName}`,
          title: `${header.slug}#${lastHeaderName}`,
          body: subContent,
        });

        subContent = "";
        lastHeaderName = headerName;
        continue;
      }

      subContent += line + "\n";
    }

    // add the last section
    pages.push({
      id: `${header.slug}#${lastHeaderName}`,
      title: `${header.slug}#${lastHeaderName}`,
      body: subContent,
    });
  });

  dirs.forEach((dir) => pages.push(...traverse(dir)));

  return pages;
};

const pages = traverse(folderPath);

const idx = lunr(function () {
  this.ref("id");
  this.field("title");
  this.field("body");
  this.metadataWhitelist = ["position"];

  pages.forEach(function (page) {
    this.add(page);
  }, this);
});

fs.writeFileSync(indexPath, JSON.stringify(idx));

const pagesDict = {};
for (const page of pages) {
  pagesDict[page.id] = page;
}

fs.writeFileSync(pagesPath, JSON.stringify(pagesDict));
