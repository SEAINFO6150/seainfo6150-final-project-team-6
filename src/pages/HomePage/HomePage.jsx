import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <img
        className={styles.homeImg}
        src="/images/homepage.jpg"
        alt="homepage"
      />
      <h1 className={styles.homeTitle}>Welcome to HOME CHEF!!!</h1>
      <p className={styles.homeText}>
        We have everything you need to improve the life in the kitchen! After
        exploring our recipes, hope you'll love to cook/bake even more.
      </p>
      <p className={styles.homeText}>Explore our website and be a HOME CHEF!</p>
    </div>
  );
};

export default HomePage;
