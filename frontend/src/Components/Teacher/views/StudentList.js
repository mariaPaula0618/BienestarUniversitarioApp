import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import axios from 'axios';



class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_activity : props.match.params.id_activity,
            students: [
            ]
        }
  
      }


     async getStudents(){
         axios.get("http://127.0.0.1:8000/api/enrollstudents/"+this.state.id_activity)
         .then((response) => {
            const students = response.data;
            this.setState({students})
        });
    }

    componentDidMount(){
     this.getStudents();        
    }
    
    render() {
        
        function ListEstudents (props) {
            
            const list_students = props.students.map((student) =>
                <tr>
                    <td>A00045564</td>
                    <td>{student.first_name} {student.last_name}</td>
                    <td>{student.email}</td>
                </tr>
            );
            return list_students;
        }
        return (<div className="studentlist-container">

            <h1> Esta es la actividad xxx</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>codigo</th>
                    </tr>
                </thead>
                <tbody>
                    <ListEstudents {...this.state}/>
                </tbody>
            </Table>
            
        </div>

        )
    }
}

export default StudentList;