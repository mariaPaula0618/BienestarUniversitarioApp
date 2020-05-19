import React, { Component } from "react";
import styled from 'styled-components';
import Sidebar from './../Sidebar/Sidebar';
import NavegationBar from './../NavegationBar/NavigationBar';
import Routes from './../../Config/routesStudent'

const Styles = styled.div`
.student-container{
    background-color: mintcream;
}
.student-container header{
    height: auto;
}

`;

class Student extends Component{

    constructor() {
        super();
        this.state = {
            items:[
                {title:"Actividades de bienestar", icon: "house", link: "Activities"},
                {title:"Actividades inscritas", icon: "house", link: "RegisteredActivities"},
            ]
          
  
        }
  
      }

      render(){
          console.log(this.state.items)
          return(<Styles>
          <div className="student-container">
              <header>
                  <div className="navbar">
                      <NavegationBar></NavegationBar>
                  </div>
              </header>
              <section className="center">
                  <div className="content-student">
                    <div className="sidebar">
                        <Sidebar items={this.state.items} />
                    </div>
                    <div className="router-content">
                        <Routes />
                    </div>
                  </div>
              </section>
             
              
          </div>
          </Styles>
          )
      }



}

export default Student;