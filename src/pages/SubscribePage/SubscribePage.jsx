import React from "react";
import Form from "./Form.jsx";
import styles from "./SubscribePage.module.css"

const SubscribePage = () => {
  return (
    <div className={styles.subscribe}>
        <section className={styles.container}>
        <h1>Here comes new recipes!<br/>
            Sounds exciting, right?</h1>
            <p><i>If you like our recipe, please fill out the form below and click "Subscribe"</i></p>
      <Form />
        </section>
    </div>
  );
};

export default SubscribePage;
