import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Button, Container, Row, Col, OverlayTrigger, Tooltip, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo_wcag from "../img/wcag-hta-logo.svg";
import slide1 from "../img/Accessibility.png";
import perceivable from "../img/principles/perceivable.png";
import operable from "../img/principles/operable.png";
import understandable from "../img/principles/understandable.png";
import robust from "../img/principles/robust.png";

import eye_perceivable from "../img/eye_perceivable.png";
import hand_operable from "../img/hand_operable.png";
import head_understandable from "../img/head_understandable.png";
import like_robust from "../img/like_robust.png";

export default function NormasAccesibilidadWeb() {
  const navigate = useNavigate();

  const [tab, setTab] = useState("perceivable");
  const tabs = useMemo(() => {
    return ["perceivable", "operable", "understandable", "robust"];
  }, []);

  //const tabs = ["perceivable", "operable", "understandable", "robust"];
  const [heightTabsNav, setHeightTabNav] = useState(200);

  const navPrinciple = useCallback(
    (url) => {
      navigate(`#${url}`);
    },
    [navigate]
  );

  useEffect(() => {
    const whereToGo = document.location.hash.replace("#", "");
    if (whereToGo && tabs.includes(whereToGo)) {
      navPrinciple(whereToGo);
      setTab(whereToGo);
    }
    setHeightTabNav(document.querySelector(".container-tabs .content").offsetHeight);
  }, [navPrinciple, tabs]);

  function prev(e) {
    e.preventDefault();
    let dest = tabs.indexOf(tab) - 1;
    if (dest < 0) {
      dest = tabs.length - 1;
    }

    dest = tabs[dest];
    navPrinciple(dest);
    setTab(dest);
  }
  function next(e) {
    e.preventDefault();
    let dest = tabs.indexOf(tab) + 1;
    if (dest > tabs.length - 1) {
      dest = 0;
    }

    dest = tabs[dest];
    navPrinciple(dest);
    setTab(dest);
  }

  return (
    <Container fluid className="app-normas-accesibilidad p-0">
      <header className="main-image min-vh-50 overflow-hidden position-relative d-flex align-items-center">
        <img src={slide1} alt="" className="position-absolute w-100" />
        <div className="foreground-layer position-absolute"></div>
        <Container className="m-0 text-container text-center text-white">
          <h1>W3C & WCAG</h1>
          <p>Descubre los estándares de la accesibilidad web.</p>
          <Button variant="primary" className="px-4 py-2 btn-principles" href="#principles">
            Comenzar
          </Button>
        </Container>
      </header>
      <Container fluid="sm" className="main-container mt-5">
        <Row className="section-1">
          <div className="bg"></div>
          <Col xl="4" lg="3" md={{ order: "first", span: 4 }} xs={{ order: "last", span: 8 }} className="col-sello">
            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">WAI Accessibility Guidelines that are W3C Recommendations are Web Standards</Tooltip>}>
              <img alt="Web Content Accessibility Guidelines (WCAG)" src={logo_wcag} />
            </OverlayTrigger>
          </Col>
          <Col xl="8" lg="9" md={{ order: "last", span: 8 }} xs={{ order: "first", span: 12 }} className="col-info">
            <h2>
              Estándares de <br /> accesibilidad web
            </h2>
            <p>
              <strong>W3C</strong> es un consorcio internacional que desarrolla los W3C Recommendations, estándares internacionales para el World Wide Web.
            </p>
            <p>
              <strong>Web Accessibility Initiative (WAI)</strong> es un grupo de trabajo del W3C destinado a ayudar a comprender e implementar la accesibilidad web.
            </p>
            <p>
              <strong>Web Content Accessibility Guidelines (WCAG)</strong> son las directrices de accesibilidad al contenido web, publicadas por WAI, y que pertenecen a los estándares W3C.
            </p>

            <p>Las WCAG se dividen en cuatro principios de accesibilidad y trece pautas, agrupando los distintos criterios de conformidad.</p>
            <p>El grado de accesibilidad WCAG de una página web se mide en criterios de conformidad verificables, que se agrupan en tres niveles: A, AA, y AAA.</p>
            <p>La última versión es WCAG 2.1 publicada el 5 de junio de 2018.</p>
          </Col>
        </Row>
        <Row className="mt-5 section-2" id="principles">
          <h2>Los 4 Principios de la Accesibilidad</h2>
          <p>POUR (Perceivable, Operable, Understandable, Robust) son los cuatro principios que describen la accesibilidad funcional.</p>

          <div className="grid-pour text-center">
            <div>
              <img src={eye_perceivable} alt="" />

              <img src={hand_operable} alt="" />

              <img src={head_understandable} alt="" />

              <img src={like_robust} alt="" />
            </div>
          </div>

          <div className="container-tabs">
            <button className="prev" tabIndex="0" onClick={prev} style={{ height: heightTabsNav }}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="next" tabIndex="0" onClick={next} style={{ height: heightTabsNav }}>
              <i className="bi bi-chevron-right"></i>
            </button>
            <div className="content">
              <Tabs
                activeKey={tab}
                onSelect={(k) => {
                  setTab(k);
                  navPrinciple(k);
                }}
                id="uncontrolled-tab-example"
                className="justify-content-around tablist p-0"
              >
                <Tab eventKey="perceivable" title="Perceptible">
                  <section>
                    <Row>
                      <Col xl="7" lg="7" md={{ order: "last", span: 12 }} xs={{ order: "last", span: 12 }}>
                        <img src={perceivable} alt="" className="w-100"></img>
                      </Col>
                      <Col xl="5" lg="5" md={{ order: "first", span: 12 }} xs={{ order: "first", span: 12 }}>
                        <h3>Perceptible</h3>
                        <p>La información y los componentes de la interfaz de usuario deben ser presentados al usuario de tal forma que sean perceptibles.</p>
                        <p>El objetivo es ofrecer diversas formas de sentir, ver y escuchar el contenido web, como el ajuste del tamaño de letra, la visualización de subtítulos en un vídeo, o la escucha del texto alternativo de una imagen en un teléfono inteligente.</p>
                        <p>Un contenido perceptible hará posible que todos los usuarios puedan recibir la información que proporciona la página web.</p>
                        <Button variant="outline-primary" className="w-auto" href="/normas-de-accesibilidad-web/perceptible">
                          Ver pautas <i className="bi bi-arrow-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </Tab>
                <Tab eventKey="operable" title="Operable">
                  <section>
                    <Row>
                      <Col xl="7" lg="7" md={{ order: "last", span: 12 }} xs={{ order: "last", span: 12 }}>
                        <img src={operable} alt="" className="w-100"></img>
                      </Col>
                      <Col xl="5" lg="5" md={{ order: "first", span: 12 }} xs={{ order: "first", span: 12 }}>
                        <h3>Operable</h3>
                        <p>Los componentes de la interfaz y navegación web deben ser operables con variedad de herramientas.</p>
                        <p>El objetivo es ofrecer diversas formas de navegación en la página web. Personas con discapacidades físicas o visuales utilizan herramientas de lectura de texto y navegación que necesitan de cierta información en los elementos html para funcionar correctamente.</p>
                        <p>Un contenido operable ayudará a todos los usuarios a navegar por la información de forma independiente, indistintamente de la herramienta usada.</p>
                        <Button variant="outline-primary" className="w-auto" href="/normas-de-accesibilidad-web/operable">
                          Ver pautas <i className="bi bi-arrow-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </Tab>
                <Tab eventKey="understandable" title="Entendible">
                  <section>
                    <Row>
                      <Col xl="7" lg="7" md={{ order: "last", span: 12 }} xs={{ order: "last", span: 12 }}>
                        <img src={understandable} alt="" className="w-100"></img>
                      </Col>
                      <Col xl="5" lg="5" md={{ order: "first", span: 12 }} xs={{ order: "first", span: 12 }}>
                        <h3>Entendible</h3>
                        <p>La información y la operación de la interfaz de usuario deben ser entendibles.</p>
                        <p>El objetivo es representar, transmitir y traducir la información y funcionalidad web de distintas formas, de manera que sea más intuitivo, consistente y sencillo; como la traducción de idiomas o los audiolibros en los dispositivos móviles.</p>
                        <p>Un lenguaje claro y conciso facilitará la comprensión por parte de los usuarios en todos los dispositivos.</p>
                        <Button variant="outline-primary" className="w-auto" href="/normas-de-accesibilidad-web/entendible">
                          Ver pautas <i className="bi bi-arrow-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </Tab>
                <Tab eventKey="robust" title="Robusto">
                  <section>
                    <Row>
                      <Col xl="7" lg="7" md={{ order: "last", span: 12 }} xs={{ order: "last", span: 12 }}>
                        <img src={robust} alt="" className="w-100"></img>
                      </Col>
                      <Col xl="5" lg="5" md={{ order: "first", span: 12 }} xs={{ order: "first", span: 12 }}>
                        <h3>Robusto</h3>
                        <p>El contenido web debe funcionar lo suficientemente bien en todas las plataformas, navegadores y dispositivos para que sea independiente a la tecnología de uso que el usuario elija.</p>
                        <p>El objetivo es proporcionar metadatos descriptivos y contenidos accesibles y usables para que todos usuarios y tecnologías de asistencia puedan comprenderlos.</p>
                        <p>Un contenido robusto se adaptará a las necesidades y preferencias de los usuarios sin importar desde dónde accedan.</p>
                        <Button variant="outline-primary" className="w-auto" href="/normas-de-accesibilidad-web/robusto">
                          Ver pautas <i className="bi bi-arrow-right"></i>
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </Tab>
              </Tabs>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
}
