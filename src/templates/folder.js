import React from "react";
import { Link } from "gatsby";

import Layout from "components/Layout";
import { DirectoryHeader } from "components/Header";
import "templates/template.css";

const IndexPage = () => {
  const { url, dirs, files } = { url: "", dirs: [], files: [] };

  return (
    <Layout>
      <DirectoryHeader
        parent={url.substring(0, url.lastIndexOf("/"))}
        siteTitle={url.substring(0, url.lastIndexOf("/"))}
      />

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
