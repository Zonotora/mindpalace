import { Link } from "gatsby";
import { BsList, BsArrowReturnLeft } from "react-icons/bs";
import PropTypes from "prop-types";
import React from "react";

const TreeViewButton = ({ onTreeviewClick }) => {
  return (
    <div
      className="header-button"
      style={{ left: "10px" }}
      onClick={onTreeviewClick}
    >
      <BsList size={20} />
    </div>
  );
};

const BackButton = ({ parent }) => {
  return (
    <div className="header-button" style={{ left: "50px" }}>
      <Link to={parent === "" ? "/" : parent}>
        <BsArrowReturnLeft size={20} />
      </Link>
    </div>
  );
};

const Header = ({ siteTitle, parent, onTreeViewClick }) => (
  <header>
    <div>
      <TreeViewButton onTreeviewClick={onTreeViewClick} />
      <BackButton parent={parent} />
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
