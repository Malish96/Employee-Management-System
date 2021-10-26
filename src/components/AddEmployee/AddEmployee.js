import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button, Col, Form, Row} from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import Footer from "../FooterComponent/Footer";


const AddEmployee = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <NavBar/>
        <div style={{paddingTop: "150px"} }>

            <Button  variant="success" onClick={handleShow}>
                Add Employee here!
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="m-2">
                            <Col>
                                <Form.Control placeholder="First name" name=""/>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <Row className="m-2">
                            <Col>
                                <Form.Control placeholder="Email Address" />
                            </Col>
                        </Row>
                        <Row className="m-2">
                            <Col>
                                <Form.Control placeholder="Date of Birth" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Age" />
                            </Col>
                        </Row>
                        <Row className="m-2">
                            <Col>
                                <Form.Control placeholder="Department" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Designation" />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
            <Footer/>
        </div>
    );
};

export default AddEmployee;
