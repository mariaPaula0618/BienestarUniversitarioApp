import React, { Component } from "react";
import BoardActivity from "../../BoardActivity/BoardActivity"
import axios from 'axios';

class TeacherActivities extends Component{

    constructor(){
        super();
        this.state = {
            activities:[],
            title: "Listado de actividades",
            option: "Ver Inscritos",
            link: "/teacherPane/enrollStudents",
            id_user:"correo4@hotmail.com",
        }
    }

    async getActivities(){
        axios.get("http://127.0.0.1:8000/api/activitys/"+this.state.id_user)
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

       

        return(<div className="teacherActivities-container">
                <BoardActivity activities={this.state.activities} 
                           title = {this.state.title} 
                           option = {this.state.option}
                           link = {this.state.link}
                           />
        </div>

        )
    }
}

export default TeacherActivities;