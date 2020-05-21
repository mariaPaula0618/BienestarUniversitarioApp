import React, { Component } from "react";
import BoardActivity from "../../BoardActivity/BoardActivity"
import axios from 'axios';

class StudentActivities extends Component{

    constructor(){
        super();
        this.state = {
            activities:[],
            title: "Mis Actividades",
            option: "Marcar asistencia",
            link: "/studentPane/assistance",
            id_user:"maria1777",
        }
    }

    async getActivities(){
        axios.get("http://127.0.0.1:8000/api/activities/"+this.state.id_user,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            }},{})
        .then((response) => {
           const activities = response.data;
           this.setState({activities})
       });
   }

   componentDidMount(){    
    this.getActivities();  
    console.log(this.state.activities) 
   }

    render(){
        return(<div className="studentActivities-container">
            <BoardActivity activities={this.state.activities} 
                           title = {this.state.title}
                           option = {this.state.option} 
                           link = {this.state.link}
                           />

        </div>

        )
    }
}

export default StudentActivities;


