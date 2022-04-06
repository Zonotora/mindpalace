import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";
import Layout from "components/Layout";
import { FileHeader } from "components/Header";
import Searchfield from "components/Searchfield";
import { ListButton } from "components/Button";
import keywords from "keywords.json";
import "katex/dist/katex.min.css";
import "./template.css";
import "./syntax.css";

const generateTree = (
  header,
  setPosX,
  isTabletOrMobile = false,
  depth = 1,
  sectionText = ""
) => {
  const elements = [];
  const text = depth !== 1 ? `${sectionText}.` : "";
  let section = 1;

  while (header.length > 0) {
    const root = header.shift();
    const isRoot = root.depth === 1 ? "root" : "";
    // console.log(JSON.parse(JSON.stringify(header)));

    // check if current node has a depth which is lesser than current recursion
    // if that is the case return recursion up to current depth
    if (root.depth < depth) {
      header.unshift(root);
      return elements;
    }

    // if there are no items left check if it is root (depth==1)
    if (header.length === 0) {
      elements.push(
        <TreeHeader
          key={root.link}
          className={`last ${isRoot}`}
          name={root.name}
          link={root.link}
          section={`${text}${section}`}
          setPosX={setPosX}
          isTabletOrMobile={isTabletOrMobile}
        />
      );
    }
    // if next item has a greater depth, generate children nodes
    else if (header[0].depth > root.depth) {
      const children = generateTree(
        header,
        setPosX,
        isTabletOrMobile,
        header[0].depth,
        `${text}${section}`
      );
      const isLast =
        (header.length > 0 && header[0].depth < root.depth) ||
        header[0] === undefined
          ? "last"
          : "";

      elements.push(
        <TreeHeader
          key={root.link}
          className={`${isLast} ${isRoot}`}
          name={root.name}
          link={root.link}
          section={`${text}${section}`}
          children={children}
          setPosX={setPosX}
          isTabletOrMobile={isTabletOrMobile}
        />
      );
    }
    // if next item is equal to current item in depth, add current item (root) to elements
    else if (header[0].depth === root.depth) {
      elements.push(
        <TreeHeader
          key={root.link}
          className={isRoot}
          name={root.name}
          link={root.link}
          section={`${text}${section}`}
          setPosX={setPosX}
          isTabletOrMobile={isTabletOrMobile}
        />
      );
    }
    // if next item has a lesser depth, add current item (root) and return elements
    // because we have reached the end of depth for this node
    else {
      elements.push(
        <TreeHeader
          key={root.link}
          className="last"
          name={root.name}
          link={root.link}
          section={`${text}${section}`}
          setPosX={setPosX}
          isTabletOrMobile={isTabletOrMobile}
        />
      );
      return elements;
    }
    section += 1;
  }
  return elements;
};

const TreeHeader = ({
  className = "",
  name,
  link,
  section,
  children = [],
  setPosX,
  isTabletOrMobile = false,
}) => (
  <li>
    <a
      href={`#${link}`}
      onClick={(e) => {
        if (isTabletOrMobile) {
          setPosX(0);
        }
      }}
    >
      <span className={`node ${className}`.trim()}>
        <div className="node-bar" />
        <div className="visibility-box">
          <p>{section}</p>
        </div>
        <div className="status"> </div>
        <p>{name}</p>
      </span>
    </a>
    {children.length > 0 ? <ul>{children}</ul> : <></>}
  </li>
);

const ContentTree = ({ header, style, posX, setPosX }) => (
  <>
    <div className="content-tree" style={style}>
      <div
        style={{
          display: `${posX >= 95 ? "flex" : ""}`,
          justifyContent: "space-evenly",
        }}
      >
        <Searchfield className="file" style={{ flex: "1 1 auto" }} />
        {posX >= 95 ? (
          <ListButton
            style={{
              width: "30px",
              position: "relative",
              left: "0px",
            }}
            onListClick={(e) => onTreeViewClick(e, posX, setPosX, false)}
          />
        ) : (
          <></>
        )}
      </div>

      <div className="content-tree-container">
        <ul className="content-ul">{header}</ul>
      </div>
    </div>
  </>
);

const Slider = ({ setPosX, style }) => {
  const onMouseUp = (e) => {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseDown = (e) => {
    if (e.button === 0) {
      e.preventDefault();
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    }
  };

  const onMouseMove = (e) => {
    e.preventDefault();
    setPosX((e.pageX / window.innerWidth) * 100);
  };

  return <div className="slider" onMouseDown={onMouseDown} style={style} />;
};

const onTreeViewClick = (e, posX, setPosX, isTabletOrMobile) => {
  if (posX < 5) {
    setPosX(isTabletOrMobile ? 100 : 25);
  } else {
    setPosX(0);
  }
};

const addSvgAttribute = (element, attributes) => {
  for (var key in attributes)
    element.setAttributeNS(null, key, attributes[key]);
};

const setupPreCopy = () => {
  const pres = document.getElementsByTagName("pre");
  for (const pre of pres) {
    const copy = document.createElement("div");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svg.appendChild(path);
    addSvgAttribute(svg, {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 1024 1024",
      height: "28px",
      width: "100%",
    });
    addSvgAttribute(path, {
      d:
        "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",
    });

    const code = pre.getElementsByTagName("code")[0];
    copy.onclick = (e) => {
      const text = code.textContent;

      if (!navigator.clipboard) {
        copy.style.backgroundColor = "#db5454";
        return;
      }
      navigator.clipboard.writeText(text).then(
        () => {
          copy.style.backgroundColor = "#98db54";
        },
        () => {
          copy.style.backgroundColor = "#db5454";
        }
      );
    };

    pre.onmouseleave = (e) => {
      copy.style.backgroundColor = "#ddd";
    };
    copy.appendChild(svg);
    pre.appendChild(copy);
  }
};

export default function Template({ data }) {
  const [posX, setPosX] = useState(0);
  const [header, setHeader] = useState([]);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    setupPreCopy();
  }, []);

  useEffect(() => {
    const elements = document.getElementsByClassName("keyword-link");
    for (let i = 0; i < elements.length; i++) {
      const key = elements[i].id.split("-").slice(2).join("-");

      // TODO: use react
      const outer = document.createElement("div");
      const inner = document.createElement("div");
      outer.appendChild(inner);
      outer.className = "keyword-popup";
      inner.innerHTML = keywords[key];

      elements[i].addEventListener("mouseenter", () => {
        const useLeft =
          elements[i].getBoundingClientRect().x < window.innerWidth / 2;
        outer.style.left = useLeft ? "0px" : "auto";
        outer.style.right = !useLeft ? "0px" : "auto";

        elements[i].appendChild(outer);
      });
      elements[i].addEventListener("mouseleave", () => {
        elements[i].removeChild(outer);
      });
    }
  }, []);

  useEffect(() => {
    setHeader(
      generateTree(
        JSON.parse(JSON.stringify(frontmatter.header)),
        setPosX,
        isTabletOrMobile
      )
    );
  }, [frontmatter.header, isTabletOrMobile]);

  useEffect(() => {
    if (isTabletOrMobile) {
      setPosX(0);
    } else {
      setPosX(25);
    }
  }, [isTabletOrMobile]);

  return (
    <Layout>
      <ContentTree
        header={header}
        style={{ width: `${posX}%` }}
        posX={posX}
        setPosX={setPosX}
      />
      <Slider setPosX={setPosX} style={{ left: `${posX}%` }} />
      <div
        className="content-container"
        style={{ width: `calc(${100 - posX}% - 2px)` }}
      >
        <FileHeader
          siteTitle={frontmatter.title}
          parent={frontmatter.slug.substring(
            0,
            frontmatter.slug.lastIndexOf("/")
          )}
          onTreeViewClick={(e) =>
            onTreeViewClick(e, posX, setPosX, isTabletOrMobile)
          }
        />
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <footer
            style={{
              height: "50px",
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        tags
        lastModified(formatString: "YYYY-MM-DD")
        created(formatString: "YYYY-MM-DD")
        title
        header {
          depth
          name
          link
        }
      }
    }
  }
`;
