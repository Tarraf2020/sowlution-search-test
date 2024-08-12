import React from "react";
import styles from "../styles/BlogCard.module.css";

const BlogCard = ({ time, title, body }) => {
  return (
    <div className={styles.blogCard}>
      <h2 className={styles.blogTitle}>{title}</h2>
      <p className={styles.blogTime}>{time}</p>
      <p className={styles.blogBody}>{body}</p>
    </div>
  );
};

export default BlogCard;
