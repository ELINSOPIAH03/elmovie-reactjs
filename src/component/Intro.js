import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white text-center d-flex justify-content-center align-item-center'>
                <Row>
                    <Col>
                        <div className='selogan'>NONTON GRATIS</div>
                        <div className='selogan'>GAK PAKE KARCIS</div>
                        <div className='introButton mt-4 text-center'>
                            <Button variant='dark'>
                                Lihat Semua List
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Intro;