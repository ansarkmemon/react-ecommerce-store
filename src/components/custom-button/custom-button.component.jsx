import React from 'react'
import cx from 'classnames'
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={cx('custom-button', {'google-sign-in': isGoogleSignIn })} { ...otherProps }>
      { children }
    </button>
  )
}

export default CustomButton
