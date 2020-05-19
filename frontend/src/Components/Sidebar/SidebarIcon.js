import React from 'react'
import * as Icon from 'react-bootstrap-icons';

const SidebarIcon = ({handleClick, isOpen}) => {
  return <span onClick={handleClick}>
    {isOpen ? <Icon.X /> : <Icon.List/>}
  </span>
}
export default SidebarIcon