import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import TimePicker from 'react-bootstrap-time-picker';

class CourseForm extends Component {
    constructor() {
        super();
        this.state = {
            activities: [],
            params: [],
            activity: "",
            start_hour: {},
            end_hour: {},
            week_day: "" ,
        }
    }


    handleChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        console.log(value);
        this.setState({ [name]: value });   
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const p = {
            activity: this.state.activity,
            start_hour: this.secondsToString(this.state.start_hour),
            end_hour: this.secondsToString(this.state.end_hour),
            week_day: this.state.week_day,  
        }

        console.log(p)
        axios.post("http://localhost:8000/api/create/course/", 
        {
            activity: this.state.activity,
            start_hour: this.secondsToString(this.state.start_hour),
            end_hour: this.secondsToString(this.state.end_hour),
            week_day: this.state.week_day,  
        } 
        ).then((response) => {
            console.log(response.data)
        })

    }

    async getActivities() {
        axios.get("http://127.0.0.1:8000/api/activity")
            .then((response) => {
                const activities = response.data;
                this.setState({ activities });
            });
    }

    async getParamas() {
        axios.get("http://127.0.0.1:8000/api/params")
            .then((response) => {
                const params = response.data;
                this.setState({ params });
            });
    }


    secondsToString(seconds) {
        var hour = Math.floor(seconds / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return hour + ':' + minute + ':' + second;
      }
      
      

    handleTimeStartChange(time) {
        const start_hour = time;   
        this.setState({ start_hour });
      }

    handleTimeEndChange(time) {
 
        const end_hour = time;  
        this.setState({ end_hour });
    }
    
    componentDidMount() {
        this.getActivities();
        this.getParamas();
    }

    render() {

        function ListActivities(props) {

            const list_activities = props.activities.map((activity) =>
                <option value={activity.activity_id}>
                    {activity.activity_name}
                </option>

            );
            return list_activities;
        }

        function ListParams(props) {

            const list_params = props.params.map((param) =>
                <option value={param.param_id}>
                    {param.param_name}
                </option>

            );
            return list_params;
        }
        return(
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}>


                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Actividad</Form.Label>
                                <Form.Control name="activity" value={this.state.activity} as="select"  onChange={this.handleChange.bind(this)}>
                                    <ListActivities {...this.state} />
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Hora inicio</Form.Label>
                                <TimePicker onChange={this.handleTimeStartChange.bind(this)} value={this.state.start_hour} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Hora finalización</Form.Label>
                                <TimePicker onChange={this.handleTimeEndChange.bind(this)} value={this.state.end_hour} />
                            </Form.Group>



                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Dia</Form.Label>
                                <Form.Control name="week_day" value={this.state.week_day} as="select"  onChange={this.handleChange.bind(this)}>
                                    <ListParams {...this.state} />
                                </Form.Control>
                            </Form.Group>

                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
            </div>
        );
    }
}

export default CourseForm;