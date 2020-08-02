import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100 // in cents
  const publishableKey = 'pk_test_51H86q5Frwr3SeYjHLRXgeSoflNMnu05h3VgnvR4BXjaqr1CgFdeWUAzr2yBPG4hv0gcZvUCvkkexGBWggKQk7aSm00yCrOEmhw'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(res => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert('There was an issue with your payment. Please sure you use the provided credit card.')
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey} />
  )
}

export default StripeCheckoutButton
