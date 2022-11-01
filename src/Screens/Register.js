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
        first_name: '', email: '', username: '', password: '',
         confirm_password: '',zip_code:'', city:'',
         height:'', weight:'',hair_color:'',bust_size:'',cup_size:'',
         dress_size:'',advertisement_url1:'',advertisement_url2:'',advertisement_url3:''
    });
    const [hide, setHide] = useState(false)
    const [error, setError] = useState(false)
    const [item, setItem] = useState({ kindOfStand: "2" });
    const [item1, setItem1] = useState({ kindOfStand1: "" });
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedImage3, setSelectedImage3] = useState(null);

    const { kindOfStand } = item;
    const { kindOfStand1 } = item1;
    const set = name => {
        return ({ target: { value } }) => {
            setValues(oldValues => ({ ...oldValues, [name]: value }));
        }
    };
    const handleChange = e => {
        e.persist()
        console.log(e.target.value);
        if (e.target.value != 3) {
            setHide(false)
        }
        else {
            setHide(true)
        }
        setItem(prevState => ({
            ...prevState,
            kindOfStand: e.target.value
        }));
    };
    const handleChange1 = e => {
        e.persist()
        console.log(e.target.value);
        setItem1(prevState => ({
            ...prevState,
            kindOfStand1: e.target.value
        }));
    };
    const showToastMessage = (message, type) => {

        if (type != 'error') {

            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate('/login')
        }
        else {
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
            console.log(selectedImage)
            let data1 = {
                ...values,
                "profile_id": item.kindOfStand,
                "profile_claimed":item1.kindOfStand1,
                "image1":selectedImage,
                "image2":selectedImage2,
                "image3":selectedImage3,

            }
            console.log(data1)
            axios({
                url: "https://redlightrating.com/redlight-backend/api/register",
                method: "POST",
                data: data1,
            })
                .then((res) => {
                    console.log(res)
                    showToastMessage('user Created Succesfully', '')
                })
                .catch(error => showToastMessage(error.response.data.message, 'error'));
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
                                            <Form.Control type="number" value={values.zip_code} onChange={set('zip_code')} placeholder="Enter Zip Code " />
                                        </Form.Group>
             
                                        {
                                            hide &&
                                            <>
                                               <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                  <Form.Control type="text" value={values.city} onChange={set('city')} placeholder="Enter City" />
                                                </Form.Group>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="number" value={values.height} onChange={set('height')}  placeholder="Enter Height" />
                                                </Form.Group>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="number" value={values.weight} onChange={set('weight')}   placeholder="Enter Weight (in lbs)" />
                                                </Form.Group>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="text" value={values.hair_color} onChange={set('hair_color')}  placeholder="Enter Hair Color (blonde, Bleached, Brown, Black, Red, Other)" />
                                                </Form.Group>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="text" value={values.bust_size} onChange={set('bust_size')}  placeholder="Enter Bust Size" />
                                                </Form.Group>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="text" value={values.cup_size} onChange={set('cup_size')}  placeholder="Enter Cup Size" />
                                                </Form.Group>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="text" value={values.dress_size} onChange={set('dress_size')}  placeholder="Enter Dress Size" />
                                                </Form.Group>
                                             <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text" value={values.advertisement_url1} onChange={set('advertisement_url1')} placeholder="Enter Url" />
                                            </Form.Group>
                                            <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text" value={values.advertisement_url2} onChange={set('advertisement_url2')}  placeholder="Enter Url" />
                                            </Form.Group>
                                            <Form.Group className="  mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text" value={values.advertisement_url3} onChange={set('advertisement_url3')}   placeholder="Enter Url" />
                                            </Form.Group>
                                                <div className='text-start mb-2'>

                                                    <label >Profile Advertise Images :</label>
                                                </div>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="file"     onChange={(event) => { setSelectedImage(event.target.files[0]) }} placeholder="Advertise Image" />
                                                </Form.Group>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="file" onChange={(event) => { setSelectedImage2(event.target.files[0]) }} placeholder="Advertise Image" />
                                                </Form.Group>
                                                <Form.Group className="  mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="file"  onChange={(event) => { setSelectedImage3(event.target.files[0]) }}placeholder="Advertise Image" />
                                                </Form.Group>

                                                <Form.Group controlId="kindOfStand" className='d-flex justify-content-left mb-3'>
                                                    <div className='text-start me-2'>

                                                        <label >Profile Claimed</label>
                                                    </div>
                                                    <Form.Check
                                                        value="yes"
                                                        type="radio"
                                                        className='me-3'
                                                        aria-label="radio 2"
                                                        onChange={handleChange1}
                                                        label=" Yes"
                                                        checked={kindOfStand1 === "yes"}

                                                    />
                                                    <Form.Check
                                                        value="no"
                                                        type="radio"
                                                        aria-label="radio 1"
                                                        label=" No"

                                                        onChange={handleChange1}
                                                        checked={kindOfStand1 === "no"}
                                                    />
                                                </Form.Group>

                                            </>
                                        }
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