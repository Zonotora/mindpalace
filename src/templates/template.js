import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import katex from "katex";
import "./template.css";
import "./syntax.css";

const insertClass = (index, arr, name) => {
  if (index > 0 && index < arr.length - 1) {
    arr[index - 1] = `${arr[index - 1].substring(
      0,
      arr[index - 1].length - 3
    )} <div class="${name}"> <p>`;
    arr[index + 1] = `</p> </div> ${arr[index + 1].substring(
      4,
      arr[index + 1].length
    )}`;
  }
};

const renderMathExpr = (html) => {
  const expr = html.split("$$");

  for (let i = 0; i < expr.length; i++) {
    const e = expr[i];
    if (i % 2 == 0) {
      const inline = e.split("$");
      for (let index = 1; index < inline.length; index += 2)
        inline[index] = katex.renderToString(inline[index]);

      expr[i] = inline.join("");
    } else {
      const start = e.indexOf("<p>");
      let multiline = e;
      if (start > 0) {
        multiline = multiline.substring(start + 3, e.length);
        multiline = multiline.substring(0, multiline.indexOf("</p>"));
      }

      insertClass(i, expr, "multiline-math");
      expr[i] = katex.renderToString(multiline);
    }
  }

  return expr.join("");
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const mathHtml = renderMathExpr(html);

  return (
    <Layout>
      <div className="">
        <div className="">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="container"
            dangerouslySetInnerHTML={{ __html: mathHtml }}
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
      }
    }
  }
`;
