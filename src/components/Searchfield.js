import React from "react";
import { BsSearch } from "react-icons/bs";

const Searchfield = ({ className }) => {
  return (
    <div className={`search${className ? " " : ""}${className}`}>
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
