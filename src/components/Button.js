import React from "react";
import { Link } from "gatsby";
import { BsList, BsArrowReturnLeft } from "react-icons/bs";

export const ListButton = ({ onListClick, style }) => {
  return (
    <div className="button-header" style={style} onClick={onListClick}>
      <BsList size={20} />
    </div>
  );
};

export const BackButton = ({ parent, style }) => {
  return (
    <div className="button-back" style={style}>
      <Link to={parent === "" ? "/" : parent}>
        <BsArrowReturnLeft size={20} />
      </Link>
    </div>
  );
};

export const IconButton = ({ children }) => {
  return <div className="button-icon">{children}</div>;
};
