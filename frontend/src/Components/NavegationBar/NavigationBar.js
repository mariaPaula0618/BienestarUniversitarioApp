import React, {Component} from 'react';
import { Nav, Navbar, Form, Dropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import styled from 'styled-components';


const Styles = styled.div`
.navigationbar-container{
  width: 100vw;
  height:auto;
}
.navbar { background-color: #122562; }

.icon{
  height: 34px;
  width: 44px;
  color: white;
  margin-left: 5px;
  margin-right: 20px;

}
.droopdown{
  margin-right: 30px;
  color: #122562;;

}
.userInfo{
  color: white;
  margin-right: 20px;
}
.iconSide{
  height: 34px;
  width: 44px;
  color: white;
  margin-left: 20px;
}

`;  

class NavigationBar extends Component{

  

  render() {
    let user = localStorage.getItem('user');
    return(
      <Styles>
         <div className="navigationbar-container">
           <Navbar expand="lg" variant="dark">
            <Navbar.Brand > <Icon.List  className="iconSide"/></Navbar.Brand>
            <Nav className="mr-auto">
              
            </Nav>
            <Form inline>
             <div className="userInfo">
                <h4>{user} </h4>
                <h6>Rol</h6>
             </div>
             <Dropdown className="droopdown">
                <Dropdown.Toggle  id="dropdown-basic">
                <Icon.PersonSquare  className="icon"/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Item >Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Navbar>
          </div>
        </Styles>
    );
      
  }


}


export default NavigationBar;



