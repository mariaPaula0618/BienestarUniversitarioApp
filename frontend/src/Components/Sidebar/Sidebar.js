import React, {Component} from 'react';
import SideNav from "./SideNav";
import SidebarIcon from './SidebarIcon';

class Sidebar extends Component {

    state = {
        isOpen: true
      }

    toggleSidebar = () => {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }))
     }

    render() {
        let items = this.props.items;
       

        return (<div className="sidebar-container">
            <div className="sidebar-icon">
                    <SidebarIcon
                     isOpen={this.state.isOpen}
                     handleClick={this.toggleSidebar}
                    />
                 </div>
            <SideNav items ={items} />
                
            </div>
        );
    }
}

export default Sidebar