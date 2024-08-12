import React from "react";
import styles from "../styles/BlogList.module.css";
import BlogCard from "./BlogCard";
import HandleHighlightText from "../util/highlightText";

const BlogList = ({ blogs, searchText }) => {
  return (
    <div className={styles.BlogListContainer}>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          time={blog.time}
          title={HandleHighlightText(blog.title, searchText)}
          body={HandleHighlightText(blog.body, searchText)}
        />
      ))}
    </div>
  );
};

export default BlogList;
