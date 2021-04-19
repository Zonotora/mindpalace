import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Searchfield from "./Searchfield";
import { ListButton, BackButton, IconButton } from "./Button";

export const FileHeader = ({ siteTitle, parent, onTreeViewClick }) => (
  <header>
    <div>
      <ListButton onListClick={onTreeViewClick} style={{ left: "10px" }} />
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

export const DirectoryHeader = () => {
  const [display, setDisplay] = useState(true);
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  useEffect(() => {
    setDisplay(isMobile);
  }, [isMobile]);

  return (
    <header>
      <div>
        {display ? (
          <ListButton style={{ left: "auto", right: "10px" }} />
        ) : (
          <></>
        )}
        <div className="header-container">
          <Searchfield className="directory" />

          {!display ? (
            <div className="header-icon-buttons">
              <IconButton />
              <IconButton />
              <IconButton />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

FileHeader.propTypes = {
  siteTitle: PropTypes.string,
};

FileHeader.defaultProps = {
  siteTitle: ``,
};
