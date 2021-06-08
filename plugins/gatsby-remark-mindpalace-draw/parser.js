const toString = require("mdast-util-to-string");

const isWhiteSpace = (c) => {
  return c === " " || c === "\n";
};

class Parser {
  constructor(node) {
    this.pointer = 0;
    this.node = node;
    this.chars = toString(node);
  }

  next = () => {
    this.pointer++;
  };

  peek = (c) => {
    if (this.pointer < this.chars.length) {
      return this.chars[this.pointer];
    }
  };

  consume = () => {
    if (this.pointer < this.chars.length) {
      return this.chars[this.pointer++];
    }
  };

  consume_while = (func) => {
    let result = "";
    while (func(this.peek())) result += this.consume();
    return result;
  };

  parse = () => {
    if (this.node.lang === "draw") {
      const ast = [];

      while (this.peek()) {
        this.consume_while(isWhiteSpace);

        if (this.peek() === "<") {
          this.next();

          const name = this.consume_while((c) => !isWhiteSpace(c) && c !== ">");

          const attrMap = {};

          while (this.pointer < this.chars.length && this.peek() !== ">") {
            this.consume_while(isWhiteSpace);

            const ident = this.consume_while((c) => c !== "=");

            this.next();

            let value;
            if (this.peek() === "{") {
              this.next();
              value = this.consume_while((c) => c !== "}");
              this.next();
            } else {
              value = this.consume_while((c) => !isWhiteSpace(c) && c !== ">");
            }

            this.consume_while(isWhiteSpace);

            attrMap[ident] = value;
          }
          this.next();

          ast.push({ type: name, ...attrMap });
        } else {
          this.next();
        }
      }

      return ast;
    }
  };
}

module.exports = {
  Parser,
};
