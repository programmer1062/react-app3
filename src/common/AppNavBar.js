import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Link to="/">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/home">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to="/project">
            <Nav.Link href="#link">Project</Nav.Link>
          </Link>
          <Link to="/about">
            <Nav.Link href="#link">About Us</Nav.Link>
          </Link>
          <Link to="/contact">
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
