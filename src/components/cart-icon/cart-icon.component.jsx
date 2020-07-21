import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {ReactComponent as ShoppingIcon} from "../../aseets/shopping-bag.svg";
import './cart-component.styles.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shipping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
