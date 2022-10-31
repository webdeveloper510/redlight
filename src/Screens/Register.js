import React, { useState } from 'react'
import { Container, Row, Col, Button, FormCheck } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Header from './header';
import Footer from './Footer1';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        first_name: '', email: '', username: '', password: '', confirm_password: ''
    });
    const [error, setError] = useState(false)
    const [item, setItem] = useState({ kindOfStand: "" });
   

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
    const showToastMessage = (message,type) => {
        
        if(type!='error'){
           
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate('/login')
        }
        else{
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
     
      
    };
    const submitForm = () => {
      
        let data = values.password != values.confirm_password
        if (data) {
            setError(true)
        }
        else {
            let data={
                ...values,
                "role_id":item.kindOfStand
            }
             axios({
                url: "https://redlightrating.com/redlight-backend/api/register",
                method: "POST",
                data: data,
              })
                .then((res) => {console.log(res)
                    showToastMessage('user Created Succesfully','') })
                .catch(error =>showToastMessage(error.response.data.message,'error'));
            console.log('working', values)
        }
    }
    return (
        <>
            <div className='reg'>
                <Header />
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col md={8} className='sig text-center my-4 bg-white rounded-1 py-5'>
                            <div>
                                <h4>RL Membership Sign-Up</h4>
                            </div>
                            <div className='thank'>
                                <p>Thanks for becoming a registered user of The Erotic Review! With your support,<br />
                                    we will hopefully take the guesswork out of enjoying the adult entertainment<br />
                                    that is out there. Once again, becoming a registered user is free!</p>
                            </div>
                            <div>
                                <p>Are you already account? <a className='por' href='/login'> Login  </a></p>
                            </div>
                            <Form.Group controlId="kindOfStand" className='d-flex justify-content-center mb-3'>
                               
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
                            <Row>

                                <Col></Col>
                                <Col md={6}>
                                    <div className='rec'>
                                        <Form.Group className="   mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" value={values.first_name} onChange={set('first_name')} placeholder="Enter Name" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="email" value={values.email} onChange={set('email')} placeholder="Email Address" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text" value={values.username} onChange={set('username')} placeholder="Username" />
                                        </Form.Group>
                                      
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" value={values.password} onChange={set('password')} placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="password" value={values.confirm_password} onChange={set('confirm_password')} placeholder="Confirm Password" />
                                        </Form.Group>
                                        {error && <p>Password Mismatched</p>}
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="number" placeholder="Enter Zip Code " />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text"  placeholder="Enter City" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="number" placeholder="Enter Height" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text"  placeholder="Enter Weight (in lbs)" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text"  placeholder="Enter Hair Color (blonde, Bleached, Brown, Black, Red, Other)" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text"  placeholder="Enter Bust Size" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text"  placeholder="Enter Cup Size" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text"  placeholder="Enter Dress Size" />
                                        </Form.Group>
                                        <div className='text-start mb-2'>

                                            <label >Profile Advertise Images :</label>
                                            </div>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="file"  placeholder="Enter Dress Size" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="file"  placeholder="Enter Dress Size" />
                                        </Form.Group>
                                        <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="file"  placeholder="Enter Dress Size" />
                                        </Form.Group>
                         
                                        <Form.Group controlId="kindOfStand" className='d-flex justify-content-left mb-3'>
                                        <div className='text-start me-2'>

                                            <label >Profile Claimed</label>
                                            </div>
                                            <Form.Check
                                                value="2"
                                                type="radio"
                                                className='me-3'
                                                aria-label="radio 2"
                                                label=" Yes"
                                                
                                            />
                                                <Form.Check
                                                value="3"
                                                type="radio"
                                                aria-label="radio 1"
                                                label=" No"
                                                
                                                onChange={handleChange}
                                                checked={kindOfStand === "3"}
                                            />
                                        </Form.Group>

                                    </div>
                                    <div className='checkbox text-center'>
                                        <Form>
                                            <Form.Group className=" mb-3" controlId="formBasicPassword">
                                                <Form.Check type="checkbox" className='ch'>
                                                    <label>
                                                        <input type='checkbox' className='me-3'></input>
                                                        <a className='agree ' href='/policy'> I agree to terms and conditions</a>
                                                    </label>
                                                </Form.Check>
                                            </Form.Group>
                                            <Button className='subb me-3' variant="primary" onClick={() => submitForm()}>Submit </Button>
                                           
                                        </Form>
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>

                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </>
    )
}

export default Register