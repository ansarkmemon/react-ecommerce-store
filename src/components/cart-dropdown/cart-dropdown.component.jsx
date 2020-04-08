import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { props.cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton> 
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

export default connect(mapStateToProps)( CartDropdown )
