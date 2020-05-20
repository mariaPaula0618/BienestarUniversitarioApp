import React, { Component } from "react";
import BoardActivity from "../../BoardActivity/BoardActivity"

class BienestarActivities extends Component{

    constructor(){
        super();
        this.state = {
            activities:[
                { id: 1, title: "Super Mario Bross", place: "Arcade", description: "30000"},
                { id: 2, title: "Call on Duty", place: "FPS", description: "200000"},
                { id: 3, title: "Celeste", place: "Plataformero", description: "45000"}
            ],
            title: "Listado de actividades",
            option: "Inscribirse",
        }
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