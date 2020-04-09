import React from 'react'
import { connect } from 'react-redux';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectoryMenuItems } from '../../selectors/directoy.selectors';

const Directory = ({ menuItems }) => {
  return (
      <div className="directory-menu">
        { menuItems.map(item => <MenuItem key={item.id} item={item} />)}
      </div>
  )
}

const mapStateToProps = (state) => ({
  menuItems: selectDirectoryMenuItems(state)
}) 

export default connect(mapStateToProps)(Directory);
