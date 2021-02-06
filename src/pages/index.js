import React from "react";
import { Link } from "gatsby";

import Layout from "components/layout";
import SEO from "components/seo";
import "templates/template.css";

const IndexPage = () => {
  const { url, dirs, files } = { url: "", dirs: [], files: ["control-theory","latex","python"] };

  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is a template</h1>
      <div className="template-directories">
        {dirs.map((dir) => (
          <Link key={dir} to={`${url}/${dir}`}>
            {dir}
          </Link>
        ))}
      </div>
      <div className="template-files">
        {files.map((file) => (
          <Link key={file} to={`${url}/${file}`}>
            {file}
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
