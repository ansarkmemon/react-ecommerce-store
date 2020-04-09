import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss'
import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectShopCollection } from '../../selectors/shop.selectors';

const CollectionsOverview = ({ collections }) => {
  console.log(collections)
  return (
    <div className="collections-overview">
      { Object.keys(collections).map(key => (
        <PreviewCollection key={collections[key].id} data={collections[key]} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection
})

export default connect(mapStateToProps)( CollectionsOverview )
