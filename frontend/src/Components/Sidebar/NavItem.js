import React, {Component} from 'react';
import * as Icon from 'react-bootstrap-icons';
import styled from 'styled-components';



const Styles = styled.div`

.icon{
    color: #122562;
    height: 70px;
    width: 75px;
    
}
.sidebar-link{
    color: black;
    margin-top: 15px;
    font-weight: bold
}
.navitem-container{
    display: flex;
    margin-top: 20px;
    :hover {
        opacity: 0.7;
        text-decoration: none; /* Gets rid of underlining of icons */
    } 
}
`;

class NavItem extends  Component{

      render(){
        let item = this.props.item
        return(
            <Styles>
            <a className ="navitem-container" href= {item.link} >
            
                <div className="icon-container">
                <Icon.House  className="icon"/>
                </div>
               
            <div className="sidebar-link" >{item.title}</div>

            </a>
           
            </Styles>
        )
    }


}

export default NavItem