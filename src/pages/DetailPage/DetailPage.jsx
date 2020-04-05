import React from "react";
import { Link } from "react-router-dom";

const getRecipeDetail = (recipe, categoryID, recipeID) => {
  if (recipe.categoryID === categoryID && recipe.recipeID === recipeID) {
    return (
      <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.details}</p>
        <img src={recipe.imageURL} alt={recipe.name} />
        <Link to={recipe.categoryURL}>Back to {recipe.categoryName} Page</Link>
      </div>
    );
  }
};

const DetailPage = props => {
  return (
    <div>
      {props.content.map(recipe =>
        getRecipeDetail(recipe, props.categoryID, props.recipeID)
      )}
    </div>
  );
};

export default DetailPage;
