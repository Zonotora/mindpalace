import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import { FaRegFile, FaFolder } from "react-icons/fa";

import Layout from "components/Layout";
import { DirectoryHeader } from "components/Header";
import "templates/template.css";

const formatDate = (currentDate, date) => {
  const time = Math.abs(currentDate - date);
  const days = Math.ceil(time / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 31);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  else if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  else if (days === 0) return "today";
  return `${days} day${days > 1 ? "s" : ""} ago`;
};

const FileSystemItem = ({ fileName, fileType, lastModified }) => {
  return (
    <div className="template-filesystem-item">
      <div className="template-filesystem-item-icon">
        {fileType === "file" ? <FaRegFile /> : <FaFolder />}
      </div>
      <div className="template-filesystem-item-text">{fileName}</div>
      <div className="template-filesystem-item-last-modified">
        {lastModified[fileName]}
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const [siteTitle, setSiteTitle] = useState("");
  const { url, dirs, files } = { url: "/python", dirs: [], files: ["matplotlib","numpy","pandas","python","scikit-learn"] };
  const [numberOfFiles, numberOfDirs ] = [5, 0];
  const [lastModified, setLastModified] = useState({});

  useEffect(() => {
    const nodes = data.allMarkdownRemark.edges
      .filter((node) => node.node.frontmatter.slug.startsWith(url))
      .map((node) => {
        return {
          slug: node.node.frontmatter.slug.substring(url.length).split("/")[1],
          date: node.node.frontmatter.lastModified,
        };
      });

    const modified = {};
    nodes.forEach((node) => {
      modified[node.slug] = node.date;
    });

    const currentDate = new Date(new Date().toISOString().split("T")[0]);

    for (const key in modified) {
      if (modified.hasOwnProperty(key)) {
        modified[key] = formatDate(currentDate, new Date(modified[key]));
      }
    }

    setLastModified(modified);
  }, [data]);

  useEffect(() => {
    const title = url.substring(url.lastIndexOf("/") + 1, url.length);
    setSiteTitle(title === "" ? "root" : title);
  }, [url]);

  return (
    <Layout>
      <DirectoryHeader
        parent={url.substring(0, url.lastIndexOf("/"))}
        isRoot={siteTitle === "root"}
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
                  <FileSystemItem
                    fileName={dir}
                    fileType="folder"
                    lastModified={lastModified}
                  />
                </Link>
              ))}
            </div>
            <div className="template-filesystem-files">
              {files.map((file) => (
                <Link key={file} to={`${url}/${file}`}>
                  <FileSystemItem
                    fileName={file}
                    fileType="file"
                    lastModified={lastModified}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="template-display">
          <div className="template-display-information">
            <div>
              <FaFolder />
              <span>{numberOfDirs}</span>
            </div>
            <div>
              <FaRegFile />
              <span>{numberOfFiles}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___lastModified }) {
      edges {
        node {
          frontmatter {
            lastModified(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
