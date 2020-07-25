import React from 'react'
import {connect} from 'react-redux'
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {
  Arrow,
  CheckoutItemContainer,
  CheckoutItemImg,
  ImageContainer,
  Name, Price,
  Quantity, RemoveButton,
  Value
} from "./checkout-item.styles";

const CheckoutItem = ({cartItem , clearItem, addItem, removeItem}) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImg src={imageUrl} alt='item' />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

const mapDispatchToState = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToState)(CheckoutItem)
