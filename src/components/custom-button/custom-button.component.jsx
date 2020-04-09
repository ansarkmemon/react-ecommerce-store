import React from 'react'
import cx from 'classnames'
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button className={cx('custom-button', {'google-sign-in': isGoogleSignIn, inverted })} { ...otherProps }>
      { children }
    </button>
  )
}

export default CustomButton
