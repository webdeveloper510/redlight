import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <div>
         <Navbar bg="white" variant="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home" ><span class="material-symbols-outlined">import_contacts</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/tour"><h5>Take a tour</h5></Nav.Link>           
              <Nav.Link href="/courses"><h5>Courses</h5></Nav.Link>
              <Nav.Link href="/service"><h5>Service</h5></Nav.Link>
              <Nav.Link href="/policy"><h5>Privacy Policy</h5></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer