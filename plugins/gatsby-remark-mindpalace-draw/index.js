const visit = require("unist-util-visit");
const { generate } = require("./generator");
const { Parser } = require("./parser");

module.exports = ({ markdownAST }, options) => {
  visit(markdownAST, "code", (node) => {
    // console.log(node);

    const parser = new Parser(node);
    const ast = parser.parse();
    console.log(ast);
    if (ast) {
      const html = generate(ast);
      console.log(html);
      node.type = "html";
      node.children = undefined;
      node.value = html;
    }
  });

  return markdownAST;
};
