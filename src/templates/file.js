import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";
import Layout from "components/Layout";
import { FileHeader } from "components/Header";
import Searchfield from "../components/Searchfield";
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
        header.length > 0 && header[0].depth < root.depth ? "last" : "";

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

const ContentTree = ({ header, style }) => (
  <>
    <div className="content-tree" style={style}>
      <Searchfield className="file" />
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

export default function Template({ data }) {
  const [posX, setPosX] = useState(0);
  const [header, setHeader] = useState([]);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

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
      <ContentTree header={header} style={{ width: `${posX}%` }} />
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
        date(formatString: "YYYY-MM-DD")
        slug
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
