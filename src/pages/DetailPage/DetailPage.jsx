import React from "react";
import { Link } from "react-router-dom";
import styles from "./DetailPage.module.css";

const getRecipeDetail = (recipe, categoryID, recipeID) => {
  if (recipe.categoryID === categoryID && recipe.recipeID === recipeID) {
    return (
<<<<<<< HEAD
      <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.details}</p>
          <button onClick={() => alert(recipe.slug)}>(Save in your collection)</button>
        <img src={recipe.imageURL} alt={recipe.name} />
        <Link to={recipe.categoryURL}>Back to {recipe.categoryName} Page</Link>
=======
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
            onClick={() => alert(recipe.slug)}
          >
            Save in Your Collection
          </button>
        </p>
        <p>
          <Link className={styles.recipeBackLink} to={recipe.categoryURL}>
            &lt; Back to {recipe.categoryName} Page
          </Link>
        </p>
>>>>>>> 5f5274c634cc5e1d0fcf86d3d019453863ae51da
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
