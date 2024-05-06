import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="sm" data-bs-theme="light">
    <Container>
      <Navbar.Brand to="/ecommerce-CarlosFlores/" as={Link}>ZarpaStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link to="/category/Apple" as={NavLink}>Apple</Nav.Link>
          <Nav.Link to="/category/Samsung" as={NavLink} >Samsung</Nav.Link>
          <Nav.Link to="/category/Motorola" as={NavLink} >Motorola</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
};
