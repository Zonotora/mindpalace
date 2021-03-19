import React from "react";
import { BsSearch } from "react-icons/bs";

const Searchfield = ({ className, style }) => {
  return (
    <div className={`search${className ? " " : ""}${className}`} style={style}>
      <div className="search-container">
        <div className="search-icon">
          <BsSearch size={16} style={{ marginTop: "8px", color: "#6e7681" }} />
        </div>
        <input placeholder="Search..." />
      </div>
    </div>
  );
};

export default Searchfield;
