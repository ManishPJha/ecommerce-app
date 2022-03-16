import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `assets/icons/${src}?w=${width}&q=${quality || 75}`
}

const _Navbar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container className="h-100" >
          <Navbar.Brand href="#home"><Image loader={myLoader} src="/carts.png" width="40px" height="40px" alt="navIcon" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default _Navbar;