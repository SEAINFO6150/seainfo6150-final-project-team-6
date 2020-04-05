import React from "react";
import { Link } from "react-router-dom";

const getRecipePreview = (recipe, categoryID) => {
  if (recipe.categoryID === categoryID) {
    return (
      <div>
        <Link to={recipe.detailURL}>
          <p>{recipe.name}</p>
        </Link>
        <p>{recipe.description}</p>
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
