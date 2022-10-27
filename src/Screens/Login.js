import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Header from './header';
import Footer from './Footer1';

function Login() {
    return (
        <>
        <Header />

            <div className='login'>
                <Container>
                    <div>
                        <Row>
                            <Col>
                            </Col>
                            <Col md={8} className='member'>
                                <div className='main-login'>
                                    <div className='account'>
                                        <div>
                                            <h5>Not a Member yet</h5>
                                            <p>Create a new account.</p>
                                        </div>
                                        <div>
                                            <b>Free Registration</b>
                                            <p>Signing up is free so join today to take advantage of exclusive benefits such as escort contact information full uncensored reviews.</p>
                                        </div>
                                        <div >
                                            <p><a className='mor' href='View More Benefits'>View More Benefits</a></p>
                                            <p><a className='mor' href='Register Now'>Register Now</a></p>
                                        </div>
                                       
                                    </div>
                                    <div className='alredy'>
                                        <div>
                                            <h5>Already a member?</h5>
                                            <p>Login to your account.</p>
                                        </div>
                                        <div>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Username"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" placeholder="name@example.com" />
                                            </FloatingLabel>
                                            <FloatingLabel controlId="floatingPassword" label="Password">
                                                <Form.Control type="password" placeholder="Password" />
                                            </FloatingLabel>
                                            <div className='checkbox'>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" label="Remember Password" />
                                                    </Form.Group>
                                                    <Button className='button' variant="info"  href='Write Review'>Login Now </Button>
                                                    <a className='regis' href='Forgot Password?'>Forgot Password?</a>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Login