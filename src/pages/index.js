import React from "react";
import { Link } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";

const IndexPage = () => {
  const { url, dirs, files } = { url: "", dirs: ["rust","typescript"], files: ["post1"] };

  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is a template</h1>
      {dirs.map((dir) => (
        <Link key={dir} to={`${url}/${dir}`}>
          {dir}
        </Link>
      ))}
      {files.map((file) => (
        <Link key={file} to={`${url}/${file}`}>
          {file}
        </Link>
      ))}
    </Layout>
  );
};

export default IndexPage;
