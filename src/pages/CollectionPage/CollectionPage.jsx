import React from "react";

const CollectionPage = props => {
  return (
    <div>
      My Collection
      <h1>{props.content.title}</h1>
      Category: {props.content.category}
      <p>{props.content.detail}</p>
    </div>
  );
};

export default CollectionPage;
