import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const TreeViewButton = ({ onTreeviewClick }) => {
  return (
    <div
      style={{ cursor: "pointer", position: "absolute", color: "white" }}
      onClick={onTreeviewClick}
    >
      tree
    </div>
  );
};

const BackButton = ({ parent }) => {
  return (
    <div style={{ position: "absolute", color: "white", left: "40px" }}>
      {/* <svg width="200" height="200">
        <path d="M150 0 L75 200 L225 200 Z" stoke="green" fill="green" />
      </svg> */}
      <Link
        to={parent === "" ? "/" : parent}
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        back
      </Link>
    </div>
  );
};

const HomeButton = () => {
  return (
    <div style={{ position: "absolute", color: "white", left: "80px" }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        home
      </Link>
    </div>
  );
};

const Header = ({ siteTitle, parent, onTreeViewClick }) => (
  <header>
    <div>
      <TreeViewButton onTreeviewClick={onTreeViewClick} />
      <BackButton parent={parent} />
      <HomeButton />
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

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
