let localDefinitions = {};
let localStyles = [];

const definitions = {
  svg: {
    x: "0",
    y: "0",
    w: "100",
    h: "100",
    viewBox: "0 0 20 10",
    xmlns: "http://www.w3.org/2000/svg",
  },
  box: {
    x: "0",
    y: "0",
    w: "50",
    h: "50",
    align: "horizontal",
  },
  rect: {
    x: "center",
    y: "center",
    w: "50",
    h: "50",
    fill: "none",
    stroke: "#000000",
    "stroke-width": "2",
    r: "10",
  },
  circle: {
    cx: "center",
    cy: "center",
    r: "25",
    fill: "none",
    stroke: "#000000",
    "stroke-width": "2",
  },
  path: {
    fill: "none",
    stroke: "#000000",
    "stroke-width": "2",
  },
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
  arrow: {
    from: "",
    to: "",
    path: "",
    stroke: "#000000",
    "stroke-width": "2",
  },
};

validAttributes = [
  "x",
  "y",
  "cx",
  "cy",
  "w",
  "h",
  "fill",
  "stroke",
  "stroke-width",
  "id",
  "r",
  "xmlns",
  "to",
  "from",
  "align", // horizontal, vertical
  "d",
  "viewBox",
];

const getSize = (key, element) => {
  if (element["type"] === "circle") return 2 * parseInt(element["r"]);
  return parseInt(element[key]);
};

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

const parseCoord = (attributes, key, base) => {
  if (attributes[key] === "center") {
    let size = 0;
    if (key === "x" || key === "y")
      size =
        key === "x"
          ? parseInt(base["w"]) / 2 - parseInt(attributes["w"]) / 2
          : parseInt(base["h"]) / 2 - parseInt(attributes["h"]) / 2;
    else
      size = key === "cx" ? parseInt(base["w"]) / 2 : parseInt(base["h"]) / 2;

    return `${key}="${size}" `;
  }

  return `${key}="${attributes[key]}" `;
};

const getSizeOfChildren = (type, children) => {
  let size = 0;
  for (const child of children) {
    if (type in child) size += parseInt(child[type]);
    else if ("r" in child) size += parseInt(child["r"]) * 2;
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

  const sizeType = mutatedBox["align"] === "horizontal" ? "w" : "h";
  const coordType = mutatedBox["align"] === "horizontal" ? "x" : "y";
  const size = getSizeOfChildren(sizeType, mutatedChildren);
  const gapSize =
    (parseInt(mutatedBox[sizeType]) - size) / (mutatedChildren.length - 1);

  if (gapSize < 0) {
    throw new Error(
      "Children have combined size that is greater than box size"
    );
  }

  for (
    let i = 0, accCoord = parseInt(mutatedBox[coordType]);
    i < mutatedChildren.length;
    i++
  ) {
    const child = mutatedChildren[i];

    if (child["type"] === "circle") {
      const coordMapping = { x: "cx", y: "cy" };
      child[coordMapping[coordType]] = accCoord + parseInt(child["r"]);
    } else child[coordType] = accCoord;

    accCoord += getSize(sizeType, child) + gapSize;
  }

  return mutatedChildren;
};

const generateTag = (attributes, base) => {
  let html = "";
  for (const key of validAttributes) {
    if (key in attributes) {
      switch (key) {
        case "w":
          html += `width="${attributes[key]}" `;
          break;
        case "h":
          html += `height="${attributes[key]}" `;
          break;
        case "x":
        case "y":
        case "cx":
        case "cy":
          html += parseCoord(attributes, key, base);
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

const generateWithoutSvg = (ast, svg) => {
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
          html += generateWithoutSvg(element["children"], svg);
        }

        localStyles.pop();
        break;

      case "box":
        for (const key in element) {
          styles[key] = element[key];
        }

        if ("children" in element) {
          element["children"] = setSizesOfChildrenInBox(styles);
          html += generateWithoutSvg(element["children"], svg);
        }

        break;

      default:
        const redifinitions = { ...definitions, ...localDefinitions };
        if (element.type in redifinitions) {
          const pushedStyles =
            localStyles.length > 0 ? localStyles[localStyles.length - 1] : {};

          const attributes = generateTag(
            {
              ...redifinitions[element.type],
              ...element,
              ...pushedStyles,
            },
            svg
          );

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

  html += `<div style="text-align: center;">\n<svg ${attributes}>\n`;

  html += generateWithoutSvg(ast, { ...definitions["svg"], ...svg });

  html += "</svg>\n</div>";
  return html;
};

module.exports = {
  generate,
};
