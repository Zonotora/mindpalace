import React from "react";
import { Link } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/seo";
import { DirectoryHeader } from "components/Header";
import "templates/template.css";

const IndexPage = () => {
  const { url, dirs, files } = { url: "/machine-learning", dirs: [], files: ["decision-trees","machine-learning"] };

  return (
    <Layout>
      <DirectoryHeader
        parent={url.substring(0, url.lastIndexOf("/"))}
        siteTitle={url.substring(0, url.lastIndexOf("/"))}
      />
      <SEO title="Home" />
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
