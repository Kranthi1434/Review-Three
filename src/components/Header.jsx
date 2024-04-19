import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Image,
  Button,
} from "react-bootstrap";
import "../components/header.css";
import logo from "../assets/images/Logo.png";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        className="navbar-background"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home" className="ms-2">
                Home
              </Nav.Link>
              <Nav.Link href="#about us" className="ms-2">
                About Us
              </Nav.Link>
              <Nav.Link href="#sports" className="ms-2">
                Sports
                <MdKeyboardArrowDown size={20} />
              </Nav.Link>
              <Nav.Link href="#services" className="ms-2">
                Services
              </Nav.Link>
              <Nav.Link href="#bloga" className="ms-2">
                Blogs
              </Nav.Link>
              <Nav.Link href="#contact us" className="ms-2">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#contact us" className="ms-2">
                <FiSearch />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button className="black">Login</Button>
              </Nav.Link>
              <Nav.Link href="#memes">
                <Button className="yellow ms-2">Sign Up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
{
  /* <NavDropdown title="Sports" className='ms-2'>
<NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">
    Another action
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
    Separated link
</NavDropdown.Item>
</NavDropdown> */
}
