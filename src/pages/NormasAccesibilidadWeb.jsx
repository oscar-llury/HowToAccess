import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Tooltip,
  Tab,
  Tabs,
} from "react-bootstrap";
//import Highlight, { defaultProps } from "prism-react-renderer";
//import theme from "prism-react-renderer/themes/vsLight";

import logo_wcag from "../img/wcag-hta-logo.svg";
import slide1 from "../img/main-normas-accesibilidad.png";
import perceivable from "../img/perceivable.png";
import operable from "../img/operable.png";
import understandable from "../img/understandable.png";
import robust from "../img/robust.png";

export default function NormasAccesibilidadWeb() {
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
        <Row className="section-1">
          <div className="bg"></div>
          <Col
            xl="4"
            lg="3"
            md={{ order: "first", span: 4 }}
            xs={{ order: "last", span: 8 }}
            className="col-sello"
          >
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  [WAI Accessibility Guidelines] that are [W3C Recommendations]
                  are [Web Standards]
                </Tooltip>
              }
            >
              <img
                alt="Web Content Accessibility Guidelines (WCAG)"
                src={logo_wcag}
              />
            </OverlayTrigger>
          </Col>
          <Col
            xl="8"
            lg="9"
            md={{ order: "last", span: 8 }}
            xs={{ order: "first", span: 12 }}
            className="col-info"
          >
            <h2>
              Estándares de <br /> accesibilidad web
            </h2>
            <p>
              <strong>W3C</strong> es un consorcio internacional que desarrolla
              los W3C Recommendations, estándares internacionales para el World
              Wide Web.
            </p>
            <p>
              <strong>Web Accessibility Initiative (WAI)</strong> es un grupo de
              trabajo del W3C destinado a ayudar a comprender e implementar la
              accesibilidad web.
            </p>
            <p>
              <strong>Web Content Accessibility Guidelines (WCAG)</strong> son
              las directrices de accesibilidad al contenido web, publicadas por
              WAI, y que pertenecen a los estándares W3C.
            </p>

            <p>
              Las WCAG se dividen en cuatro Principios de accesibilidad y trece
              Pautas, agrupando los distintos Criterios de conformidad.
            </p>
            <p>
              El grado de accesibilidad WCAG de una página web se mide en
              Criterios de conformidad verificables, que se agrupan en tres
              niveles: A, AA, y AAA.
            </p>
            <p>
              La última versión es WCAG 2.1 publicada el 5 de junio de 2018.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 section-2">
          <h2>Los 4 Principios de la Accesibilidad</h2>
          <Tabs
            defaultActiveKey="perceivable"
            id="uncontrolled-tab-example"
            className="justify-content-around tablist p-0"
          >
            <Tab eventKey="perceivable" title="Perceptible">
              <section>
                <Row>
                  <Col
                    xl="7"
                    lg="7"
                    md={{ order: "first", span: 7 }}
                    xs={{ order: "last", span: 12 }}
                  >
                    <img src={perceivable} alt="" className="w-100"></img>
                  </Col>
                  <Col
                    xl="5"
                    lg="5"
                    md={{ order: "last", span: 5 }}
                    xs={{ order: "first", span: 12 }}
                  >
                    <h3>Perceptible</h3>
                    <p>
                      La información y los componentes de la interfaz de usuario
                      deben ser presentados al usuario de tal forma que sean
                      perceptibles.
                    </p>
                    <p>
                      El objetivo es ofrecer diversas formas de sentir, ver y
                      escuchar el contenido web, como el ajuste del tamaño de
                      letra, la visualización de subtítulos en un vídeo, o la
                      escucha del texto alternativo de una imagen en un teléfono
                      inteligente.
                    </p>
                    <p>
                      Un contenido perceptible hará posible que todos los
                      usuarios vean y escuchen la informarción.
                    </p>
                  </Col>
                </Row>
              </section>
            </Tab>
            <Tab eventKey="operable" title="Operable">
              <section>
                <Row>
                  <Col
                    xl="7"
                    lg="7"
                    md={{ order: "first", span: 7 }}
                    xs={{ order: "last", span: 12 }}
                  >
                    <img src={operable} alt="" className="w-100"></img>
                  </Col>
                  <Col
                    xl="5"
                    lg="5"
                    md={{ order: "last", span: 5 }}
                    xs={{ order: "first", span: 12 }}
                  >
                    <h3>Operable</h3>
                    <p>
                      Los componentes de la interfaz y navegación web deben ser
                      operables con variedad de herramientas.
                    </p>
                    <p>
                      El objetivo es ofrecer diversas formas de navegación en la
                      página web. Personas con discapacidades físicas o visuales
                      utilizan herramientas de lectura de texto y navegación que
                      necesitan de cierta información en los elementos html para
                      funcionar correctamente.
                    </p>
                    <p>
                      Un contenido operable ayudará a todos los usuarios a
                      navegar por la información de forma independiente,
                      indistintamente de la herramienta usada.
                    </p>
                  </Col>
                </Row>
              </section>
            </Tab>
            <Tab eventKey="understandable" title="Entendible">
              <section>
                <Row>
                  <Col
                    xl="7"
                    lg="7"
                    md={{ order: "first", span: 7 }}
                    xs={{ order: "last", span: 12 }}
                  >
                    <img src={understandable} alt="" className="w-100"></img>
                  </Col>
                  <Col
                    xl="5"
                    lg="5"
                    md={{ order: "last", span: 5 }}
                    xs={{ order: "first", span: 12 }}
                  >
                    <h3>Entendible</h3>
                    <p>
                      La información y la operación de la interfaz de usuario
                      deben ser entendibles.
                    </p>
                    <p>
                      El objetivo es representar, transmitir y traducir la
                      información y funcionalidad web de distintas formas, de
                      manera que sea más intuitivo, consistente y sencillo; como
                      la traducción de idiomas o los audiolibros en los
                      dispositivos móviles.
                    </p>
                    <p>
                      Un lenguaje claro y conciso facilitará la comprensión por
                      parte de los usuarios en todos los dispositivos.
                    </p>
                  </Col>
                </Row>
              </section>
            </Tab>
            <Tab eventKey="robust" title="Robusto">
              <section>
                <Row>
                  <Col
                    xl="7"
                    lg="7"
                    md={{ order: "first", span: 7 }}
                    xs={{ order: "last", span: 12 }}
                  >
                    <img src={robust} alt="" className="w-100"></img>
                  </Col>
                  <Col
                    xl="5"
                    lg="5"
                    md={{ order: "last", span: 5 }}
                    xs={{ order: "first", span: 12 }}
                  >
                    <h3>Robusto</h3>
                    <p>
                      El contenido web debe debe funcionar lo suficientemente
                      bien en todas las plataformas, navegadores y dispositivos
                      para que sea independiente a la tecnología de uso que el
                      usuario elija.
                    </p>
                    <p>
                      El ojetivo es proporcionar metadatos descriptivos y
                      contenidos accesibles y usables para que todos usuarios y
                      tecnologías de asistencia puedan comprenderlos.
                    </p>
                    <p>
                      Un contenido robusto se adaptará a las necesidades y
                      preferencias de los usuarios sin importar desde dónde
                      accedan.
                    </p>
                  </Col>
                </Row>
              </section>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </Container>
  );
}
