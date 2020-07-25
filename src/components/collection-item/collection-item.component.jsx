import React from 'react'
import {addItem} from "../../redux/cart/cart.actions";
import {connect} from 'react-redux'
import {
  CollectionFooter,
  CollectionFooterName, CollectionFooterPrice, CollectionItemButton,
  CollectionItemContainer,
  ImageContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return <CollectionItemContainer>
    <ImageContainer imageUrl={imageUrl} />
    <CollectionFooter>
      <CollectionFooterName>{name}</CollectionFooterName>
      <CollectionFooterPrice>{price}</CollectionFooterPrice>
    </CollectionFooter>
    <CollectionItemButton inverted onClick={()=>addItem(item)}>Add to cart</CollectionItemButton>
  </CollectionItemContainer>
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem)
