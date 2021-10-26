import React from 'react';
import {Link} from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="primary" expand="lg" fixed="top" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">EMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className="nav-link" to="./home">Home </Link>
                        <Link className="nav-link" to="./leaveApp">Leave App</Link>
                        ><Link className="nav-link" to="./addEmployee">Add Employee</Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>






            );
            };

            export default NavBar;
