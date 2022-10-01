import React, { useState /*useEffect*/ } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

//import { Collapse } from "bootstrap";

import { useAuth } from "../lib/auth";
import logo from "../img/logo/logotipo.svg";

export default function Header() {
  let navigate = useNavigate();
  let auth = useAuth();
  const location = useLocation();
  const locationUrl = location.pathname;
  const username = useSelector((state) => state.username);
  const [navDropped, setNavDropped] = useState(false);
  /*
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("responsive-navbar-nav");
    const bsCollapse = new Collapse(menuToggle, { toggle: false });
    navLinks.forEach((l) => {
      l.addEventListener("click", () => {
        bsCollapse.toggle();
      });
    });
  }, []);
*/
  async function handleLogout(event) {
    event.preventDefault();

    await auth.logout((status) => {
      if (status) {
        navigate("/");
      }
    });
  }

  function handleNavDrop() {
    setNavDropped(!navDropped);
  }

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="app-nav-header p-0">
        <Container fluid="sm" className="container-header">
          <Navbar.Brand href="/" title="Inicio">
            <img alt="HowToAccess logotipo" src={logo} width="auto" height="50" className="d-inline-block align-top" /> <span className="d-none">HowToAccess</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" data-toggle="dropdown" data-bs-target="#responsive-navbar-nav" onClick={handleNavDrop}>
            {navDropped ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
          </Navbar.Toggle>
          <Navbar.Collapse className="collapse" id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className={`nav-item ${locationUrl === "/" ? "active" : ""}`} title="Inicio">
                Inicio
              </Link>
              <Link to="/accesibilidad-web" className={`nav-item ${locationUrl === "/accesibilidad-web" ? "active" : ""}`} title="Sobre accesibilidad web">
                Sobre accesibilidad web
              </Link>
              <Link to="/normas-de-accesibilidad-web" className={`nav-item ${locationUrl === "/normas-de-accesibilidad-web" ? "active" : ""}`} title="Normas de accesibilidad">
                Normas de accesibilidad
              </Link>
              <Link to="#" className={`nav-item ${locationUrl === "" ? "active" : ""}`} title="Tips web">
                Tips web
              </Link>
            </Nav>
            <Nav>
              {username ? (
                <NavDropdown title={`Hola ${username}`} id="collasible-nav-dropdown">
                  <Link to="/proyectos" className={`nav-item ${locationUrl === "/proyectos" ? "active" : ""}`} title="Mis proyectos">
                    Mis Proyectos
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/simulacion-interactiva" className={`nav-item ${locationUrl === "/simulacion-interactiva" ? "active" : ""}`} title="Simulación interactiva">
                    Simulación interactiva
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/" className="nav-item" onClick={handleLogout} title="Cerrar sesión">
                    Cerrar sesión
                  </Link>
                </NavDropdown>
              ) : (
                <Link to="/iniciar-sesion" className={`nav-item ${locationUrl === "/iniciar-sesion" ? "active" : ""}`} title="Iniciar sesión">
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
