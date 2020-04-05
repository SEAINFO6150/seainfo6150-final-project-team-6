import React from "react";
import styles from "./AboutPage.module.css"


const AboutPage = () => {
  return (
    <section className={styles.container}>
      
      <h1>About the website</h1>
      <p>You can explore as many delicious receipes as you want here! Enjoy your meal!</p>
      <h2>About us</h2>
        <p>     We are a team which every one of us loves to cook. Before this website was developed, we tended to 
                search on the internet and hope to find some ideas for our next meal. Rather than searching
                randomly, we thought that it would be great if we create a recipe website our own. Our purpose 
                is allowing you to find the recipes you loved in a more simpler and quicker way, and by selecting 
                your favorite recipes first, and then follow step-by-step instructions to cook or bake, 
                we believe that you can be a master chef, too!
        </p>
        <h2>Our Team</h2>
        <p>
                Our team members love the fun which cooking can bring to us, but we prefer more on creativity and 
                novelty. While exploring our website, maybe you'll notice of the diversity of our recipes.
                This is because we love to try new things! Hope you'll discover the joy of cooking like we do.
        </p>
        
    </section>
)
  
};


export default AboutPage;
