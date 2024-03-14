import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";

export const NavBar = () => {
  return (
      <Navbar bg="light" expand="sm" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#">ZarpaStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Telefonos Movile</Nav.Link>
          <Nav.Link href="#">Notebook</Nav.Link>
          <Nav.Link href="#">Auriculares</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
