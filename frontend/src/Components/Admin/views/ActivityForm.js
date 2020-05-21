import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class ActivityForm extends Component {
    constructor() {
        super();
        this.state = {
            activity_name: "",
            place: "",
            description: "",
            professor: "" ,
            professors: [],
        }
    }


    handleChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });   
        console.log(this.state.professor)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/create/activity/",{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            }}, 
        {
            activity_name: this.state.activity_name,
            place: this.state.place,
            description: this.state.description,
            professor: this.state.professor,   
        } 
        ).then((response) => {
            console.log(response.data)
        })

    }

    async getProfesors() {
        axios.get("http://127.0.0.1:8000/api/users/2",{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            }},)
            .then((response) => {
                const professors = response.data;
                this.setState({ professors });
                console.log(this.state.professors)
            });
    }

    componentDidMount() {
        this.getProfesors();
    }

    render() {

        function ListTeachers(props) {

            const list_teachers = props.professors.map((professor) =>
                <option value={professor.email}>
                    {professor.email}
                </option>

            );
            return list_teachers;
        }

        return(
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group controlId="formPlaintextName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control name="activity_name" value={this.state.activity_name} type="plaintext" placeholder="Ingresar nombre" onChange={this.handleChange.bind(this)} />
                            </Form.Group>
                            <Form.Group controlId="formPlaintextLugar">
                                <Form.Label>Espacio</Form.Label>
                                <Form.Control name="place" value={this.state.place} type="plaintext" placeholder="Ingresar lugar" onChange={this.handleChange.bind(this)} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Profesor</Form.Label>
                                <Form.Control name="professor" value={this.state.professor} as="select"  onChange={this.handleChange.bind(this)}>
                                    <ListTeachers {...this.state} />
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formTextareaDescripcion">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control name="description" value={this.state.description} as="textarea" type="textarea" placeholder="Ingresar descripción" onChange={this.handleChange.bind(this)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
            </div>
        );
    }
}

export default ActivityForm;