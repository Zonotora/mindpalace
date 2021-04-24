import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import { FaRegFile, FaFolder, FaTag } from "react-icons/fa";

import Layout from "components/Layout";
import { DirectoryHeader } from "components/Header";
import { BackButton } from "components/Button";
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

const paletteHash = (tag) => {
  var hash = 0;
  if (tag.length === 0) return hash;
  for (let i = 0; i < tag.length; i++) {
    let chr = tag.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return Math.abs(hash);
};

const palette = () => [
  "#ed5f5f",
  "#ed8a5f",
  "#eda85f",
  "#edd35f",
  "#e8ed5f",
  "#c0ed5f",
  "#9fed5f",
  "#79ed5f",
  "#5fed77",
  "#5fed95",
  "#5fedb9",
  "#5fdfed",
  "#5fb4ed",
  "#5f95ed",
  "#5f70ed",
  "#8a5fed",
  "#a65fed",
  "#d55fed",
  "#ed5fd3",
  "#ed5f9f",
];

const paletteColor = (tag) => {
  const p = palette();
  return p[paletteHash(tag) % p.length];
};

const FileSystemItem = ({ fileName, fileType, lastModified, tagsInFiles }) => {
  return (
    <div className="template-filesystem-item">
      <div className="template-filesystem-item-icon">
        {fileType === "file" ? <FaRegFile /> : <FaFolder />}
      </div>
      <div className="template-filesystem-item-text">{fileName}</div>

      {tagsInFiles[fileName] ? (
        <div className="template-filesystem-item-tags">
          {tagsInFiles[fileName].map((tag, i) => (
            <FaTag
              key={tag}
              style={{ color: paletteColor(tag), left: `${i * -6}px` }}
            />
          ))}
        </div>
      ) : (
        <></>
      )}

      <div className="template-filesystem-item-last-modified">
        {lastModified[fileName]}
      </div>
    </div>
  );
};

const FileInformation = ({ numberOfDirs, numberOfFiles }) => {
  return (
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
  );
};

const TagInformation = ({ tags }) => {
  if (Object.keys(tags).length === 0) return <></>;

  return (
    <div className="template-display-tags">
      {Object.keys(tags).map((key) => (
        <div
          key={key}
          style={{
            color: paletteColor(key),
            border: `solid 1px ${paletteColor(key)}`,
          }}
        >
          <FaTag />
          <span>{key}</span>
          <span>{tags[key]}</span>
        </div>
      ))}
    </div>
  );
};

const IndexPage = ({ data }) => {
  const [siteTitle, setSiteTitle] = useState("");
  const { url, dirs, files } = { url: "/machine-learning/models", dirs: [], files: ["decision-tree","ensembles","random-forests","support-vector-machine"] };
  const [numberOfFiles, numberOfDirs ] = [4, 0];
  const [tags, tagsInFiles] = [{"chalmers":4,"machine-learning":4}, {"decision-tree":["chalmers","machine-learning"],"ensembles":["chalmers","machine-learning"],"random-forests":["chalmers","machine-learning"],"support-vector-machine":["chalmers","machine-learning"]}];
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
      <DirectoryHeader />

      <div className="template-structure">
        <div className="template-filesystem">
          <div className="template-filesystem-container">
            <div className="template-filesystem-header">
              {siteTitle !== "root" ? (
                <BackButton parent={url.substring(0, url.lastIndexOf("/"))} />
              ) : (
                <></>
              )}
              <div>{siteTitle}</div>
            </div>

            <div className="template-filesystem-directories">
              {dirs.map((dir) => (
                <Link key={dir} to={`${url}/${dir}`}>
                  <FileSystemItem
                    fileName={dir}
                    fileType="folder"
                    lastModified={lastModified}
                    tagsInFiles={tagsInFiles}
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
                    tagsInFiles={tagsInFiles}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="template-display">
          <FileInformation
            numberOfDirs={numberOfDirs}
            numberOfFiles={numberOfFiles}
          />
          <TagInformation tags={tags} />
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
