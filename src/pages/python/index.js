import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { FaRegFile, FaFolder } from "react-icons/fa";

import Layout from "components/Layout";
import { DirectoryHeader } from "components/Header";
import "templates/template.css";

const FileSystemItem = ({ fileName, fileType }) => {
  return (
    <div className="template-filesystem-item">
      <div className="template-filesystem-item-icon">
        {fileType === "file" ? <FaRegFile /> : <FaFolder />}
      </div>
      <div className="template-filesystem-item-text">{fileName}</div>
    </div>
  );
};

const IndexPage = () => {
  const [siteTitle, setSiteTitle] = useState("");
  const { url, dirs, files } = { url: "/python", dirs: [], files: ["matplotlib","numpy","pandas","python","scikit-learn"] };

  useEffect(() => {
    const title = url.substring(url.lastIndexOf("/") + 1, url.length);
    setSiteTitle(title === "" ? "root" : title);
  }, [url]);

  return (
    <Layout>
      <DirectoryHeader
        parent={url.substring(0, url.lastIndexOf("/"))}
        siteTitle={siteTitle}
      />

      <div className="template-structure">
        <div className="template-filesystem">
          <div className="template-filesystem-container">
            <div className="template-filesystem-header">
              <div>{siteTitle}</div>
            </div>

            <div className="template-filesystem-directories">
              {dirs.map((dir) => (
                <Link key={dir} to={`${url}/${dir}`}>
                  <FileSystemItem fileName={dir} fileType="folder" />
                </Link>
              ))}
            </div>
            <div className="template-filesystem-files">
              {files.map((file) => (
                <Link key={file} to={`${url}/${file}`}>
                  <FileSystemItem fileName={file} fileType="file" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="template-display"></div>
      </div>
    </Layout>
  );
};

export default IndexPage;
