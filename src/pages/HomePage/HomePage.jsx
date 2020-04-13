import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
    
      <p className={styles.homePageDetail}>
        Welcome to our site! After exploring our recipes, hope you'll love to cook/bake even more.
      </p>

      <img src="/images/homepage.jpg" alt="homepage" />

    </div>
  );
};

export default HomePage;
