import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import lunr from "lunr";
import indexData from "../index.json";
import pageData from "../pages.json";

const threshold = 20;
const idx = lunr.Index.load(indexData);

const getIntervals = (metadata) => {
  const intervals = { body: [], title: [] };
  for (const key in metadata) {
    const keyProperty = metadata[key].body !== undefined ? "body" : "title";
    if (!metadata[key][keyProperty]) continue;
    const positions = metadata[key][keyProperty].position;

    if (!intervals[keyProperty]) intervals[keyProperty] = [];

    for (const position of positions) {
      const [at, len] = position;

      intervals[keyProperty].push({
        start: Math.max(0, at - threshold),
        end: at + len + threshold,
      });
    }
  }

  for (const key of ["body", "title"]) {
    const localIntervals = intervals[key];
    for (let i = 1; i < localIntervals.length; i++) {
      if (localIntervals[i].start <= localIntervals[i - 1].end) {
        localIntervals[i].start = localIntervals[i - 1].start;
        localIntervals.splice(i - 1, 1);
        i--;
      }
    }
  }

  return intervals;
};

const replacement = (match) => {
  return `<span class="template-filesystem-item-text-highlight">${match}</span>`;
};

const getSnapshots = (intervals, reg, page, result) => {
  const snapshots = { body: [], title: [] };

  if (intervals["body"].length > 0 && intervals["body"][0].start !== 0)
    snapshots["body"].push(" ... ");

  for (let i = 0; i < intervals["body"].length; i++) {
    const interval = intervals["body"][i];
    const snapshotRaw = page.body.slice(interval.start, interval.end);
    const snapshot = snapshotRaw.replaceAll(reg, replacement);
    snapshots["body"].push(snapshot);
    if (interval.end <= page.body.length) snapshots["body"].push(" ... ");
  }

  const snapshot = result.ref.replaceAll(reg, replacement);
  snapshots["title"].push(snapshot);

  for (const key in snapshots) snapshots[key] = snapshots[key].join("");

  return snapshots;
};

const getResults = (searchValue) => {
  const results = idx.search(searchValue);

  if (results.length === 0) return [];

  for (const result of results) {
    const metadata = result.matchData.metadata;
    const searchTermReg = new RegExp(Object.keys(metadata).join("|"), "ig");
    const page = pageData[result.ref];
    const intervals = getIntervals(metadata);
    const snapshots = getSnapshots(intervals, searchTermReg, page, result);
    result.snapshot = snapshots;
  }
  return results;
};

const Searchfield = ({ className, style, setSearchResults, setTooltip }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!setSearchResults) return;

    if (searchValue === "") {
      setSearchResults([]);
      setTooltip("");
      return;
    }

    try {
      const results = getResults(searchValue);
      setTooltip(results.length);
      setSearchResults(results);
    } catch (e) {}
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
