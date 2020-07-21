import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {ReactComponent as ShoppingIcon} from "../../aseets/shopping-bag.svg";
import './cart-component.styles.scss'

const CartIcon = ({toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shipping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
  null,
  mapDispatchToProps
)(CartIcon)
