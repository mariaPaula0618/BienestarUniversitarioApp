import React, {Component} from 'react';
import styled from 'styled-components';
import NavItem from "./NavItem"


const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 200px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: #222; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

class SideNav extends Component {

   

    render() {
        
        const items = this.props.items.map(i =>(
            <NavItem item={i}/>
        )); 

        return(<div className="sidenav-container">
            <StyledSideNav>
                {items}
            </StyledSideNav>

        </div>
        );
    }
}

export default SideNav