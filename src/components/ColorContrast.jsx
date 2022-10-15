import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Tooltip, OverlayTrigger, Card } from "react-bootstrap";
import { checkContrast, formatRatio, meetsMinimumRequirements, resultOfRatio } from "lib/contrastColor";
import CustomPicker from "./CustomColorPicker";

import loading from "../img/loading.gif";

export default function ColorContrast() {
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [resultRatio, setResultRatio] = useState("");
  const [ratio, setRatio] = useState();
  const [level, setlevel] = useState({});

  useEffect(() => {
    let newRatio = checkContrast(textColor, bgColor);
    let result = meetsMinimumRequirements(newRatio);
    setResultRatio(resultOfRatio(newRatio));
    setlevel(result);
    setRatio(formatRatio(newRatio, false));
  }, [textColor, bgColor]);

  const handleSwapColors = () => {
    setBgColor(textColor);
    setTextColor(bgColor);
  };

  return (
    <Container fluid="md" className="app-simulacion main-container">
      <Row className="align-items-center justify-content-around">
        <Col xs="12" md="7" lg="6">
          <h1 className="fw-extrabold">Herramienta de contraste de color</h1>
          <p>
            Utilice el verificador de contraste de color <span className="accent-hta">How To Access</span> para verificar rápidamente que las combinaciones de colores son accesibles para todos, cumpliendo con las Pautas de Accesibilidad para el Contenido Web (WCAG) establecidas por el W3C.
          </p>
        </Col>
        <Col xs="6" sm="5" md="4" lg="5" xl="4" className="overflow-hidden text-center">
          <img src={loading} alt="" className="scale-1-2 w-100" />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xxl="3" xl="4" lg="4" md="12" sm="12" className="mt-4">
          <Row className="color-picker bg-soft m-auto align-items-center">
            <Col lg="12" sm="5" className="px-3 text-center">
              <h2 className="text-start fs-5">Color de texto</h2>
              <CustomPicker className="text-color" color={textColor} setColor={setTextColor} width="auto" />
            </Col>
            <Col lg="12" sm="2" className="p-0 text-center my-lg-3">
              <button className="change" onClick={handleSwapColors}>
                <i className="bi bi-arrow-left-right"></i>
              </button>
            </Col>
            <Col lg="12" sm="5" className="px-3 text-center">
              <h2 className="text-start fs-5">Color de fondo</h2>
              <CustomPicker className="bgColor" color={bgColor} setColor={setBgColor} width="auto" />
            </Col>
          </Row>
        </Col>
        <Col xxl="9" xl="8" lg="8" md="12" sm="12">
          <div className="c-ratio bg-soft mt-4">
            <h2 className="fs-3">Ratio de contraste</h2>
            <div>
              <span>
                {ratio}
                <span className="unit">: 1</span>
              </span>
              <span className={`total ${resultRatio !== 1 ? "bg-success" : "bg-danger"}`}>{resultRatio === 1 ? "Malo" : resultRatio === 2 ? "Suficiente" : resultRatio === 3 ? "Bueno" : "Perfecto"}</span>
            </div>
            <Row className="results">
              <Col md="3" xs="6">
                <LevelBox result={level.AAsmall} level="AA" info="texto pequeño" tooltip="<18pt , >=14pt bold" />
              </Col>
              <Col md="3" xs="6">
                <LevelBox result={level.AAAsmall} level="AAA" info="texto pequeño" tooltip="<18pt , >=14pt bold" />
              </Col>

              <Col md="3" xs="6">
                <LevelBox result={level.AAlarge} level="AA" info="texto grande" tooltip=">=18pt" />
              </Col>
              <Col md="3" xs="6">
                <LevelBox result={level.AAAlarge} level="AAA" info="texto grande" tooltip=">=18pt" />
              </Col>
            </Row>
          </div>
          <Row className="example-boxes my-4 m-0">
            <Col className="px-4 px-lg-5 py-4 d-flex flex-column box" style={{ backgroundColor: textColor, color: bgColor }}>
              <h2>Example</h2>
              <p className="example-text-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
              <div className="d-flex mt-auto align-items-center justify-content-between">
                <p className="m-0">
                  {bgColor} / {textColor}
                </p>
                <button className="btn" style={{ backgroundColor: textColor, color: bgColor, borderColor: bgColor }}>
                  Button
                </button>
              </div>
            </Col>
            <Col className="px-4 px-lg-5 py-4 d-flex flex-column box" style={{ backgroundColor: bgColor, color: textColor }}>
              <h2>Example</h2>
              <p className="example-text-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
              <div className="d-flex mt-auto align-items-center justify-content-between">
                <p className="m-0">
                  {textColor} / {bgColor}
                </p>
                <button className="btn" style={{ backgroundColor: bgColor, color: textColor, borderColor: textColor }}>
                  Button
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container className="mt-3 main-container">
        <Container className="p-0 p-md-3">
          <h2 className="fw-extrabold">Cómo interpretar el contraste de color</h2>
          <p>
            El ratio de contraste de color está en el rango de 1 a 21 <span className="space-nowrap">(comúnmente escrito de 1:1 a 21:1).</span>
          </p>
          <ul>
            <li>Si ambos son el mismo color, el ratio de contraste será 1.</li>
            <li>El mayor contraste es entre el blanco y el negro.</li>
            <li>Colores opuestos en el círculo cromático (colores complementarios) también tendrán valores altos.</li>
          </ul>
          <p>Requisitos mínimos de relación de contraste establecidos por el W3C:</p>
          <Row className="m-auto mb-3">
            <Col md="6" className="py-2">
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold">WCAG 2.1 Nivel AA</Card.Title>
                  <Card.Text className="m-1">Texto normal: ratio de contraste mínimo 4,5:1</Card.Text>
                  <Card.Text className="m-1">Texto grande: ratio de contraste mínimo 3:1</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" className="py-2">
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold">WCAG 2.1 Nivel AAA</Card.Title>
                  <Card.Text className="m-1">Texto normal: ratio de contraste mínimo 7:1</Card.Text>
                  <Card.Text className="m-1">Texto grande: ratio de contraste mínimo 4,5:1</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <p>El texto grande se define a partir de 14 pt (18,67 px) y negrita, o mayor de 18 pt (24 px).</p>
          <p>Tenga en cuenta que las imágenes son puramente decorativas y los logotipos o nombre de marca no tienen requisitos mínimos de contraste.</p>
        </Container>
      </Container>
    </Container>
  );
}

const LevelBox = ({ result, level, info, tooltip }) => {
  return (
    <OverlayTrigger placement="bottom" delay={{ show: 200, hide: 400 }} overlay={<Tooltip>{tooltip}</Tooltip>}>
      <div className="box">
        <div className={result ? "bg-success" : "bg-danger"}>
          {result ? <i className="bi bi-check-lg"></i> : <i className="bi bi-x-lg"></i>}
          <div className="info">
            <p>{level}</p>
            <span>{info}</span>
          </div>
        </div>
      </div>
    </OverlayTrigger>
  );
};
