import React, {Component} from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navigationbar-container{
  width: 100vw;
}
.navbar { background-color: #122562; }


`;  

class NavigationBar extends Component{

  render() {
    return(
      <Styles>
         <div className="navigationbar-container">
           <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
          </Navbar>
          </div>
        </Styles>
    );
      
  }


}


export default NavigationBar;



