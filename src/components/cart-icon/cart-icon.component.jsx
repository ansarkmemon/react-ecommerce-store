import React from 'react'
import { ReactComponent as ShoppingBag } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../actions/cart.actions';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
