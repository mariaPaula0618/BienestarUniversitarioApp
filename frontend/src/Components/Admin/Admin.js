import React, { Component } from "react";
import styled from 'styled-components';
import Sidebar from './../Sidebar/Sidebar';
import NavegationBar from './../NavegationBar/NavigationBar';
import Routes from './../../Config/routesAdmin'


const Styles = styled.div`
.admin-container{

    width: 100%;
    height: 100vh;
}
.navbar{
    width: 100%;
 
}
.content-admin{
    display: flex;
    width: 100%;
}
.sidebar{
    width: 20%;
}
.router-content{
    width: 80%;
}

`;

class Admin extends Component{

    constructor() {
        super();
        this.state = {
            items:[
                {title:"Actividades de bienestar", icon: "house", link: "/adminPane/activites"},
                {title:"Cursos de bienestar", icon: "house", link: "/adminPane/courses"},
                {title:"Estadísticas", icon: "house", link: "/adminPane/statistics"},
            ]
          
  
        }
  
      }

    render(){
        
        return(<Styles>
        <div className="admin-container">

                    <div className="navbar">
                      <NavegationBar></NavegationBar>
                  </div>
            
                  <div className="content-admin">
                    <div className="sidebar">
                        <Sidebar items={this.state.items} />
                    </div>
                    <div className="router-content">
                        <Routes />
                    </div>
                  </div>


        </div>
        </Styles>

        )
    }
}

export default Admin