import React, { Component } from "react";
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components'; 


const Styles = styled.div`

.graph-container{
    width:100%
}

 
`;

class Statistics extends Component{

    render(){
        return(<Styles>
        <div className="statistics-container">
             <h1>Estadísticas</h1>
                <br />
                <br />
             <div className="graph-container">
                <Container>
                    <Row>
                        <Col xs="10" sm="10" md="6" lg="4">
                 <div className="attendancePercentage">

                        <Card border="primary" style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://developingthebusiness.com/wp-content/uploads/2018/05/Estadisticas-de-ventas.jpg" />
                        <Card.Body>
                            <Card.Title>Actividades con mayor asistencia</Card.Title>
                            <Card.Text>
                            Accediendo a este reporte podrás detallar información sobre  las actividades con mayor asistencia
                            </Card.Text>
                            <Button href="/adminPane/attendacePercentage" variant="primary">Ver</Button>
                        </Card.Body>
                        </Card>

                 </div>
                 </Col>
                    <Col xs="10" sm="10" md="6" lg="4">
                 <div className="progressionGraph">

                        <Card border="primary" style={{ width: '22rem' }}>
                        <Card.Img variant="top" src="https://developingthebusiness.com/wp-content/uploads/2018/05/Estadisticas-de-ventas.jpg" />
                        <Card.Body>
                            <Card.Title> Progresión de actividades </Card.Title>
                            <Card.Text>
                            Accediendo a este reporte podrás detallar información sobre la progresión de las actividades en un periodo
                            </Card.Text>
                            <Button href="/adminPane/progressionGraph" variant="primary">Ver</Button>
                        </Card.Body>
                        </Card>

                 </div>
                     </Col>
                 </Row>
                 </Container>
             </div>



        </div>
        </Styles>
        )
    }
}

export default Statistics;