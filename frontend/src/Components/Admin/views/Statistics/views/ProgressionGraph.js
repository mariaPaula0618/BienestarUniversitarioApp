import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import axios from 'axios'


class ProgressionGraph extends Component{

    constructor() {
        super();
        this.state = {
            labels: ['January', 'February', 'March',
            'April', 'May'],
                datasets: [
                    {
                    label: 'Rainfall',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56]
                    }
                ]
          
  
        }
  
      }

    async getData(){
        axios.get("http://localhost:8000/api/reportDay/1")
        .then((response) => {
            console.log(response.data);
        })
    }

    componentDidMount(){
        this.getData()
    }


    render(){
        return(<div className="progressiongraph-container">
             <h1> Progresión</h1>

             <div className="barChartProgression">
             <Bar
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

export default ProgressionGraph;