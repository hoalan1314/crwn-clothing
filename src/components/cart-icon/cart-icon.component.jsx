import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../aseets/shopping-bag.svg";
import './cart-component.styles.scss'

const CartIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon className='shipping-icon' />
    <span className='item-count'>0</span>
  </div>
)

export default CartIcon
