import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap';
import styled from 'styled-components'; 


const Styles = styled.div`

.graph-container{
    display: flex;
}
 
`;

class Statistics extends Component{

    render(){
        return(<Styles>
        <div className="statistics-container">
             <h1>Estadísticas</h1>

             <div className="graph-container">

                 <div className="attendancePercentage">

                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://developingthebusiness.com/wp-content/uploads/2018/05/Estadisticas-de-ventas.jpg" />
                        <Card.Body>
                            <Card.Title>Actividades con mayor asistencia</Card.Title>
                            <Card.Text>
                            Accediendo a este reporte podrás detallar información sobre  las actividades con mayor asistencia
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>

                 </div>

                 <div className="progressionGraph">

                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://developingthebusiness.com/wp-content/uploads/2018/05/Estadisticas-de-ventas.jpg" />
                        <Card.Body>
                            <Card.Title> Progresión de actividades </Card.Title>
                            <Card.Text>
                            Accediendo a este reporte podrás detallar información sobre la progresión de las actividades en un periodo
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>

                 </div>

             </div>



        </div>
        </Styles>
        )
    }
}

export default Statistics;