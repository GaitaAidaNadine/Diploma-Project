import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ amount }) => {
  const myPublishableStripeKey = "pk_test_6jgTVv2TlLqKKnePEg3bza5L00rThHJTk2";
  const amountInCents = amount * 100;

  const onToken = () => {
    alert("Your payment is successful. Thank you for your trust!");
  };

  return (
    <StripeCheckout
      name="Fit Addict Co."
      description="Pay safely with Stripe"
      panelLabel="Pay Now"
      amount={amountInCents}
      shippingAddress
      billingAddress
      stripeKey={myPublishableStripeKey}
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
