import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col } from 'react-bootstrap';

function Footer1() {
    return (
        <div className='land'>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md={8} className="my-5">
                        <div className='Setting'>
                            <div className='text-center content'>
                                <h3>Logo</h3>
                                <h4>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
                                <p>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <h6 className='redcolor'>WARNING – Lorem ipsum dolor sit amet.</h6>
                            </div>
                            <div className='acknowledge'>
                                <p><b>IMPORTANT! You must read and acknowledge the following:</b></p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                                <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum:</p>
                                <ol>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</li>
                                    <li>Mauris et felis malesuada, molestie arcu vel, ullamcorper purus.</li>
                                    <li>Curabitur at turpis finibus, pellentesque urna sit amet, congue ex.</li>
                                    <li>Integer eget nunc eu sem pretium placerat eu sed nisl.</li>
                                    <li>Vivamus in nunc nec nibh rhoncus ultrices. </li>
                                    <li>Proin at massa et turpis eleifend condimentum vitae id turpis.</li>
                                    <li>Duis placerat metus vulputate nunc varius accumsan.</li>
                                    <li>Praesent non elit nec nibh rutrum cursus.</li>
                                    <li>Phasellus ac lacus aliquam, convallis ipsum sit amet, tincidunt nulla.</li>
                                    <li>Proin ut nibh viverra, vehicula nunc nec, porta magna.</li>
                                    <li>Duis feugiat erat non accumsan ultrices.</li>
                                    <li>Nulla sed dui condimentum, vulputate risus ut, ullamcorper risus.</li>
                                    <li>Mauris aliquet purus ac metus elementum, eget blandit sapien ullamcorper.</li>
                                    <li>Duis eleifend mauris sed ligula hendrerit, et pellentesque magna hendrerit.</li>
                                    <li>Phasellus condimentum mauris sit amet libero tempor, sed lobortis ante pretium.</li>
                                </ol>
                            </div>
                            <div className='text-center py-4'>
                                <Button variant="secondary" href="/landing">Agree</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="outline-secondary">Decline</Button>
                            </div>
                        </div>
                        <p className='colorwhite'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer1