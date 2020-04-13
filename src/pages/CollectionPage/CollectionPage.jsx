import React from "react";
import { Link } from "react-router-dom";
import styles from "./CollectionPage.module.css";

const getRecipePreview = (recipe) => {
  return (
    <div>
      <Link className={styles.collectionCard} to={recipe.detailURL}>
        <img
          src={recipe.imageURL}
          alt={recipe.name}
          className={styles.collectionRecipeImg}
        />
        <div className={styles.collectionRecipe}>
          <p className={styles.collectionRecipeName}>{recipe.name}</p>
          <p className={styles.collectionRecipeDescription}>
            {recipe.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

const CollectionPage = (props) => {
  return (
    <div className={styles.collectionContainer}>
      {props.content.map((recipe) => getRecipePreview(recipe))}
      <p className={styles.collectionText}>
        More Recipes in the Future!&nbsp;
        <Link className={styles.collectionSubscribe} to="/subscribe">
          Subscribe
        </Link>
        &nbsp;our Website to see the Updates!
      </p>
    </div>
  );
};

export default CollectionPage;
