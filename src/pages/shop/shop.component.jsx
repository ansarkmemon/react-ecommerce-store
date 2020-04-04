import React from 'react'
import { SHOP_DATA } from '../../mockData'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

const ShopPage = () => {
  return (
    <div className="shop-page">
      { SHOP_DATA.map(collection => (
        <PreviewCollection key={collection.id} data={collection} />
      ))}
    </div>
  )
}

export default ShopPage
