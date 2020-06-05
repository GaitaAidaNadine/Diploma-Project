import React from "react";
import { withRouter } from "react-router-dom";
import "./Category.scss";

const Category = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} category`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="container">
        <h1 className="container-title">{title.toUpperCase()}</h1>
        <span className="container-subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(Category);
