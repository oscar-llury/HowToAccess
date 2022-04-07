import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

import HandleLogin from "../lib/login";
import logo from "../img/logo.svg";

export default function Login({ setToken, setUsername }) {
  //states
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  //functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await HandleLogin(
      {
        user: username,
        passw: password,
      },
      setToken,
      setUsername
    );
    return status;
  };

  return (
    <Container fluid className="text-black">
      <Row className="app-login justify-content-center align-items-center">
        <Col lg="4" md="6" xs="8">
          <Container className="text-center mb-4">
            <img src={logo} className="app-login-logo" alt="logo" />
            <h1>Iniciar sesión</h1>
          </Container>
          <Form
            onSubmit={(e) => {
              if (handleSubmit(e)) {
                navigate("/");
              }
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoComplete="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
