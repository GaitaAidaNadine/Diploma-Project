import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="button-group">
        <button className="button-seeDetails">SEE DETAILS</button>
        <button className="button-seeDetails-black">ADD TO CART</button>
      </div>
    </div>
  );
};

export default CollectionItem;
