import React, { Component } from "react";
import BoardActivity from "../../BoardActivity/BoardActivity";
import axios from 'axios';

class BienestarActivities extends Component{

    constructor(){
        super();
        this.state = {
            activities:[],
            title: "Listado de actividades",
            option: "Inscribirse",
        }
    }

    async getActivities(){
        console.log(`JWT ${localStorage.getItem('token')}`)
        axios.get("http://127.0.0.1:8000/api/activity/",
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            }},{}
        )
        .then((response) => {
           const activities = response.data;
           this.setState({activities})
       });
   }

   componentDidMount(){      
    this.getActivities();   
   }

    render(){


        return(<div className="bienestartActivities-container">
            
                <BoardActivity activities={this.state.activities} 
                           title = {this.state.title} 
                           option = {this.state.option}/>
        </div>

        )
    }
}

export default BienestarActivities;