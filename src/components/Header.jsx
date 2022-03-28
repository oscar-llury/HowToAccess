import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//NavDropdown
//import Link from "next/link";
//import Contexto_usuario from '../lib/usuario';
//import Router from "next/router";

//import Cookies from "js-cookie";
//import { useContext } from "react";

import logo from "../img/logo.svg";

function Header() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="app-nav-header"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-item">
                Inicio
              </Link>
              <Link to="#" className="nav-item">
                Sobre accesibilidad web
              </Link>
              <Link to="#" className="nav-item">
                Normas de accesibilidad
              </Link>
              <Link to="#" className="nav-item">
                Tips web
              </Link>
            </Nav>
            <Nav>
              <Link to="/iniciar-sesion" className="nav-item">
                Iniciar sesión
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

/*
<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
    Separated link
</NavDropdown.Item>
</NavDropdown>
*/
