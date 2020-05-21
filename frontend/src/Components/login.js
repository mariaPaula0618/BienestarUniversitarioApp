import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Styles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

* {
  box-sizing: border-box;
}
body {
  background: #1C8EF9 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
}

h1,h2,h3,h4,h5,h6,label,span {
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
}

body, html, .App, #root, .auth-wrapper {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}

.parent {
    height:auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 10%;
}

.childForm {
  background:#C4C4C4;
  border-radius:20px;
  border:2px solid white;
  padding:60px
}
`;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '', 
            password: ''
        };
      
      }

    handleChange = (event) => {   

        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log();
        this.props.onAuth(this.state.username, this.state.password);
        this.props.history.push("/studentPane")
        console.log("recived values ", this.state);
    }

    render() {
        return (
            <Styles>
                <div className="parent">
                    <div className="childForm">

                        <form onSubmit={e => this.props.handle_login(e, this.state)}>
                            <h3>Iniciar Sesión</h3>

                            <div className="form-group">
                                <label>Correo</label>
                                <input type="text" name="email" value={this.state.email} className="form-control" placeholder="correo@icesi.edu.co" onChange={this.handleChange.bind(this)}/>
                            </div>

                            <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password" name="password" value={this.state.password} className="form-control" placeholder="Ingrese contraseña" onChange={this.handleChange.bind(this)}/>
                            </div>

                            

                            <button type="submit" className="btn btn-primary btn-block">Ingresar</button>

                        </form>
                    </div>
                </div>
            </Styles>
        );
    }
}



export default Login;

Login.propTypes = {
  handle_login: PropTypes.func.isRequired
};
