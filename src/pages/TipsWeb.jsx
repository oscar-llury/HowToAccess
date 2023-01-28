import React from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";

import logo from "../img/logo/isotipo.svg";

export default function TipsWeb() {
  return (
    <div>
      <Container fluid className="text-black">
        <Row className="app-login justify-content-center align-items-center">
          <Col lg="4" md="6" sm="8" xs="10" className="card">
            <Container className="text-center mb-4">
              <img src={logo} className="app-login-logo" alt="logo" />
              <h1 className="fs-2 m-2">Tips Web</h1>
              <p className="fs-5">próximamente...</p>
              <p className="fs-5">El stackoverflow de la accesibilidad</p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
