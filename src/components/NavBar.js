import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              Home
            </Nav.Link>
            <Nav.Link>
              About Us
            </Nav.Link>
            <Nav.Link>
              Meetings
            </Nav.Link>
            <Nav.Link>
              Volunteer
            </Nav.Link>
            <Nav.Link>
              Sign in
            </Nav.Link>
            <Nav.Link>
             Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;