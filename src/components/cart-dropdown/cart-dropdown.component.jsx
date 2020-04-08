import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { props.cartItems.map(item => <p key={item.id}>{item.name}</p>)}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton> 
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems
});

export default connect(mapStateToProps)( CartDropdown )
