import React from "react";
import styles from "./ErrorPage.module.css"

const ErrorPage = () => {
  return (
<div className={styles.error}>

  <section className={styles.container}>
    <h1>
      Oops Sorry!
    </h1>
    <h2>
      404 Page not found
    </h2>
    <p>
      It seems that something went wrong
    </p>

    <figure className={styles.imageContainer}>
      <a href="/">
        <img className={styles.image} src="https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304__480.jpg" alt=""/>
      </a>
      <p>
        <span>The receipe you are trying to search is not availble yet :( </span>
      </p>
    </figure>
  </section>
</div>

)
}
export default ErrorPage