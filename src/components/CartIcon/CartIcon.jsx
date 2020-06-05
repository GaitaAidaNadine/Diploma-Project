import React from "react";
import { connect } from "react-redux";
import { toggleCartDropdownVisibility } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartDropdownVisibility, itemCounter }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdownVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="counter">{itemCounter}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdownVisibility: () => dispatch(toggleCartDropdownVisibility()),
});

const mapStateToProps = (state) => ({
  itemCounter: state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
