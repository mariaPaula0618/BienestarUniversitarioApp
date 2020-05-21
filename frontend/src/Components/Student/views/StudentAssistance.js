import React, { Component } from "react";
import Calendar from "../../Calendar/Calendar"
import axios from 'axios';


class StudentAssistance extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id_activity : props.match.params.id_activity,
            activity_name : "",
        }
  
      }

      async getActivty(){
        axios.get("http://127.0.0.1:8000/api/activity/"+this.state.id_activity)
        .then((response) => {
           const activity_name = response.data.activity_name;
           this.setState({activity_name})
       });
    }

    componentDidMount(){      
        this.getActivty();   
       }

    render(){
        
        return(<div className="bienestartActivities-container">
            <h1> Actividad: {this.state.activity_name}</h1>
            <h3>Mi asistencia</h3>
            <Calendar />
        </div>

        )
    }
}

export default StudentAssistance;