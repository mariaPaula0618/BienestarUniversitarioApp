import React, {Component} from 'react';
import styled from 'styled-components';
import NavItem from "./NavItem"


const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
        /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 5.4em;      /* Stay at the top */
    background-color: #9b9b9b; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 30px;
`;

class SideNav extends Component {

   

    render() {
        
        const items = this.props.items.map(i =>(
            <NavItem key={i.name} item={i}/>
        )); 

        return(<div className="sidenav-container" >
            <StyledSideNav>
                {items}
            </StyledSideNav>

        </div>
        );
    }
}

export default SideNav