import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem } from "../../redux/cart/cartActions";
import "./CategoryItem.scss";

const CategoryItem = ({ match, history, addItem, program }) => {
  const { id, name, price, imageUrl } = program;
  return (
    <div className="category-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="name-and-price">
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
        <button className="button-seeDetails-black" onClick={() => addItem(program)}>ADD TO CART</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(withRouter(CategoryItem));
