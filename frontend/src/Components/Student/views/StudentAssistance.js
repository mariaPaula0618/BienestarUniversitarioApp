import React, { Component } from "react";
import Calendar from "../../Calendar/Calendar"


class StudentAssistance extends Component{

    render(){
        let id_activity= this.props.match.params.id_activity
        console.log("Llego?")
        return(<div className="bienestartActivities-container">
            <h1>Soy un gato y mi id es  {id_activity}</h1>
            <Calendar />
        </div>

        )
    }
}

export default StudentAssistance;