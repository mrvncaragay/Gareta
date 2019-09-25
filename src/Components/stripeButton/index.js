import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import api from '../../config';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Gareta'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={api.STRIPE_PUB_KEY}
    />
  );
};

export default StripeCheckoutButton;
