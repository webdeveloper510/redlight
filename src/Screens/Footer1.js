import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer1() {
  return (
    <div>
    <div className='foot'>
        <Container>
          <ul>
            <li><a href='Webmasters'>Webmasters</a></li>
            <li><a href='Info & Policies'>Info & Policies</a></li>
            <li><a href='/privacy'>Privacy & Policy</a></li>
            <li><a href='/policy'>Terms and Conditions</a></li>
            <li><a href='Human Trafficking Policy'>Human Trafficking Policy</a></li>
            <li><a href='low inforcement'>Low Inforcement</a></li>
            <li><a href='Map'>Map</a></li>
            <li><a href='Contact Us'>Contact Us</a></li>
          </ul>
          <ul>
            <li><a href='About Us'>About Us</a></li>
            <li><a href='FAQ'>FAQ'S</a></li>
          </ul>
        </Container>
      </div>
      <div className='twit'>
        <Container>
          <p>
            Copyright ©2022 All Rights Reserved.</p>
        </Container>
      </div>
</div>
  )
}

export default Footer1