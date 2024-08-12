import React from "react";
import styles from "../styles/SearchCounter.module.css";

function SearchCounter({ count }) {
  if (count === null) {
    return null;
  }
  return (
    <p className={styles.searchCount}>
      {count} {count === 1 ? "result" : "results"} found.
    </p>
  );
}

export default SearchCounter;
