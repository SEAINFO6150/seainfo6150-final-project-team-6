import React from "react";
import styles from "./ContactPage.module.css"

const ContactPage = () => {
  return (
        <div className={styles.contact}>
          <section className={styles.container}>
            <h1>
              Contact Us:
            </h1>

            <p>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            </p>

            <p>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            </p>

            <p>
            <label for="country">Country</label>
            <select id="country" name="country">
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            </select>
            </p>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px" }}></textarea>
        
            <button 
            onClick={() => alert("You have submitted it successfully! We will contact you shortly!!")}
            > 
            Submit
            </button>

                
            </section>
            
        </div>
    ) 
};


export default ContactPage;

