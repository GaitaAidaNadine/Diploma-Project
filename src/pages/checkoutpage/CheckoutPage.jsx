import React from "react";
import { connect } from "react-redux";
import "./CheckoutPage.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";

const CheckoutPage = ({ totalPrice, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total-price">
        <span>TOTAL: ${totalPrice}</span>
      </div>
      {/*Due to the fact that we are in a test mode, we'll use the following test credit card for payments 
      offered by Stripe API(https://stripe.com/docs/testing#cards): 4242424242424242 - Exp: 07/20 - CVC: 456*/}
      <StripeCheckoutButton amount={totalPrice} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalPrice: state.cart.cartItems.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.quantity * cartItem.price,
    0
  ),
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
