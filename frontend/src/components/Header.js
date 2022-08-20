import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo2 from "./logo2-removebg-preview.png";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="warning"
      className="bg=warning"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo2} alt="Logo" width="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="blog" className="text-body">
              Blog
            </Nav.Link>
            <Nav.Link href="aboutus" className="text-body">
              About Us
            </Nav.Link>
            <NavDropdown
              title="Donate"
              id="collasible-nav-dropdown"
              className="text-body"
            >
              <NavDropdown.Item href="#action/3.1">M-pesa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Debit Card</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Paypal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Bitcoin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              href="signin"
              className="text-body btn btn-outline-secondary  m-2"
            >
              <FaSignInAlt />
              Sign In
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="signup"
              className="text-body btn btn-outline-secondary m-2 p-6"
            >
              {" "}
              <FaUser />
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
