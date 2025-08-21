import React from 'react';
import styles from './Blogs.module.css'

const BlogCard = ({ title, description, image }) => {
    return (
        <div className={styles.blogCard}>
            <img src={image} alt="text_to_describe_your_image"></img>
            <div className={styles.blogCardInfo}>
              <p className={`p-xsmall ${styles.blogCardP1}`}>{title}</p>
              <p className={`p-large ${styles.blogCardP2}`}>{description}</p>
            </div>
          </div>
    );
};

export default BlogCard;