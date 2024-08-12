import React from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar = ({ setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search Blogs..."
      className={styles.searchBar}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchBar;
