import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selector";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";


const ShopPage = ({match}) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:categoryId`}  component={CategoryPage}/>
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
