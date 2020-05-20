import React, { Component } from "react";
import styled from 'styled-components';
import Sidebar from './../Sidebar/Sidebar';
import NavegationBar from './../NavegationBar/NavigationBar';
import Routes from './../../Config/routesTeacher'


const Styles = styled.div`
.teacher-container{

    width: 100%;
    height: 100vh;
}
.navbar{
    width: 100%;
 
}
.content-teacher{
    display: flex;
    width: 100%;
}
.sidebar{
    width: 20%;
    paddingTop: 10px;
}
.router-content{
    width: 80%;
}

`;

class Teacher extends Component{

    constructor() {
        super();
        this.state = {
            items:[
                {title:"Actividades de bienestar", icon: "house", link: "/teacherPane/activities"},
                {title:"Estadisticas", icon: "house", link: "/teacherPane/statistics"},
            ]
          
  
        }
  
      }

    render(){
        
        return(<Styles>
        <div className="teacher-container">

                    <div className="navbar">
                      <NavegationBar></NavegationBar>
                  </div>
            
                  <div className="content-teacher">
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

export default Teacher