import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import { checkContrast, formatRatio, meetsMinimumRequirements, resultOfRatio } from "lib/contrastColor";
import CustomPicker from "./CustomColorPicker";

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

  const handleTextColorChange = (e) => {
    if (e.target.value.match("^#[0-9a-f]{0,6}$") != null) {
      setTextColor(e.target.value);
    }
  };

  const handleBgColorChange = (e) => {
    if (e.target.value.match("^#[0-9a-f]{0,6}$") != null) {
      setBgColor(e.target.value);
    }
  };

  const handleSwapColors = () => {
    setBgColor(textColor);
    setTextColor(bgColor);
  };

  return (
    <Container>
      <h1>Herramienta de contraste de color</h1>
      <Row className="mt-3">
        <Col lg="3">
          <div className="color-picker h-100 bg-soft">
            <div className="px-3 text-center">
              <h2 className="text-start fs-4">Color de texto</h2>
              <CustomPicker className="text-color" color={textColor} setColor={setTextColor} width="auto" />
            </div>
            <div className="p-0 w-100 text-center">
              <button className="change" onClick={handleSwapColors}>
                <i className="bi bi-arrow-left-right"></i>
              </button>
            </div>
            <div className="px-3 text-center">
              <h2 className="text-start fs-4">Color de fondo</h2>
              <CustomPicker className="bgColor" color={bgColor} setColor={setBgColor} width="auto" />
            </div>
          </div>
        </Col>
        <Col lg="9">
          <div className="c-ratio bg-soft">
            <h2 className="fs-4">Ratio de contraste</h2>
            <div>
              <span>
                {ratio}
                <span className="unit">: 1</span>
              </span>
              <span className={`total ${resultRatio !== 1 ? "bg-success" : "bg-danger"}`}>{resultRatio === 1 ? "Malo" : resultRatio === 2 ? "Suficiente" : resultRatio === 3 ? "Bueno" : "Perfecto"}</span>
            </div>
            <Row className="results">
              <Col lg="3" md="6" sm="3" xs="6">
                <LevelBox result={level.AAsmall} level="AA" info="texto pequeño" tooltip="<18pt , >=14pt bold" />
              </Col>
              <Col lg="3" md="6" sm="3" xs="6">
                <LevelBox result={level.AAAsmall} level="AAA" info="texto pequeño" tooltip="<18pt , >=14pt bold" />
              </Col>

              <Col lg="3" md="6" sm="3" xs="6">
                <LevelBox result={level.AAlarge} level="AA" info="texto grande" tooltip=">=18pt" />
              </Col>
              <Col lg="3" md="6" sm="3" xs="6">
                <LevelBox result={level.AAAlarge} level="AAA" info="texto grande" tooltip=">=18pt" />
              </Col>
            </Row>
          </div>
          <Row className="example-boxes my-4 m-0">
            <Col className="px-5 py-4 d-flex flex-column box" style={{ backgroundColor: textColor, color: bgColor }}>
              <h2>Example</h2>
              <p className="example-text-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
              <div className="d-flex mt-auto align-items-center justify-content-between">
                <p className="m-0">#FB9696 / #052942</p>
                <button className="btn" style={{ backgroundColor: textColor, color: bgColor, borderColor: bgColor }}>
                  Button
                </button>
              </div>
            </Col>
            <Col className="px-5 py-4 d-flex flex-column box" style={{ backgroundColor: bgColor, color: textColor }}>
              <h2>Example</h2>
              <p className="example-text-normal"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
              <div className="d-flex mt-auto align-items-center justify-content-between">
                <p className="m-0">#052942 / #FB9696</p>
                <button className="btn" style={{ backgroundColor: bgColor, color: textColor, borderColor: textColor }}>
                  Button
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={{ order: "first", span: 6 }} xs={{ order: "last", span: 12 }}>
          <Container className="p-3">
            <p>
              El ratio de contraste de color está en el rango de 1 a 21 <span className="space-nowrap">(comúnmente escrito de 1:1 a 21:1).</span>
            </p>
            <ul>
              <li>Si ambos son el mismo color, el ratio de contraste será 1.</li>
              <li>El mayor contraste es entre el blanco y el negro.</li>
              <li>Colores opuestos en el círculo cromático (colores complementarios) también tendrán valores altos.</li>
            </ul>
          </Container>
        </Col>
        <Col md={{ order: "last", span: 6 }} xs={{ order: "first", span: 12 }}></Col>
      </Row>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
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
