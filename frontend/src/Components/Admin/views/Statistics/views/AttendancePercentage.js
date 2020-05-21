import React, { Component } from "react";
import {Pie} from 'react-chartjs-2';
import axios from 'axios';


class AttendancePercentage extends Component{

    constructor() {
        super();
        this.state = {

            assistances :[],
            activities:[],

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




        async getActivities(){
                axios.get("http://127.0.0.1:8000/api/activity/")
                .then((response) => {
                const activities = response.data;
                this.setState({activities})
            });
        }

        async getAssistance(){
            axios.get("http://127.0.0.1:8000/api/assitance/")
            .then((response) => {
            const assistances = response.data;
            this.setState({assistances})
            });   
    
        }

    


        componentDidMount(){    
            this.getActivities();  
            this.getAssistance();
           }
           

    render(){
        
        return(<div className="attendancePercentage-container">
            <h1> Actividades con mayor asistencia</h1>
            <hr></hr>
            <br />
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