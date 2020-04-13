import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us:</h1>
      <p>
        <label className={styles.contactLabel} for="fname">
          First Name
        </label>
        <input
          className={styles.contactForm}
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>
      </p>
      <p>
        <label className={styles.contactLabel} for="lname">
          Last Name
        </label>
        <input
          className={styles.contactForm}
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        ></input>
      </p>
      <p>
        <label className={styles.contactLabel} for="country">
          Country
        </label>
        <select className={styles.contactForm} id="country" name="country">
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
      </p>
      <label className={styles.contactLabel} for="subject">
        Subject
      </label>
      <textarea
        className={styles.contactForm}
        id="subject"
        name="subject"
        placeholder="Write something.."
        style={{ height: "200px" }}
      ></textarea>
      <p className={styles.submit}>
        <button
          className={styles.submitButton}
          onClick={() =>
            alert(
              "You have submitted it successfully! We will contact you shortly!!"
            )
          }
        >
          Submit
        </button>
      </p>
    </div>
  );
};

export default ContactPage;
