import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCategoryPage.module.css";

const AllCategoryPage = () => {
  return (
    <div>
      <Link className={styles.soupCategory} to="/category/1">
        <button className={styles.soupCategoryButton}>Soup</button>
      </Link>
      <Link className={styles.appetizerCategory} to="/category/2">
        <button className={styles.appetizerCategoryButton}>Appetizer</button>
      </Link>
      <Link className={styles.mainCourseCategory} to="/category/3">
        <button className={styles.mainCourseCategoryButton}>Main Course</button>
      </Link>
      <Link className={styles.snackCategory} to="/category/4">
        <button className={styles.snackCategoryButton}>Snack</button>
      </Link>
      <Link className={styles.dessertCategory} to="/category/5">
        <button className={styles.dessertCategoryButton}>Dessert</button>
      </Link>
    </div>
  );
};

export default AllCategoryPage;
