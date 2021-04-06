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

const referenceLinks = (node, references) => {
  // !(name)(title)(year)(url)

  const value = toString(node);

  if (value.includes("!(")) {
    let start,
      end,
      index = 0;
    let values = [];
    let html = "<p>";

    for (let i = 1; i < value.length; i++) {
      if (value[i] === "(" && value[i - 1] === "!") {
        index = i + 1;
        end = i - 1;
      } else if (value[i] === "(" && value[i - 1] === ")") {
        values.push(value.substring(index, i - 1));
        index = i + 1;
      } else if (value[i] === ")" && values.length === 3) {
        values.push(value.substring(index, i));
      }

      if (values.length === 4) {
        const [name, title, year, url] = values;
        references.push({ name, title, year, url });

        html += `${value.substring(start, end)}
          <a class="reference-link" href="#reference-link-item${
            references.length
          }" >
          [${references.length}]
          </a>
          `;

        start = i;
        values = [];
      }
    }

    html += "</p>";

    node.type = "html";
    node.children = undefined;
    node.value = html;
  }
};

const createReferences = (markdownAST, references) => {
  let value = "";
  references.forEach((reference, index) => {
    value += `<div id="reference-link-item${index + 1}">[${index + 1}] ${
      reference.name
    } (${reference.year}). <i>${reference.title}</i>. ${reference.url}.</div>`;
  });

  const node = {
    type: "html",
    children: undefined,
    value: `<div classname="references">${value}</div>`,
  };
  markdownAST.children.push(node);
};

module.exports = ({ markdownAST }, options) => {
  let references = [];

  visit(markdownAST, "paragraph", (node) => {
    keywordLinks(node);
    referenceLinks(node, references);
  });

  createReferences(markdownAST, references);

  return markdownAST;
};
