import React from "react";
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

const ContentTree = ({ headers }) => (
  <>
    <div className="content-tree">
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

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const headers = JSON.parse(frontmatter.headers);
  console.log(frontmatter.slug.substring(0, frontmatter.slug.lastIndexOf("/")));

  return (
    <Layout>
      <div className="">
        <ContentTree headers={headers} />
        <div className="content-container">
          <Header
            siteTitle={frontmatter.slug}
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
