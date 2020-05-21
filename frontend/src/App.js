import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/login';
import Register from './Components/Register/Register';
import Nav from "./Components/Nav"
import axios from 'axios';

import BaseRouter from './Config/routes';


//import store from './store/store';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount(){
    if (this.state.logged_in) {
        axios.get('http://localhost:8000/api/current_user/',
         {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('token')}`
        }
      },{} )
        .then(res => {
          console.log(res.data)
        })
    }
  }
  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };
  
  render() {

    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <Login handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <Register handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return(
      <div className="app">
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
        <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
        </h3>
        
        <div className="routes"> 
            <BaseRouter></BaseRouter>
        </div>
    </div>

      
    );
  }


  handle_login = (e, data) => {
    e.preventDefault();
    console.log(data)
    axios.post('http://localhost:8000/token-auth/', {
      username: data.email,
      password: data.password,
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        console.log( "--------------- "+ localStorage.getItem('token'))

        this.setState({
          logged_in: true,
          displayed_form: '',
          username: res.data.user.first_name + " " + res.data.user.last_name
        });
      });
  };

  
  handle_signup = (e, data) => {
    e.preventDefault();
    console.log(data)
    axios.post('http://localhost:8000/api/users/', {
      username: data.email,
      email: data.email,
      first_name: data.name,
      last_name: data.lastName,
      password: data.password,
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', data.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: res.data.first_name + " " + res.data.last_name
        });
      });
  };
  
  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };





}




export default App;
