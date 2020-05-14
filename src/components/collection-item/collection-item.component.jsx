import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl, match, history }) => {
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
        <button
          className="button-seeDetails"
          onClick={() => history.push(`${match.url}/${id}`)}
        >
          SEE DETAILS
        </button>
        <button className="button-seeDetails-black">ADD TO CART</button>
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
