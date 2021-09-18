import React from "react";

import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


const index = () => {

  const  userInfo={
	  name:"Jigar"
  }



  return (
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>ProLearn</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                to="/cart"
                style={{
                  marginRight: "10px",
                  color: "white",
                  textDecoration: "none",
                  marginTop:'7%'
                }}
              >
                <div>
                  <i className="fas fa-shopping-cart"></i> Cart
                </div>
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link
                  to="/login"
                  style={{
                    marginRight: "10px",
                    color: "white",
                    textDecoration: "none",
                    marginTop:'7%'
                  }}
                >
                  <i className="fas fa-user"></i> Sign In
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default index;