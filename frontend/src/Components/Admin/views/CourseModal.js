import React, { Component } from "react";
import { Button, Modal, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import CourseForm from './CourseForm'

class CourseModal extends Component {

    render() {

        function MyVerticallyCenteredModal(props) {

            const [show, setShow] = React.useState();

            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            return(
                <>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button onClick={handleShow}>Nuevo</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CourseForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </>
            );
        }
        return (
            <MyVerticallyCenteredModal/>
        );
    }

}

export default CourseModal;