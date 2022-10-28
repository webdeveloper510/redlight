import React from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function header() {
  return (
    <>
  
       <Navbar bg="dark"  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">My RL</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">Messages</Nav.Link>
            <Nav.Link href="#link">Discussion Boards</Nav.Link>
            <Nav.Link href="#link">Site Reviews</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            <Nav.Link className='search' href="#link"><span class="material-symbols-outlined">search</span></Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default header
