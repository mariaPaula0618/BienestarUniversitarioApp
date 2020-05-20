import React, { Component } from "react";
import Calendar from "../../Calendar/Calendar"
import axios from 'axios';


class StudentAssistance extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id_activity : props.match.params.id_activity,
            students: [
            ]
        }
  
      }

    render(){
        
        return(<div className="bienestartActivities-container">
            <h1>Soy un gato y mi id es  {id_activity}</h1>
            <Calendar />
        </div>

        )
    }
}

export default StudentAssistance;