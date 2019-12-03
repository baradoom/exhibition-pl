import React from "react";
import "./SearchBoxNew.css";


const SearchBoxNew = ({ searchfield, searchChange }) => {
  return (
    <div className="searchboxnew">
      <input
        className="searchdrawernew"
        type="search"
       placeholder="EXPLORE THE COLLECTION"
       onChange={searchChange}
      />
    </div>
  );
};

export default SearchBoxNew;
