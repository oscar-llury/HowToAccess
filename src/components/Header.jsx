import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAuth } from "../lib/auth";
import logo from "../img/logo.svg";

export default function Header() {
  let navigate = useNavigate();
  let auth = useAuth();
  const username = useSelector((state) => state.username);

  async function handleLogout(event) {
    event.preventDefault();

    await auth.logout((status) => {
      if (status) {
        console.log("ok");
        navigate("/");
      }
    });
  }

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
                  <Link to="/" className="nav-item" onClick={handleLogout}>
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
