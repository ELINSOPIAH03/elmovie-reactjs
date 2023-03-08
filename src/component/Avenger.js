import React from 'react';
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import ThorImg from "../assets/img/avenger/Thor.jpeg";
import Antmant from "../assets/img/avenger/ant-mant.jpeg";
import CAmerika from "../assets/img/avenger/Cp.jpeg";

const Avenger = () => {
    return (
        <div>
            <Container>
                <br/>
                    <h3 className='text-white text-center' id='avenger'>REKOMENDASI MOVIE AVENGER</h3>
                <Row>
                    <Col md={4} className='imageMovie'>
                        <Card className="text-white bg-dark imageMovie text-center border-0 mt-4" style={{ background: 'transparent' }}>
                            <Image src={ThorImg} alt="Card image" className='image'/>
                            <Card.Title className='m-1'>Thor Imortal</Card.Title>
                            <Card.Text className='m-0 p-0'>
                                This is a wider card with supporting.
                            </Card.Text>
                            <Card.Text className='mb-2'>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='imageMovie'>
                        <Card className="text-white bg-dark imageMovie text-center border-0 mt-4 " style={{ background: 'transparent'}}>
                            <Image src={Antmant} alt="Card image" className='image'/>
                            <Card.Title className='m-1'>Ant-Man Wasp</Card.Title>
                            <Card.Text className='m-0 p-0'>
                                This is a wider card with supporting.
                            </Card.Text>
                            <Card.Text className='mb-2'>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className='imageMovie'>
                        <Card className="text-white bg-dark imageMovie text-center border-0 mt-4" style={{ background: 'transparent' }}>
                            <Image src={CAmerika} alt="Card image" className='image'/>
                            <Card.Title className='m-1'>Captain America</Card.Title>
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

export default Avenger;