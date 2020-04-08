import React from 'react'
import { connect } from 'react-redux'

import { selectShopCollection } from '../../selectors/shop.selectors';
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

const ShopPage = ({ shop }) => {
  return (
    <div className="shop-page">
      { shop.map(collection => (
        <PreviewCollection key={collection.id} data={collection} />
      ))}
    </div>
  )
}
const mapStateToProps = state => ({
  shop: selectShopCollection(state)
})
export default connect(mapStateToProps)(ShopPage)
