let localDefinitions = {};
let localStyles = [];

const definitions = {
  svg: {
    x: "0",
    y: "0",
    w: "100",
    h: "100",
    xmlns: "http://www.w3.org/2000/svg",
  },
  box: {
    x: "center",
    y: "center",
    w: "50",
    h: "50",
    align: "horizontal",
    "align-type": "spaced",
  },
  rect: {
    x: "center",
    y: "center",
    w: "50",
    h: "50",
    fill: "transparent",
    stroke: "#000000",
    "stroke-width": "2",
    r: "10",
  },
  circle: {
    cx: "center",
    cy: "center",
    r: "25",
    fill: "transparent",
    stroke: "#000000",
    "stroke-width": "2",
  },
};

validAttributes = [
  "pos",
  "x",
  "y",
  "cx",
  "cy",
  "w",
  "h",
  "size",
  "fill",
  "stroke",
  "stroke-width",
  "id",
  "r",
  "xmlns",
  "to",
  "from",
  "align",
  "align-type",
];

const parseRadius = (attributes, key) => {
  switch (attributes.type) {
    case "rect":
      return `rx="${attributes[key]}" ry="${attributes[key]}" `;
    case "circle":
      return `r="${attributes[key]}" `;
    default:
      return "";
  }
};

const getSizeOfChildren = (type, children) => {
  let size = 0;
  for (const child of children) {
    if (type in child) size += parseInt(child[type]);
    else if ("r" in child) size += parseInt(child["r"]);
  }
  return size;
};

const setSizesOfChildrenInBox = (box) => {
  const children = box["children"];
  const redifinitions = { ...definitions, ...localDefinitions };
  const pushedStyles =
    localStyles.length > 0 ? localStyles[localStyles.length - 1] : {};

  const mutatedBox = { ...redifinitions[box.type], ...box };
  const mutatedChildren = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const attributes = {
      ...redifinitions[child.type],
      ...child,
      ...pushedStyles,
    };

    mutatedChildren.push(attributes);
  }

  // parseSize(mutatedBox["size"])
  const type = mutatedBox["align"] === "vertical" ? "height" : "width";
  const size = getSizeOfChildren(type, mutatedChildren);
  const gapSize = (50 - size) / mutatedChildren.length;

  if (gapSize < 0) {
    throw new Error(
      "Children have combined size that is greater than box size"
    );
  }

  console.log(size + " " + gapSize);

  for (let i = 0, accSize = 0; i < mutatedChildren.length; i++) {
    const child = mutatedChildren[i];

    if (mutatedBox["align"] === "vertical") {
      //
      if (mutatedBox["align-type"] === "between") {
      } else if (mutatedBox["align-type"] === "spaced") {
        child["pos"] = `${50} ${accSize}`;
      }
    } else if (mutatedBox["align"] === "horizontal") {
      if (mutatedBox["align-type"] === "between") {
      } else if (mutatedBox["align-type"] === "spaced") {
        child["pos"] = `${accSize} ${50}`;
      }
    }

    accSize += child["size"] + gapSize;
  }

  return mutatedChildren;
};

const generateTag = (attributes) => {
  let html = "";
  // console.log(attributes);
  for (const key of validAttributes) {
    if (key in attributes) {
      switch (key) {
        case "w":
          html += `width="${attributes[key]}" `;
          break;
        case "h":
          html += `height="${attributes[key]}" `;
          break;
        case "r":
          html += parseRadius(attributes, key);
          break;
        default:
          html += `${key}="${attributes[key]}" `;
          break;
      }
    }
  }
  return html;
};

const generateWithoutSvg = (ast) => {
  let html = "";

  for (const element of ast) {
    if (!("type" in element)) {
      //console.warn("type is not found in element");
      continue;
    }

    const styles = {};

    switch (element.type) {
      case "define":
        if ("name" in element) {
          for (const key in element) {
            styles[key] = element[key];
          }

          localDefinitions[element.name] = styles;
        }
        break;

      case "push":
        for (const key in element) {
          styles[key] = element[key];
        }
        localStyles.push(styles);

        if ("children" in element) {
          html += generateWithoutSvg(element["children"]);
        }

        localStyles.pop();
        break;

      case "box":
        for (const key in element) {
          styles[key] = element[key];
        }

        if ("children" in element) {
          element["children"] = setSizesOfChildrenInBox(styles);
          html += generateWithoutSvg(element["children"]);
        }

        break;

      default:
        const redifinitions = { ...definitions, ...localDefinitions };
        if (element.type in redifinitions) {
          const pushedStyles =
            localStyles.length > 0 ? localStyles[localStyles.length - 1] : {};

          const attributes = generateTag({
            ...redifinitions[element.type],
            ...element,
            ...pushedStyles,
          });

          console.log({
            ...redifinitions[element.type],
            ...element,
            ...pushedStyles,
          });

          html += `\t<${element.type} ${attributes} />\n`;
        } else {
          console.warn(`${element.type} is not found in definitions`);
        }
    }
  }

  return html;
};

const generate = (ast) => {
  let html = "";

  if (ast.length === 0) return "";

  // generate default svg tag
  let svg = {};
  if ("type" in ast[0] && ast[0].type === "svg") {
    svg = ast.shift();
  }
  const attributes = generateTag({ ...definitions["svg"], ...svg });
  html += `<div style="text-align: center;"><svg ${attributes}>\n`;

  html += generateWithoutSvg(ast);

  html += "</svg></div>";
  return html;
};

module.exports = {
  generate,
};
