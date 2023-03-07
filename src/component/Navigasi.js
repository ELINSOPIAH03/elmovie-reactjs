import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigasi = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>ELLFILM</Navbar.Brand>
                <Nav>
                    <Nav.Link>AVENGER</Nav.Link>
                    <Nav.Link>DESNY</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigasi;
