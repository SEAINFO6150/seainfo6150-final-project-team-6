import React from "react";
import { Link } from "react-router-dom";
import styles from "./DetailPage.module.css";

const getRecipeDetail = (recipe, categoryID, recipeID) => {
  if (recipe.categoryID === categoryID && recipe.recipeID === recipeID) {
    return (
      <div className={styles.recipeContainer}>
        <img
          className={styles.recipeImg}
          src={recipe.imageURL}
          alt={recipe.name}
        />
        <h1 className={styles.recipeName}>{recipe.name}</h1>
        <h2 className={styles.recipeTitle}>Ingredients</h2>
        <p className={styles.recipeIngredients}>{recipe.ingredients}</p>
        <h2 className={styles.recipeTitle}>Cooking Directions</h2>
        <p className={styles.recipeDetail}>{recipe.details.one}</p>
        <p className={styles.recipeDetail}>{recipe.details.two}</p>
        <p className={styles.recipeDetail}>{recipe.details.three}</p>
        <p className={styles.recipeDetail}>{recipe.details.four}</p>
        <p>
          <button
            className={styles.recipeSaveButton}
            onClick={() => alert("Saved in your collection successfully!")}
          >
            Save in Your Collection
          </button>
        </p>
        <p>
          <Link className={styles.recipeBackLink} to={recipe.categoryURL}>
            &lt; Back to {recipe.categoryName} Page
          </Link>
        </p>
      </div>
    );
  }
};

const DetailPage = (props) => {
  return (
    <div>
      {props.content.map((recipe) =>
        getRecipeDetail(recipe, props.categoryID, props.recipeID)
      )}
    </div>

  );
};

export default DetailPage;
