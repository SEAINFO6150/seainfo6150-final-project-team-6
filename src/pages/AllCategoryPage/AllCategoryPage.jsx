import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCategoryPage.module.css";

const AllCategoryPage = () => {
  return (
    <div>
      <Link className={styles.soupcategory} to="/category/1">
        <button className={styles.soupcategorybutton}>Soup</button>
      </Link>
      <Link className={styles.appetizercategory} to="/category/2">
        <button className={styles.appetizercategorybutton}>Appetizer</button>
      </Link>
      <Link className={styles.maincoursecategory} to="/category/3">
        <button className={styles.maincoursecategorybutton}>Main Course</button>
      </Link>
      <Link className={styles.snackcategory} to="/category/4">
        <button className={styles.snackcategorybutton}>Snack</button>
      </Link>
      <Link className={styles.dessertcategory} to="/category/5">
        <button className={styles.dessertcategorybutton}>Dessert</button>
      </Link>
    </div>
  );
};

export default AllCategoryPage;
