import React from 'react';
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Raya from "../assets/img/disney/raya.jpeg";
import Bab from "../assets/img/disney/bab.jpeg";
import Lorax from "../assets/img/disney/lorax.jpeg";

const Disny = () => {
    return (
        <div>
            <Container>
                <br/>
                    <h3 className='text-white text-center rekom' id='disney'>REKOMENDASI MOVIE DISNEY</h3>
                <Row>
                    <Col md={4} className='imageMovie'>
                        <Card className="text-white bg-dark imageMovie text-center border-0 mt-4" style={{ background: 'transparent' }}>
                            <Image src={Raya} alt="Card image" className='image'/>
                            <Card.Title className='m-1'>Raya</Card.Title>
                            <Card.Text className='m-0 p-0'>
                                This is a wider card with supporting.
                            </Card.Text>
                            <Card.Text className='mb-2'>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='imageMovie'>
                        <Card className="text-white bg-dark imageMovie text-center border-0 mt-4" style={{ background: 'transparent' }}>
                            <Image src={Bab} alt="Card image" className='image'/>
                            <Card.Title className='m-1'>Beauty And The Beast</Card.Title>
                            <Card.Text className='m-0 p-0'>
                                This is a wider card with supporting.
                            </Card.Text>
                            <Card.Text className='mb-2'>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='imageMovie'>
                        <Card className="text-white bg-dark imageMovie text-center border-0 mt-4" style={{ background: 'transparent' }}>
                            <Image src={Lorax} alt="Card image" className='image'/>
                            <Card.Title className='m-1'>The Lorax</Card.Title>
                            <Card.Text className='m-0 p-0'>
                                This is a wider card with supporting.
                            </Card.Text>
                            <Card.Text className='mb-2'>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
                <br/><br/><br/>
            </Container>
        </div>
    );
};

export default Disny;