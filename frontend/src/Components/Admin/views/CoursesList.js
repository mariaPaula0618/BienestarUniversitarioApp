import React, { Component } from "react";
import CourseModal from './CourseModal';
import { Table } from 'react-bootstrap';
import axios from 'axios';



class CoursesList extends Component {

    constructor() {
        super();
        this.state = {
            activities: [],
            params: [],
            courses: [],

        }

    }

    getActivities() {
        axios.get("http://127.0.0.1:8000/api/activity")
            .then((response) => {
                const activities = response.data;
                this.setState({ activities });
            });
    }

    getParamas() {
        axios.get("http://127.0.0.1:8000/api/params")
            .then((response) => {
                const params = response.data;
                this.setState({ params });
            });
    }


    getCourses() {
        axios.get("http://127.0.0.1:8000/api/course")
            .then((response) => {
                const courses = response.data;
                this.setState({ courses });
            })
    }


    componentDidMount() {
        this.getActivities()
        this.getCourses()
        this.getParamas();

    }


    render() {

        function ListCourses(props) {

            const list_courses = props.courses.map((course) =>
                <tr>
                    <td>{course.course_id}</td>

                    <td>{course.activity}</td>
                    <td>{course.start_hour}</td>
                    <td>{course.end_hour}</td>
                    <td>{course.week_day}</td>
                </tr>
            );
            return list_courses;
        }



        return (<div className="courseslist-container">
            <h1>Lista de Cursos</h1>
            <hr></hr>
            <CourseModal />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Actividad</th>
                        <th>Hora inicio</th>
                        <th>Hora finalización</th>
                        <th>Dia</th>
                    </tr>
                </thead>
                <tbody>
                    <ListCourses {...this.state} />
                </tbody>
            </Table>
        </div>

        )
    }
}

export default CoursesList;