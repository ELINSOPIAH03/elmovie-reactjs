import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigasi = () => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">ELLFILM</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#avenger">AVENGER</Nav.Link>
                    <Nav.Link href="#disney">DISNY</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigasi;
