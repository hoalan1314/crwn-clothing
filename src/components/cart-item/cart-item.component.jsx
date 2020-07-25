import React from 'react'
import {CartItemContainer, CartItemImg, ItemDetails, ItemDetailsName, ItemDetailsPrice} from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <CartItemContainer>
    <CartItemImg src={imageUrl} alt='item' />
    <ItemDetails>
      <ItemDetailsName>{name}</ItemDetailsName>
      <span>{quantity} x ${price}</span>
    </ItemDetails>
  </CartItemContainer>
)

export default CartItem
