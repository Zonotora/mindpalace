import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Searchfield from "./Searchfield";
import { TreeViewButton, BackButton, IconButton } from "./Button";

export const FileHeader = ({ siteTitle, parent, onTreeViewClick }) => (
  <header>
    <div>
      <TreeViewButton
        onTreeviewClick={onTreeViewClick}
        style={{ left: "10px" }}
      />
      <BackButton parent={parent} style={{ left: "50px" }} />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export const DirectoryHeader = ({ siteTitle, parent }) => (
  <header>
    <div>
      <BackButton parent={parent} style={{ left: "10px" }} />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="header-container" style={{ marginLeft: "50px" }}>
        <div className="header-icon-buttons">
          <IconButton />
          <IconButton />
          <IconButton />
        </div>

        <Searchfield className="directory" />

        <div className="header-icon-buttons">
          <IconButton />
          <IconButton />
          <IconButton />
        </div>
      </div>
    </div>
  </header>
);

FileHeader.propTypes = {
  siteTitle: PropTypes.string,
};

FileHeader.defaultProps = {
  siteTitle: ``,
};
