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

  parse = (condition) => {
    if (this.node.lang === "draw") {
      const ast = [];

      while (this.peek()) {
        this.consume_while(isWhiteSpace);

        if (this.peek() === "<") {
          this.next();

          if (this.peek() === "/") {
            this.next();
            const name = this.consume_while(
              (c) => !isWhiteSpace(c) && c !== ">"
            );
            if (name !== condition) {
              throw new Error(
                "Invalid closing identifier: " +
                  name +
                  " expected: " +
                  condition
              );
            }
            this.next();
            return ast;
          }

          const name = this.consume_while((c) => !isWhiteSpace(c) && c !== ">");

          const attrMap = {};

          while (
            this.pointer < this.chars.length &&
            this.peek() !== ">" &&
            this.peek() !== "/"
          ) {
            this.consume_while(isWhiteSpace);

            const ident = this.consume_while((c) => c !== "=");

            this.next();

            let value;
            if (this.peek() === "{") {
              this.next();
              value = this.consume_while((c) => c !== "}");
              this.next();
            } else {
              value = this.consume_while(
                (c) => !isWhiteSpace(c) && c !== "/" && c !== ">"
              );
            }

            this.consume_while(isWhiteSpace);

            attrMap[ident] = value;
          }
          if (this.peek() === "/") {
            this.next();
            this.consume_while(isWhiteSpace);
            this.next();
          } else {
            this.next();
            const children = this.parse(name);
            attrMap["children"] = children;
          }

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
