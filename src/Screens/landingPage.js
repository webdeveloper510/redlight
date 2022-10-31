import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button, Card, Modal } from 'react-bootstrap';
import Header from './header';
import Footer from './Footer1';
function landingPage() {
  return (
    <div>
        <Header />
        <Container>
          
            <Row className="my-4">
                <Col md={4}>
                    <div className='Become'>
                        <h3>Get Started </h3>
                        <p>The Erotic Review is the most comprehensive database featuring providers and escorts from all over the world.</p>
                    </div>
                </Col>
                <Col md={4}>
                  <div className='Become'>
                    <h4>Become a Member</h4>
                    <p>Signing up is free so join today to take advantage of exclusive benefits such as escort contact information full uncensored reviews.</p>
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
                    <p>As a Provider member you get to keep track of your reputation as well as maintain your popularity.</p>
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
                    <h4>RL Poll</h4>
                    <h6>For all the reviewers out there, do you REALLY READ the guidelines before agreeing to them?</h6>
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
                    <p>Sign up for free RL email newsletters.</p>
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
                <h2>Welcome to RL!</h2>
                <div className='text-start'>
                        
                        <h3>Find Providers</h3>
                        </div>
                <Row>
               
                <Col md={8}>
                  <div className='text-start'>
                    <Form>
                      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Ter Id 
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text"  />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Name 
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text"  />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Age 
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text"  />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Location 
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text"  />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Phone
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text"  />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email 
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="email"  />
                        </Col>
                      </Form.Group>
                      <fieldset>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label as="legend" column sm={2}>
                            Radios
                          </Form.Label>
                          <Col sm={10}>
                            <Form.Check
                              type="checkout"
                              label="exclude bad websites"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                            <Form.Check
                              type="checkout"
                              label="exclude bad phone numbers"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                            />
                           
                          </Col>
                        </Form.Group>
                      </fieldset>

                      <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                          <Button type="submit">Search</Button>
                        </Col>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col></Col>
            </Row>
                  
               
        <div className='text-start'>
            <h2>RL offers two levels of membership – basic and VIP</h2>
            <h4>Members who sign up for a FREE basic membership:</h4>
            <ul>
                <li>Have partial access to viewing provider profiles.</li>
                <li>Can read the General Details text portion of provider reviews.</li>
                <li>Have limited abilities to search RL's database of providers.</li>
                <li>Can read and post on RL public discussion boards.</li>
                <li>Can submit reviews of providers.</li>
                <li>Can participate in some of RL’s chatrooms.</li>
            </ul>
        </div>
        <div className='text-start'>
            <h4>VIP members of The Erotic Review:</h4>
            <ul>
                <li>Have full access to all of RL’s provider profiles, including detailed breakdowns of the services they offer and the rates they charge.</li>
                <li>Can read the Juicy Details sections of provider reviews. The Juicy Details is where our users give complete, blow-by-blow descriptions of their sessions.</li>
                <li>Have access to our VIP search page. This allows our users to search for providers based on name, phone number, contact information, physical attributes, services offered, and many more criteria.</li>
                <li>Have full access to all of RL’s chatrooms.</li>
                <li>Can send and receive Personal Messages (PM’s) to other RL members and providers by using RL Mail.</li>
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
                    <Button className='button' variant="success" href='Write Review'>REGISTRATION</Button>
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
      <div className='register_banner'>
        <Card className='text-center'>
          <p> Are You Part of excessive Community? </p>
          
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default landingPage
