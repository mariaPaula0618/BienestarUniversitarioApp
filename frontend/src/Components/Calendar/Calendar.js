import React, { Component } from "react";
import SimpleReactCalendar from 'simple-react-calendar'

class Calendar extends Component{


    render(){
        return(<div className="bigCalendar-container">
            <SimpleReactCalendar activeMonth={new Date()} />

        </div>

        )
    }
}

export default Calendar