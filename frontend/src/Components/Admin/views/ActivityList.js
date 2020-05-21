import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import axios from 'axios';
import ActivityModal from './ActivityModal';



class ActivityList extends Component {

    constructor() {
        super();
        this.state = {
            activies: [],

        }
    }

    handleOnclickNew(boolean) {
        this.setState({ isClickedNew: boolean });
    }

    async getActivities() {
        axios.get("http://127.0.0.1:8000/api/activity/",{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            }},{})
            .then((response) => {
                const activies = response.data;
                this.setState({ activies });
            })
    }


    componentDidMount() {
        this.getActivities();
    }

    render() {


        function ListActivities(props) {

            const list_activities = props.activies.map((activity) =>
                <tr>
                    <td>{activity.activity_id}</td>
                    <td>{activity.activity_name}</td>
                    <td>{activity.description}</td>
                    <td>{activity.professor}</td>
                    <td>{activity.place}</td>
                </tr>
            );
            return list_activities;
        }

        


        return (<div className="activitylist-container">
            <h1> Lista de actividades</h1>
            <hr></hr>
            <ActivityModal/>
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
                    <ListActivities {...this.state} />
                </tbody>
            </Table>

        </div>

        )
    }
}

export default ActivityList;