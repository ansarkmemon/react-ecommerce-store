import React from 'react'
import { ReactComponent as ShoppingBag } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../actions/cart.actions';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../selectors/cart.selectors';

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state) 
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
