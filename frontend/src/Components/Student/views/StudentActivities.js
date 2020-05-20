import React, { Component } from "react";
import BoardActivity from "../../BoardActivity/BoardActivity"


class StudentActivities extends Component{

    constructor(){
        super();
        this.state = {
            activities:[
                { id: 1, title: "Super Mario Bross", place: "Arcade", description: "30000"},
                { id: 2, title: "Call on Duty", place: "FPS", description: "200000"},
                { id: 3, titile: "Celeste", place: "Plataformero", description: "45000"}
            ]
        }
    }

    render(){
        return(<div className="studentActivities-container">
            <BoardActivity activities={this.state.activities}/>

        </div>

        )
    }
}

export default StudentActivities;


