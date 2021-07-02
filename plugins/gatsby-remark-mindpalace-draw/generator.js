let localDefinitions = {};
let localStyles = [];

const definitions = {
  svg: {
    x: "0",
    y: "0",
    w: "100%",
    h: "200px",
    viewBox: "0 0 1000 200",
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
  // d attribute
  // MoveTo: M, m
  // LineTo: L, l, H, h, V, v
  // Cubic Bézier Curve: C, c, S, s
  // Quadratic Bézier Curve: Q, q, T, t
  // Elliptical Arc Curve: A, a
  // ClosePath: Z, z
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
  text: {
    x: 0,
    y: 0,
    class: "svg-text",
  },
};

validAttributes = [
  "class",
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
  "arrow",
  "dashed",
];

const parseArrow = (attribute) => {
  let [position, size] = attribute.split("-");

  size = size ? size : "small";

  if (position === "start")
    return `marker-start="url(#svg-arrow-start-${size})" `;
  else if (position === "end")
    return `marker-end="url(#svg-arrow-end-${size})" `;
  else if (position === "both")
    return `marker-start="url(#svg-arrow-start-${size})" marker-end="url(#svg-arrow-end-${size})" `;
  return "";
};

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
        case "arrow":
          html += parseArrow(attributes[key]);
          break;
        case "dashed":
          html += `stroke-dasharray="${attributes[key]}" `;
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

      case "text": {
        const pushedStyles =
          localStyles.length > 0 ? localStyles[localStyles.length - 1] : {};
        const attributes = generateTag(
          {
            ...definitions[element.type],
            ...element,
            ...pushedStyles,
          },
          svg
        );
        html += `\t<${element.type} ${attributes}>\n`;
        if ("children" in element) {
          html += `\t\t${element["children"][0].value}\n`;
        }
        html += `\t</${element.type}>\n`;

        break;
      }

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

const preamble = () => {
  return `    <defs>
      <marker id='svg-arrow-start-small' orient='auto' markerWidth='10' markerHeight='10' refX='4' refY='2'>
        <path d='M4,0 V4 L0,2 Z' fill='black' />
      </marker>

      <marker id='svg-arrow-end-small' orient='auto' markerWidth='10' markerHeight='10' refX='0' refY='2'>
        <path d='M0,0 V4 L4,2 Z' fill='black' />
      </marker>

      <marker id="svg-arrow-start-big" orient="auto" markerWidth="14" markerHeight="14" refY="6" refX="8">
        <path d="M 8,3 v 6 L 0, 6" fill="black"></path>
      </marker>

      <marker id="svg-arrow-end-big" orient="auto" markerWidth="14" markerHeight="14" refX="0" refY="6">
        <path d="M0,3 v 6 L 8, 6" fill="black"></path>
      </marker>
    </defs>
  `;
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

  html += preamble();

  html += generateWithoutSvg(ast, { ...definitions["svg"], ...svg });

  html += "</svg>\n</div>";
  return html;
};

module.exports = {
  generate,
};
