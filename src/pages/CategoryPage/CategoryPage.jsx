import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryPage.module.css";

const getRecipePreview = (recipe, categoryID) => {
  if (recipe.categoryID === categoryID) {
    return (
      <div>
        <Link to={recipe.detailURL}>
          <p className={styles.soupRecipeName}>{recipe.name}</p>
        </Link>
        <p className={styles.soupRecipeDescription}>{recipe.description}</p>
      </div>
    );
  }
};

const CategoryPage = props => {
  return (
    <div>
      {props.content.map(recipe => getRecipePreview(recipe, props.categoryID))}
      <Link to="/category">Back to All Category Page</Link>
    </div>
  );
};

export default CategoryPage;
