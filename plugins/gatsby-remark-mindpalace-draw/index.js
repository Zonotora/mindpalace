const visit = require("unist-util-visit");
const { generate } = require("./generator");
const { Parser } = require("./parser");

module.exports = ({ markdownAST }, options) => {
  visit(markdownAST, "code", (node) => {
    const parser = new Parser(node);
    const ast = parser.parse();
    if (ast) {
      const html = generate(ast);
      node.type = "html";
      node.children = undefined;
      node.value = html;
    }
  });

  return markdownAST;
};
