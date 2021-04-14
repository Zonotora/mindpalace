const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");

const keywordLinks = (node) => {
  // @(name)(url)
  const value = toString(node);

  if (value.includes("@(")) {
    let start,
      middle = -1,
      end = 0;
    let html = "<p>";

    for (let i = 1; i < value.length; i++) {
      if (value[i] === "(" && value[i - 1] === "@") start = i;
      else if (value[i] === "(" && value[i - 1] === ")") middle = i;
      else if (value[i] === ")" && middle !== -1) {
        const identifier = value.substring(start + 1, middle - 1);
        const content = value.substring(middle + 1, i);

        html += `${value.substring(end, start - 1)}
          <span class="keyword-link" id="keyword-link-${content}">
          ${identifier}
          </span>
          `;
        end = i + 1;
        start = middle = -1;
      }
    }

    if (end < value.length) {
      html += value.substring(end);
    }

    html += "</p>";

    node.type = "html";
    node.children = undefined;
    node.value = html;
  }
};

const findReferences = (node, references) => {
  // {id}:
  // name: <name>

  const value = toString(node);

  if (value.startsWith("{")) {
    const lines = value.split("\n");
    if (!lines[0].endsWith("}:")) return;

    const id = lines[0].substring(1, lines[0].indexOf("}:"));
    const values = {};

    for (let i = 1; i < lines.length; i++) {
      const [key, val, ...rest] = lines[i].split(":");

      if (key && val)
        values[key.trim()] =
          rest.length !== 0 ? [val, ...rest].join(":").trim() : val.trim();
    }
    values["order"] = Object.keys(references).length + 1;

    references[id] = values;

    node.type = "html";
    node.children = undefined;
    node.value = "";
  }
};

const insertReferenceLinks = (node, references) => {
  const value = toString(node);

  if (value.includes("@{")) {
    let start,
      end = 0;
    let html = "<p>";

    for (let i = 1; i < value.length; i++) {
      if (value[i] === "{" && value[i - 1] === "@") {
        end = i;
      } else if (value[i] === "}") {
        const id = value.substring(end + 1, i);
        const content = id in references ? references[id].order : "UNKNOWN";
        html += `${value.substring(start, end - 1)}
          <sup><a class="reference-link" href="#reference-link-${
            id in references ? id : "UNKNOWN"
          }">[${content}]</a></sup>
        `;

        start = i + 1;
      }
    }

    if (start < value.length) {
      html += value.substring(start);
    }

    html += "</p>";

    node.type = "html";
    node.children = undefined;
    node.value = html;
  }
};

const createReferences = (markdownAST, references) => {
  let value = "";
  for (const key in references) {
    value += `<div class="reference">`;
    value += `<div class="reference-number"
      id="reference-link-${key}">[${references[key].order}]</div>`;
    value += `<div class="reference-content">`;
    if (references[key].author)
      value += `${references[key].author}${references[key].year ? "" : "."} `;
    if (references[key].year) value += `(${references[key].year}). `;
    if (references[key].title) value += `<i>${references[key].title}</i>. `;
    if (references[key].url)
      value += `<a href="${references[key].url}">${references[key].url}</a>. `;

    value += "</div></div>";
  }

  const node = {
    type: "html",
    children: undefined,
    value: `<div class="reference-items">${value}</div>`,
  };
  markdownAST.children.push(node);
};

module.exports = ({ markdownAST }, options) => {
  let references = {};

  visit(markdownAST, "paragraph", (node) => {
    findReferences(node, references);
  });

  visit(markdownAST, "paragraph", (node) => {
    keywordLinks(node);
    insertReferenceLinks(node, references);
  });

  createReferences(markdownAST, references);

  return markdownAST;
};
