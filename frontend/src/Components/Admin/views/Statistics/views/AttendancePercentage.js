import React, { Component } from "react";
import {Pie} from 'react-chartjs-2';


class AttendancePercentage extends Component{

    constructor() {
        super();
        this.state = {
            labels: ['January', 'February', 'March',
                    'April', 'May'],
            datasets: [
                {
                label: 'Rainfall',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
                data: [65, 59, 80, 81, 56]
                }
             ]
          
  
        }
  
      }

    render(){
        return(<div className="attendancePercentage-container">
            <h1> Actividades con mayor asistencia</h1>

            <div className="pieChartAttendance">
                    <Pie
                data={this.state}
                options={{
                    title:{
                    display:true,
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />

            </div>
        </div>

        )
    }
}

export default AttendancePercentage;