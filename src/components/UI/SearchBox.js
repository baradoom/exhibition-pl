import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="searchbox">
      <input
        className="searchdrawer"
        type="search"
        placeholder="SEARCH"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
