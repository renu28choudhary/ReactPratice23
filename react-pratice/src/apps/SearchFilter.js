import React, { useState } from "react";
import SearchFilterData from "../mock-data/SearchFilterData.json";
import "./SearchFilter.css";

function SearchFilter() {
  const [filteredData, setFilteredData] = useState("");
  const handleChange = (e) => {
    setFilteredData(e.target.value);
  };
  return (
    <div className="search-app-container">
      <div>SearchFilter</div>
      <input
        type="text"
        placeholder="search....."
        onChange={handleChange}
        value={filteredData}
      ></input>
      {SearchFilterData.filter((val) => {
        if (filteredData === "") return val;
        else if (
          val.first_name.toLowerCase().includes(filteredData.toLowerCase())
        ) {
          return val;
        }
      }).map((item) => (
        <div key={item.id}>{item.first_name} </div>
      ))}
    </div>
  );
}

export default SearchFilter;
