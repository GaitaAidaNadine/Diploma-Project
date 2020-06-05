import React from "react";
import { connect } from "react-redux";
import {
  deleteItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem, deleteItemFromCart, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="container-image">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="quantity-no">{quantity}</span>
        <div className="sign-arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="delete-button"
        onClick={() => deleteItemFromCart(cartItem)}
      >
        &#10007;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
