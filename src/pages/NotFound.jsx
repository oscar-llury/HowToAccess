import React from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="page-404">
      <div className="browser text-center">
        <div className="header">
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </div>
        <div className="e-404">
          <h1>
            <span>404</span>
            <br /> página no encontrada
          </h1>
        </div>
      </div>
    </Container>
  );
}
