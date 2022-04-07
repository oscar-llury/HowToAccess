import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import HandleLogout from "../lib/logout";

//import Cookies from "js-cookie";

import logo from "../img/logo.svg";

function Header({ username, setToken, setUsername }) {
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
              {username ? (
                <NavDropdown
                  title={`Hola ${username}`}
                  id="collasible-nav-dropdown"
                >
                  <Link to="/proyectos" className="nav-item">
                    Mis Proyectos
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="#" className="nav-item">
                    Simulación interactiva
                  </Link>
                  <NavDropdown.Divider />
                  <Link
                    to="/"
                    className="nav-item"
                    onClick={(e) => {
                      HandleLogout(setToken, setUsername);
                    }}
                  >
                    Cerrar sesión
                  </Link>
                </NavDropdown>
              ) : (
                <Link to="/iniciar-sesion" className="nav-item">
                  Iniciar sesión
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
