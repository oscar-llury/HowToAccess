import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Tooltip,
  Form,
  InputGroup,
} from "react-bootstrap";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsLight";

import logo_wcag from "../img/wcag-hta-logo.svg";
import slide1 from "../img/main-normas-accesibilidad.png";

export default function NormasAccesibilidadWeb() {
  const exampleCode = `
  principios.lenght = 4
  pautas.lenght = 13
  criterios.lenght = 50
  `;

  const exampleCode2 = `
  <principios>
    <pautas>
      <criterios_de_conformidad />
    </pautas>
  </principios>
    `;

  return (
    <Container fluid className="app-normas-accesibilidad p-0">
      <Container fluid className="px-2 main-image">
        <h1>
          W3C
          <br /> & <br />
          WCAG
        </h1>
        <img className="w-100" src={slide1} alt="" />
      </Container>
      <Container fluid="sm" className="main-container">
        <div className="bg"></div>
        <Row className="section-1">
          <Col
            lg="3"
            md={{ order: "first", span: 4 }}
            xs={{ order: "last", span: 8 }}
            className="col-sello"
          >
            <img alt="" src={logo_wcag} className="" />
          </Col>
          <Col
            lg="9"
            md={{ order: "last", span: 8 }}
            xs={{ order: "first", span: 12 }}
            className="col-info"
          >
            <h2>
              Estándares de <br /> accesibilidad web
            </h2>
            <p>
              <strong>W3C</strong> es un consorcio internacional que recopila
              estándares para el World Wide Web.
            </p>
            <p>
              <strong>Web Accessibility Initiative (WAI)</strong> es un grupo de
              trabajo del W3C destinado a la rama de la accesibilidad web.
            </p>
            <p>
              <strong>Web Content Accessibility Guidelines (WCAG)</strong> son
              las guías de accesibilidad al contenido web publicadas por WAI y
              que pertenecen a los estándares W3C.
            </p>
            <p>
              El grado de accesibilidad WCAG de una página web se mide en tres
              niveles: A, AA, y AAA.
            </p>
            <p>
              Las WCAG se agrupan en Principios de accesibilidad, Pautas y
              Criterios de conformidad. La última versión es WCAG 2.1 publicada
              el 5 de junio de 2018.
            </p>
          </Col>
        </Row>
        <Row className="d-none">
          <Col>
            <p>
              Las WCAG se agrupan en Principios de accesibilidad, Pautas y
              Criterios de conformidad. La última versión es WCAG 2.1 publicada
              el 5 de junio de 2018.
            </p>
          </Col>
          <Col>
            <Highlight
              {...defaultProps}
              theme={theme}
              code={exampleCode2}
              language="html"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
