const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");

const keywordLinks = (node) => {
  const value = toString(node);

  if (value.includes("#(")) {
    let start,
      middle = -1,
      end = 0;
    let html = "<p>";

    for (let i = 1; i < value.length; i++) {
      if (value[i] === "(" && value[i - 1] === "#") start = i;
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

module.exports = ({ markdownAST }, options) => {
  visit(markdownAST, "paragraph", (node) => {
    keywordLinks(node);
  });

  return markdownAST;
};
