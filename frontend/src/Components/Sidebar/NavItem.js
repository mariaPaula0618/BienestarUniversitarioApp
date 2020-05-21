import React, {Component} from 'react';
import styled from 'styled-components';



const Styles = styled.div`

.icon{
    color: #122562;
    
}
.sidebar-link{
    color: black;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 12px
}
.navitem-container{
    display: flex;
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
                <i className="material-icons  icon " style={{fontSize:48}} >{item.icon} </i>
                </div>
               
            <div className="sidebar-link" >{item.title}</div>

            </a>

            <hr></hr>
            <br></br>
           
            </Styles>
        )
    }


}

export default NavItem