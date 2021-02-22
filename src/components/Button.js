import React from "react";
import { Link } from "gatsby";
import { BsList, BsArrowReturnLeft } from "react-icons/bs";

export const TreeViewButton = ({ onTreeviewClick, style }) => {
  return (
    <div className="button-header" style={style} onClick={onTreeviewClick}>
      <BsList size={20} />
    </div>
  );
};

export const BackButton = ({ parent, style }) => {
  return (
    <div className="button-header" style={style}>
      <Link to={parent === "" ? "/" : parent}>
        <BsArrowReturnLeft size={20} />
      </Link>
    </div>
  );
};

export const IconButton = () => {
  return <div className="button-icon"></div>;
};
