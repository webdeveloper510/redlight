import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import Header from './header';
import Footer from './Footer1';
function landingPage() {
  return (
    <div>
        <Header />
        <Container>
          <Row></Row>
            <Row className="my-4">
                <Col md={4}>
                    <div className='Become'>
                        <h3>Get Started </h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                    </div>
                </Col>
                <Col md={4}>
                  <div className='Become'>
                    <h4>Become a Member</h4>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                    </p>
                    <Row>
                        <Col>
                         <a href=''>View More Benefits</a>
                        </Col>
                        <Col>
                         <a href=''>Register now</a>
                        </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={4}>
                <div className='Become'>
                    <h4>Are you a Provider?</h4>
                    <p>As a Provider member you get to keep track of your reputation as well as maintain your popularity.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                    <Row>
                        <Col>
                         <a href=''>View More Benefits</a>
                        </Col>
                        <Col>
                         <a href=''>Register now</a>
                        </Col>
                      
                    </Row>
                  </div>
                </Col>
            </Row>
            <Row className='my-4'>
                <Col md={6}>
                <div class="Become">
                    <h4>TER Poll</h4>
                    <h6>The standard Lorem Ipsum passage, used since the 1500s.</h6>
                        <Form.Check
                            inline
                            label="Yes"
                            name="group1"
                            type="radio"
                        
                        />
                        <Form.Check
                            inline
                            label="No"
                            name="group1"
                            type="radio"
                        
                        />
                         <Button variant="secondary">Vote</Button>
                         </div>
                </Col>
                <Col md={6}>
                <div class="Become">
                    <h4>Tools</h4>
                    <h6>Get email updates</h6>
                    <p>Sign up for free.</p>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="Your email address" />
                    </Form.Group>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className='Become'>
            <Container >         
         <Row>
                <Col md={10}>
                <h2>Welcome to TER!</h2>
                <div className='text-start'>
                        
                        <h3>Find Providers</h3>
                        </div>
                <Row>
               
                <Col md={8}>
                <div className='text-start'>
                        <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Password
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Radios
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                <Form.Check
                                type="radio"
                                label="third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                />
                            </Col>
                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                            </Col>
                        </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col></Col>
            </Row>
                  
               
        <div className='text-start'>
            <h2>TER offers two levels of membership – basic and VIP</h2>
            <h4>Members who sign up for a FREE basic membership:</h4>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Phasellus elementum nibh vel mi eleifend, a posuere tortor rutrum.</li>
                <li>Quisque id lorem vitae felis mollis cursus.</li>
                <li>Nunc congue elit tristique tortor varius, sed dapibus nibh blandit.</li>
                <li>Proin vel purus sed orci luctus varius.</li>
                <li>Nam dapibus felis vitae ligula pretium, id luctus ligula malesuada.</li>
            </ul>
        </div>
        <div className='text-start'>
            <h4>VIP members of The Erotic Review:</h4>
            <ul>
                <li>Sed tempor nibh ut tristique pretium.</li>
                <li>Nunc lobortis urna et fringilla laoreet.</li>
                <li>Maecenas in nunc ornare, tempus erat non, congue ex.</li>
                <li>Cras cursus sapien et erat fermentum eleifend.</li>
                <li>Sed et nisl eu enim hendrerit convallis vitae quis metus.</li>
            </ul>
        </div>
              </Col>
              <Col md={2}>
              <div className='side'>
                  <div className='button'>
                    <Button className='button' variant="primary" href='Write Review' ><span class="material-symbols-outlined">edit_square</span> Write Review</Button>
                  </div>
                  <div className='img'>
                    
                    <div className='need'>
                      <p><b>Are You Part of <br />
                        excessive<br />
                        Community?</b></p>
                    </div>
                    <div className='register'>
                      <Button className='button' variant="success"  href='Write Review'>REGISTRATION</Button>
                    </div>
                  </div>
                </div>
                <div className='total'>
                  <p><b>1,764,027<br /></b>
                    TOTAL REVIEW
                  </p>
                  <hr />
                  <p><b>3,297<br /></b>
                    NEW REVIEW
                  </p>
                  <hr />
                  <p><b>7,516<br /></b>
                    USERS ONLINE
                  </p>
                </div>
              </Col>
            </Row>
            </Container> 
        </div>
        <Footer />
    </div>
  )
}

export default landingPage
