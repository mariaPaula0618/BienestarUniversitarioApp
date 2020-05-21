import  React, {Component} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import axios from 'axios';

class Activity extends Component{

    constructor(props) {
        super(props);
        this.state = {
            activity : this.props.activity,
        }
  
      }

      
      Example (props)  {
        const [show, setShow] = React.useState(false)

        const  createInscription = () =>{
            console.log("soy un gato")
            let url = "http://127.0.0.1:8000/api/create/inscription/";
            axios.post(url,
            { user: "maria1777",
             activity: props.state.activity.activity_id} )
            .then((response) => {
               console.log(response.data)
           });
           setShow(false)
        }
    
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true) 

                        return (
                        <>
                            <Button variant="primary" onClick={handleShow}>
                            Inscribirse
                            </Button>
                    
                            <Modal   show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Inscripción</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Es tu momento de mover el cuerpo!! Realiza la incripción confirmandola</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                                </Button>
                                <Button variant="primary" onClick={createInscription}>
                                Confirmar
                                </Button>
                            </Modal.Footer>
                            </Modal>
                        </>
                        );
            
            
      }
      

    render(){
       
        let route = this.props.link+"/"+this.state.activity.activity_id
  

        return(<div className="activity-container">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.state.activity.activity_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.state.activity.place}</Card.Subtitle>
                    <Card.Text>
                    {this.state.activity.description}
                    </Card.Text>
                    <span>
                    {this.props.option ==="Inscribirse" ? (
                        <this.Example {...this}/>
                            ) : (
                        <Card.Link href={route}> {this.props.option}</Card.Link>
                        )}
                    </span>
                    <Card.Link href="#" style={{marginLeft:"15px"}}>Detalles</Card.Link>
                </Card.Body>
            </Card>
        </div>

        )
    }


}

export default Activity;