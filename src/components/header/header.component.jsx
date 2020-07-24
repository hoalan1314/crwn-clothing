import React from 'react'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from '../../aseets/crown.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {
        currentUser ?
          <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
          <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      !hidden ? <CartDropdown /> : null
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
