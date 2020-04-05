import React from "react";
import { Link } from "react-router-dom";

const AllCategoryPage = () => {
  return (
    <div>
      <Link to="/category/1">
        <button>Soup</button>
      </Link>
      <Link to="/category/2">
        <button>Appetizer</button>
      </Link>
      <Link to="/category/3">
        <button>Main Course</button>
      </Link>
      <Link to="/category/4">
        <button>Snack</button>
      </Link>
      <Link to="/category/5">
        <button>Dessert</button>
      </Link>
    </div>
  );
};

export default AllCategoryPage;
