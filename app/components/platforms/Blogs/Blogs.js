import React from "react"
import BlogCard from "./BlogCard"
import styles from './Blogs.module.css'

const Blogs = () => {
  return (
    <div>
      <div className={styles.blogs}>
        <p className={`p-xsmall ${styles.blogsP1}`}>BLOGS</p>
        <h3 className={styles.blogsH3}>From Our Journals</h3>
        <div className={styles.blogCardContainer}>
          <BlogCard
            title={"PRESS"}
            description={"DESCRIBE"}
            image={"/blogs1.png"}
          />
          <BlogCard
            title={"ANNOUNCEMENT"}
            description={"DESCRIBE"}
            image={"/blogs2.png"}
          />
          <BlogCard
            title={"PRODUCT"}
            description={"DESCRIBE"}
            image={"/blogs3.png"}
          />
          <BlogCard
            title={"TECHNOLOGY"}
            description={"DESCRIBE"}
            image={"/blogs4.png"}
          />
        </div>
      </div>
    </div>
  )
}

export default Blogs
