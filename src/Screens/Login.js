import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';    
import Header from './header';
import Footer from './Footer1';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({email: '', password: ''});
    const [item, setItem] = useState({ kindOfStand: "2" });

    const { kindOfStand } = item;
    const set = name => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({ ...oldValues, [name]: value }));
        }
    };
    const handleChange = e => {
        e.persist()
        console.log(e.target.value);
        setItem(prevState => ({
            ...prevState,
            kindOfStand: e.target.value
        }));
    };

    const submitForm = () => {
            let data = {
                ...values,
                "role_id": item.kindOfStand,

            }
            console.log(data)
            axios({
                url: "https://redlightrating.com/redlight-backend/api/login",
                method: "POST",
                data: data,
            })
                .then((res) => {
                    console.log(res)
                    showToastMessage('user Login Succesfully', '')
                })
                .catch(error => showToastMessage(error.response.data.message, 'error'));
            console.log('working', values)
        
    }
    const showToastMessage = (message, type) => {

        if (type != 'error') {

            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate('/landing')
        }
        else {
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }


    };

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
                                            <p><a className='mor' href='/register'>Register Now</a></p>
                                        </div>

                                    </div>
                                    <div className='alredy'>

                                        <div>
                                            <h5>Already a member?</h5>
                                            <p>Login to your account.</p>
                                        </div>
                                        <Form.Group controlId="kindOfStand" className='d-flex justify-content-start mb-3'>

                                        <Form.Check
                                    value="2"
                                    type="radio"
                                    className='me-3'
                                    aria-label="radio 2"
                                    label=" Reviewer"
                                    onChange={handleChange}
                                    checked={kindOfStand === "2"}
                                />
                                <Form.Check
                                    value="3"
                                    type="radio"
                                    aria-label="radio 1"
                                    label=" Provider"

                                    onChange={handleChange}
                                    checked={kindOfStand === "3"}
                                />
                                        </Form.Group>
                                        <div>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Username"
                                                className="mb-3"
                                            >
                                                <Form.Control type="email" value={values.email} onChange={set('email')} placeholder="name@example.com" />
                                            </FloatingLabel>
                                            <FloatingLabel controlId="floatingPassword" label="Password">
                                                <Form.Control type="password" value={values.password} onChange={set('password')} placeholder="Password" />
                                            </FloatingLabel>
                                            <div className='checkbox'>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox"  label="Remember Password" />
                                                    </Form.Group>
                                                    <Button className='button' variant="info" onClick={() => submitForm()} >Login Now </Button>
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