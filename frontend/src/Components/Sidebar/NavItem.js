import React, {Component} from 'react';
import './Sidebar.css';
import * as Icon from 'react-bootstrap-icons';


class NavItem extends  Component{

    render(){
        let item = this.props.item
        return(
            <div className ="navitem-container" >
                <div className="icon-container">
                <Icon.House style={{ color: 'white'}} className="icon"/>
                </div>
        <div className="sidebar-link" style={{ color: 'white'}}>{item.title}</div>
               

            </div>
        )
    }


}

export default NavItem