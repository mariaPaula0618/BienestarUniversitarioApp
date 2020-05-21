import React, { Component } from "react";
import styled from 'styled-components';
import Sidebar from './../Sidebar/Sidebar';
import NavegationBar from './../NavegationBar/NavigationBar';
import Routes from './../../Config/routesStudent'

const Styles = styled.div`
.student-container{

    width: 100%;
    height: 100vh;
}
.navbar{
    width: 100%;
 
}
.content-student{
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

class Student extends Component{

    constructor() {
        super();
        this.state = {
            items:[
                {title:"Actividades de bienestar", icon: "house", link: "/studentPane/activities"},
                {title:"Actividades inscritas", icon: "house", link: "/studentPane/myActivities"},
            ]
          
  
        }
  
      }

      render(){
          return(<Styles>
          <div className="student-container">
              
                  <div className="navbar">
                      <NavegationBar></NavegationBar>
                  </div>
            
                  <div className="content-student">
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

export default Student;