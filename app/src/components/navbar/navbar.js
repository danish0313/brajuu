import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import companyLogo from "../../assets/images/companyLogo.svg";
import "./navbar.scss";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect className="navbar" expand="lg">
          <Navbar.Brand href="/" className="navbarLogo">
            <Image src={companyLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav burger-menu">
            <Nav className="navbar-nav ml-auto">
              <Nav.Link href="/" className="home">
                FitQuiz
              </Nav.Link>
              <Nav.Link href="#">Merch</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">über uns</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
            </Nav>
            {/* <Nav>
                                                        <Nav.Link href="#home">Home</Nav.Link>

                                                </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
