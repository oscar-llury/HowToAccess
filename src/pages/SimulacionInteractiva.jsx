import React from "react";
import { Container } from "react-bootstrap";
import ColorContrast from "../components/ColorContrast";

export default function SimulacionInteractiva() {
  return (
    <Container fluid="sm" className="app-simulacion main-container">
      <ColorContrast />
    </Container>
  );
}
