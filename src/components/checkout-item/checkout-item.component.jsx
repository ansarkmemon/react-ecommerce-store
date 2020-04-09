import React from 'react'
import { connect } from 'react-redux'
import { removeItem, addItem, decrementItem } from '../../actions/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeItem, addItem, decrementItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item"/>
      </div> 
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItem(item)}>&#10094;</div>
        <div className="value">{item.quantity}</div>
        <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className="price">${item.price}</span>
      <div className="remove" onClick={() => removeItem(item.id)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: itemId => dispatch(removeItem(itemId)),
  addItem: item => dispatch(addItem(item)),
  decrementItem: item => dispatch(decrementItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
