import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import lunr from "lunr";
import indexData from "../index.json";
import pageData from "../pages.json";

const idx = lunr.Index.load(indexData);

const getResults = (searchValue) => {
  const results = idx.search(searchValue);

  if (results.length === 0) return [];

  const threshold = 20;
  const searchTerm = searchValue.toLowerCase();
  const searchTermReg = new RegExp(searchTerm, "ig");

  for (const result of results) {
    const metadata = result.matchData.metadata;
    if (!(searchTerm in metadata)) continue;

    const positions = metadata[searchTerm].body.position;

    const page = pageData[result.ref];
    const snapshots = [];
    const intervals = [];

    for (const position of positions) {
      const [at, len] = position;
      intervals.push({
        start: Math.max(0, at - threshold),
        end: at + len + threshold,
      });
    }

    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i].start <= intervals[i - 1].end) {
        intervals[i].start = intervals[i - 1].start;
        intervals.splice(i - 1, 1);
        i--;
      }
    }

    if (intervals.length > 0 && intervals[0].start !== 0)
      snapshots.push(" ... ");

    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
      const snapshotRaw = page.body.slice(interval.start, interval.end);
      const replacement = `<span class="template-filesystem-item-text-highlight">${searchValue}</span>`;
      const snapshot = snapshotRaw.replaceAll(searchTermReg, replacement);
      snapshots.push(snapshot);
      if (interval.end <= page.body.length) snapshots.push(" ... ");
    }

    result.snapshot = snapshots.join("");
  }
  return results;
};

const Searchfield = ({ className, style, setSearchResults }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!setSearchResults) return;

    if (searchValue === "") {
      setSearchResults([]);
      return;
    }

    let results = [];
    try {
      const results = getResults(searchValue);
      setSearchResults(results);
    } catch (e) {
      console.log(e);
    }
  }, [searchValue]);

  return (
    <div className={`search${className ? " " : ""}${className}`} style={style}>
      <div className="search-container">
        <div className="search-icon">
          <BsSearch size={16} style={{ marginTop: "8px", color: "#6e7681" }} />
        </div>
        <input
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchfield;
