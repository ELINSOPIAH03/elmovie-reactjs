import React from 'react';
import { Col, Card, Row, Container } from "react-bootstrap";
const Footer = () => {
    return (
        <div className='bg-dark'>
            <Container>
                <Row>
                    <Col>
                        <Card className='bg-dark text-white text-center m-1 p-1 fs-5'>
                            <Card.Text >
                                Copy Right Elin Sopiah 2K23
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;