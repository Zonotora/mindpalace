import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "components/layout";
import Header from "components/header";
import "./template.css";
import "./syntax.css";

const TreeHeader = ({ className = "", name, height = "calc(50% + 1px)" }) => (
  <a href={`#${name}`}>
    <span className={`node ${className}`}>
      <div className="test" style={{ height }} />
      <div className="visibility-box">
        <p>1.0</p>
      </div>
      <div className="status"> </div>
      <p>{name}</p>
    </span>
  </a>
);

const ContentTree = ({ posX, headers }) => (
  <>
    <div className="content-tree" style={{ width: `${posX}%` }}>
      <ul className="content-ul">
        {headers.map((header) => (
          <li key={header.name}>
            <TreeHeader name={header.name} />
          </li>
        ))}
      </ul>
    </div>
  </>
);

const Slider = ({ posX, setPosX }) => {
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

  return (
    <div
      className="slider"
      onMouseDown={onMouseDown}
      style={{ left: `${posX}%` }}
    />
  );
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [posX, setPosX] = useState(20);
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const headers = JSON.parse(frontmatter.headers);

  return (
    <Layout>
      <div className="">
        <ContentTree posX={posX} headers={headers} />
        <Slider posX={posX} setPosX={setPosX} />
        <div
          className="content-container"
          style={{ width: `calc(${100 - posX}% - 2px)` }}
        >
          <Header
            siteTitle={frontmatter.title}
            parent={frontmatter.slug.substring(
              0,
              frontmatter.slug.lastIndexOf("/")
            )}
          />
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
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
        headers
      }
    }
  }
`;
