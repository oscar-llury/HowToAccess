import React, { useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth } from "../lib/auth";
import logo from "../img/logo/isotipo.svg";
import slide1 from "../img/login-bg.jpg";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  let from = location.state?.from?.pathname || "/";

  function showPassHandler(e) {
    setShowPass(!showPass);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      setValidated(true);
      setErrors({});
      let formData = new FormData(form);

      await auth.login(formData, (status) => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        if (status) {
          navigate(from, { replace: true });
        } else {
          setValidated(false);
          let errors = {};
          errors.username = true;
          errors.password = true;
          errors.msg = "Comprueba que tus datos son correctos.";
          setErrors(errors);
        }
      });
    } else {
    }
    //form.classList.add("was-validated");
  }

  return (
    <Container fluid className="text-black">
      <Row className="app-login justify-content-center align-items-center overflow-hidden position-relative">
        <div className="oblique">
          <img src={slide1} alt="" className="w-100" />
        </div>
        <Col lg="4" md="6" sm="8" xs="10" className="card">
          <Container className="text-center mb-4">
            <img src={logo} className="app-login-logo" alt="logo" />
            <h1>Iniciar sesión</h1>
          </Container>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control name="username" type="email" placeholder="name@example.com" autoComplete="username" required isInvalid={!!errors.username} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup hasValidation>
                <Form.Control name="password" type={showPass ? "text " : "password"} placeholder="Contraseña" autoComplete="current-password" required isInvalid={!!errors.password} />
                <InputGroup.Text onClick={showPassHandler}>
                  <i className={showPass ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="remember">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            {errors.msg && <p className="text-danger">{errors.msg}</p>}
            <Button variant="outline-primary" type="submit" className="w-100">
              Iniciar sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
//style={{ backgroundColor: "green" }}
