import React from 'react'
import cx from 'classnames';
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} { ...props } /> 
      { label && <label className={cx('form-input-label', { shrink: props.value.length })}>{label}</label> }
    </div>
  )
}

export default FormInput
