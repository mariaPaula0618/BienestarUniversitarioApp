import  React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class Activity extends Component{


    render(){
        let activity = this.props.activity;
        return(<div className="activity-container">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{activity.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{activity.place}</Card.Subtitle>
                    <Card.Text>
                    {activity.description}
                    </Card.Text>
                    <Card.Link href="#">{this.props.option}</Card.Link>
                    <Card.Link href="#">Detalles</Card.Link>
                </Card.Body>
            </Card>
        </div>

        )
    }
}

export default Activity;