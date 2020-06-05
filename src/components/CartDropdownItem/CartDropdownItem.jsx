import React from "react";
import "./CartDropdownItem.scss";

const CartDropdownItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-dropdown-item">
      <img src={imageUrl} alt="item" />
      <div className="item-info">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartDropdownItem;
