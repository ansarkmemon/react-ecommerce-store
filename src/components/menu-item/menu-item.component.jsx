import React from 'react'
import './menu-item.styles.scss';
import cx from 'classnames';

const MenuItem = ({ item }) => {
  const { title, imageUrl, size } = item;
  return (
    <div className={cx('menu-item', size)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}/>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
