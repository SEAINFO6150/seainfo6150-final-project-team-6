import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllCategoryPage.module.css";

const AllCategoryPage = () => {
  return (
    <div className={styles.allCategoryContainer}>
      <p className={styles.allCategoryDetail}>
        Feel free to scroll down and click on the cards below.
        <br />
        Pick the categories you like and start exploring!
      </p>
      <Link className={styles.allCategoryCard} to="/category/1">
        <img
          className={styles.allCategoryImg}
          src="/images/cream-of-mushoom-soup.jpg"
          alt="soup"
        />
        <p className={styles.allCategoryName}>Soup</p>
      </Link>
      <Link className={styles.allCategoryCard} to="/category/2">
        <img
          className={styles.allCategoryImg}
          src="/images/curried-peanut-dip.jpg"
          alt="appetizer"
        />
        <p className={styles.allCategoryName}>Appetizer</p>
      </Link>
      <Link className={styles.allCategoryCard} to="/category/3">
        <img
          className={styles.allCategoryImg}
          src="/images/pork-chops-with-fig-and-grape-agrodolce.jpg"
          alt="main course"
        />
        <p className={styles.allCategoryName}>Main Course</p>
      </Link>
      <Link className={styles.allCategoryCard} to="/category/4">
        <img
          className={styles.allCategoryImg}
          src="/images/chicken-nuggets.jpg"
          alt="snack"
        />
        <p className={styles.allCategoryName}>Snack</p>
      </Link>
      <Link className={styles.allCategoryCard} to="/category/5">
        <img
          className={styles.allCategoryImg}
          src="/images/red-velvet-cake.jpg"
          alt="appetizer"
        />
        <p className={styles.allCategoryName}>Dessert</p>
      </Link>
    </div>
  );
};

export default AllCategoryPage;
