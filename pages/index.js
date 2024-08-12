import React from "react";
import styles from "../styles/Home.module.css";

import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import SearchCounter from "../components/SearchCounter";

import { BLOGS } from "../lib/mockData";

export default function Home() {
  const [searchText, setSearchText] = React.useState("");

  const filteredBlogs = BLOGS.filter(
    (blog) =>
      blog.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      blog.body.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sowlutions Search Page</h1>
      <SearchBar setSearchText={setSearchText} />
      {searchText && <SearchCounter count={filteredBlogs.length} />}
      <BlogList blogs={filteredBlogs} searchText={searchText} />
    </div>
  );
}
