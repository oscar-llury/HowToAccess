import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../lib/auth";
import logo from "../img/logo.svg";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);

    await auth.login(formData, (status) => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      if (status) {
        navigate(from, { replace: true });
      }
    });
  }

  return (
    <Container fluid className="text-black">
      <Row className="app-login justify-content-center align-items-center">
        <Col lg="4" md="6" xs="8">
          <Container className="text-center mb-4">
            <img src={logo} className="app-login-logo" alt="logo" />
            <h1>Iniciar sesión</h1>
          </Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                name="username"
                type="email"
                placeholder="name@example.com"
                autoComplete="username"
                //onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                //onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="remember">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Iniciar sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
//style={{ backgroundColor: "green" }}
