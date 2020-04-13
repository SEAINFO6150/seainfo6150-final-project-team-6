import React from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <section className={styles.errorContainer}>
        <h1>Oops Sorry!</h1>
        <h2>404 Page not found</h2>
        <p>It seems that something went wrong...</p>
        <img src="/images/error.jpg" alt="error" />
        <p>The receipe you are trying to search is not availble yet :( </p>
      </section>
    </div>
  );
};
export default ErrorPage;
