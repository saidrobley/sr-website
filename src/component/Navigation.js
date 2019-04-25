import React from 'react';
import './Navigation.css';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = props => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Said Robley</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav color="default-color">
          <Nav.Link eventKey={1} href="#About">
            Home
          </Nav.Link>
          <Nav.Link eventKey={2} href="#Services">
            About
          </Nav.Link>
          <Nav.Link eventKey={3} href="#Portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link eventKey={4} href="#memes">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
