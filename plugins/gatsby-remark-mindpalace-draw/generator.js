const definitions = {
  svg: {
    size: "100 100",
    xmlns: "http://www.w3.org/2000/svg",
  },
  rect: {
    pos: "center",
    size: "50 50",
    fill: "transparent",
    stroke: "#000000",
    "stroke-width": "2",
    r: "10",
    id: "",
  },
  circle: {
    pos: "center",
    r: "25",
    fill: "transparent",
    stroke: "#000000",
    "stroke-width": "2",
    id: "",
  },
};

styleProperties = [
  "pos",
  "size",
  "fill",
  "stroke",
  "stroke-width",
  "id",
  "r",
  "xmlns",
];

const getPositionType = (key) => {
  const type = {
    rect: ["x", "y"],
    circle: ["cx", "cy"],
  }[key];

  if (type === undefined) return ["x", "y"];
  else return type;
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

const parseSize = (size) => {
  const parts = size.split(" ");
  if (parts.length > 1) {
    return `width="${parts[0]}" height="${parts[1]}" `;
  } else {
    // calculate the size depending on surroundings
    return "size=center ";
  }
  return "";
};

const parsePos = (attributes, key) => {
  const size = attributes[key];
  const parts = size.split(" ");
  const [x, y] = getPositionType(attributes.type);

  if (parts.length > 1) {
    return `${x}="${parts[0]}" ${y}="${parts[1]}" `;
  } else {
    // calculate the size depending on surroundings
    if ("size" in attributes) {
      return "pos=center ";
    }
  }
  return "";
};

const generateTag = (attributes) => {
  let html = "";
  // console.log(attributes);
  for (const key of styleProperties) {
    if (key in attributes) {
      switch (key) {
        case "size":
          html += parseSize(attributes[key]);
          break;
        case "pos":
          html += parsePos(attributes, key);
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

const generate = (ast) => {
  let localDefinitions = {};
  let localStyles = [];
  let html = "";

  if (ast.length === 0) return "";

  // generate default svg tag
  let attributes = "";
  if ("type" in ast[0] && ast[0].type === "svg") {
    const svg = ast.shift();

    attributes = generateTag(svg);
  } else {
    attributes = generateTag(definitions["svg"]);
  }
  html += `<svg ${attributes}>\n`;

  for (const element of ast) {
    if (!("type" in element)) {
      //console.warn("type is not found in element");
      continue;
    }

    switch (element.type) {
      case "define":
        if ("name" in element) {
          const styles = {};
          for (const key of styleProperties) {
            if (key in element) {
              styles[key] = element[key];
            }
          }

          localDefinitions[element.name] = styles;
        }
        break;

      case "push":
        const styles = {};
        for (const key of styleProperties) {
          if (key in element) {
            styles[key] = element[key];
          }
        }
        localStyles.push(styles);
        break;

      case "pop":
        localStyles.pop();
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

          html += `\t<${element.type}  ${attributes}/>\n`;
        } else {
          console.warn(`${element.type} is not found in definitions`);
        }
    }
  }

  html += "</svg>";
  return html;
};

module.exports = {
  generate,
};
