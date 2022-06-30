import {
  checkContrast,
  formatRatio,
  meetsMinimumRequirements,
} from "lib/contrastColor";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function SimulacionInteractiva() {
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  //const [contrast, setContrast] = useState();
  const [ratio, setRatio] = useState();
  const [level, setlevel] = useState({});

  useEffect(() => {
    let newRatio = checkContrast(textColor, bgColor);
    //setContrast(newRatio);
    let result = meetsMinimumRequirements(newRatio);
    setlevel(result);
    setRatio(formatRatio(newRatio, false));
  }, [textColor, bgColor]);

  const handleTextColorChange = (e) => {
    if (e.target.value.match("^#[0-9a-f]{0,6}$") != null) {
      //setTextColor(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleBgColorChange = (e) => {
    if (e.target.value.match("^#[0-9a-f]{0,6}$") != null) {
      setBgColor(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleSwapColors = () => {
    setBgColor(textColor);
    setTextColor(bgColor);
  };

  return (
    <Container fluid="sm" className="app-simulacion main-container">
      <Container>
        <h1>Herramienta de contraste de color</h1>
        <Row className="mt-3">
          <Col md="6">
            <div className="color-picker">
              <div>
                <Form.Label htmlFor="textColorPicker">Text color</Form.Label>
                <InputGroup size="lg">
                  <Form.Control
                    type="color"
                    id="textColorPicker"
                    title="Choose your color"
                    onChange={handleTextColorChange}
                    size="lg"
                    value={textColor}
                  />
                  <Form.Control
                    id="textColorPicker"
                    aria-label="First name"
                    onChange={handleTextColorChange}
                    value={textColor}
                    className="w-50"
                  />
                </InputGroup>
              </div>
              <button onClick={handleSwapColors}>
                <i className="bi bi-arrow-left-right"></i>
              </button>
              <div>
                <Form.Label htmlFor="bgColorPicker">
                  Background color
                </Form.Label>
                <InputGroup size="lg">
                  <Form.Control
                    type="color"
                    id="bgColorPicker"
                    title="Choose your color"
                    onChange={handleBgColorChange}
                    size="lg"
                    value={bgColor}
                  />
                  <Form.Control
                    id="bgColorPicker"
                    aria-label="First name"
                    onChange={handleBgColorChange}
                    value={bgColor}
                    className="w-50"
                  />
                </InputGroup>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="c-ratio">
              <h2>Ratio de contraste</h2>
              <div>
                <span>
                  {ratio}
                  <span className="unit">: 1</span>
                </span>
                <span className={`total ${ratio ? "bg-success" : "bg-danger"}`}>
                  Good
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ order: "first", span: 6 }}
            xs={{ order: "last", span: 12 }}
          >
            <Container className="p-3">
              <p>
                Contrast ratios can range from 1 to 21{" "}
                <span className="space-nowrap">
                  (commonly written 1:1 to 21:1).
                </span>
              </p>
              <ul>
                <li>
                  If both are the exact same color, the contrast ratio will be
                  1.
                </li>
                <li>The highest contrast is between white and black.</li>
                <li>
                  Exact opposites in the color wheel (complementary colors) will
                  have high values too.
                </li>
              </ul>
            </Container>
          </Col>
          <Col
            md={{ order: "last", span: 6 }}
            xs={{ order: "first", span: 12 }}
          >
            <div className="results">
              <LevelBox
                result={level.AAsmall}
                level="AA"
                info="small text"
                tooltip="<18pt or >=14pt bold"
              />
              <LevelBox
                result={level.AAAsmall}
                level="AAA"
                info="small text"
                tooltip="<18pt or >=14pt bold"
              />
              <LevelBox
                result={level.AAlarge}
                level="AA"
                info="large text"
                tooltip=">=18pt"
              />
              <LevelBox
                result={level.AAAlarge}
                level="AAA"
                info="large text"
                tooltip=">=18pt"
              />
            </div>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

const LevelBox = ({ result, level, info, tooltip }) => {
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 200, hide: 400 }}
      overlay={<Tooltip>{tooltip}</Tooltip>}
    >
      <div className="box">
        <div className={result ? "bg-success" : "bg-danger"}>
          {result ? (
            <i className="bi bi-check-lg"></i>
          ) : (
            <i className="bi bi-x-lg"></i>
          )}
          <div className="info">
            <p>{level}</p>
            <span>{info}</span>
          </div>
        </div>
      </div>
    </OverlayTrigger>
  );
};
