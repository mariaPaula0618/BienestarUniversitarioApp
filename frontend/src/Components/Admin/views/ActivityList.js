import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import axios from 'axios';



class ActivityList extends Component{

    constructor(){
        super();
        this.state = {
            activies: []
        }
    }


    async getActivities(){
        axios.get("http://127.0.0.1:8000/api/activity/")
        .then((response) => {
            
        })
    }

    render(){
        return(<div className="activitylist-container">
             <h1> Lista de actividades</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Profesor</th>
                        <th>Espacio</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
            
        </div>

        )
    }
}

export default ActivityList;