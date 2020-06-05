import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import CartDropdownItem from "../CartDropdownItem/CartDropdownItem";
import "./CartDropdown.scss";
import { toggleCartDropdownVisibility } from "../../redux/cart/cartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartDropdownItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="message-cart-empty">Your cart is empty!</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdownVisibility());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
