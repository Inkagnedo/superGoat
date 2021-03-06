import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #EB8401;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #0C0608

    &:hover {
      color: white;
    }
  }
`;

export const NavBar = () => (
    <Styles>
        <Navbar expand="lg">
          <div className="container">
            <Navbar.Brand href="/">Super GOAT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/SignIn">Sign In</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
    </Styles>
)