import React from 'react'
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({ data }) => {
  const { title, items } = data;
  return (
    <div className="preview-collection">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        { items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}  
      </div> 
    </div>
  )
}

export default PreviewCollection
