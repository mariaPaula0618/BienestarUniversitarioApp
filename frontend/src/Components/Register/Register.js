import  React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';


const Style = styled.div`   
    background-image: url("./img/background.jpg");
    background-color: rgba(243, 243, 243, 0.4);
    background-blend-mode: color;
    background-size: cover;
    min-height: 100vh;
    height:auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

class Register extends Component{


    render(){
        return(<Style>
        <div className="register-contaienr">
            <h1>Registro</h1>
            <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="Ingrese nombres" />
                
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="email" placeholder="Ingrese Apellidos" />
                
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Registrarse
            </Button>
            </Form>

        </div>
        </Style>

        )
    }
}

export default Register;

