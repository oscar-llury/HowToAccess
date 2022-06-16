import React from "react";
import { Col, Row, Container, Button, Accordion } from "react-bootstrap";
import { useLocation } from "react-router";
import BreadcrumbCustom from "components/Breadcrumb";

//data
import perceptible_json from "data/Perceptible.json";
import operable_json from "data/Operable.json";
import entendible_json from "data/Entendible.json";
import robusto_json from "data/Robusto.json";

import Image from "components/Image";

export default function Principle({ crumbs }) {
  let location = useLocation();
  const paths = location.pathname.split("/");
  const slug = paths[paths.length - 1];

  const principle = {
    perceptible: perceptible_json,
    operable: operable_json,
    entendible: entendible_json,
    robusto: robusto_json,
  }[slug];

  const pautas = principle.guidelines;

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
      <Container className="principio">
        <Row className="align-items-start">
          <Col
            xl={principle.img ? "8" : "12"}
            lg={principle.img ? "8" : "12"}
            md="12"
          >
            <span className="index">{principle.key}</span>
            <h1>{principle.name}</h1>
            <p>{principle.description}</p>
          </Col>
          {principle.img ? (
            <Col xl="4" lg="6" md="12">
              <Image src={principle.img} alt="" className="w-100" />
            </Col>
          ) : (
            ""
          )}
        </Row>
        <Row>
          <Col dangerouslySetInnerHTML={{ __html: principle.text }}></Col>
        </Row>
      </Container>
      {pautas.map((pauta, indexP) => (
        <Container
          key={indexP}
          className="pauta"
          id={pauta.key.toLowerCase().replace(/\.| /g, "_")}
        >
          <Row>
            <span className="index">{pauta.key}</span>
            <h2>{pauta.name}</h2>
            <Col lg={pauta.img ? "8" : "12"} md="12">
              <p>{pauta.description}</p>
              <Button
                as="a"
                href={`/normas-de-accesibilidad-web/${principle.name
                  .toLowerCase()
                  .replace(/ /g, "-")}/${pauta.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                Ampliar información
              </Button>
            </Col>
            {pauta.img ? (
              <Col lg="4" md="12">
                <Image src={pauta.img} alt="" className="w-100" />
              </Col>
            ) : (
              ""
            )}
            <Col lg="8" md="12">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {pauta.key} - Criterios de conformidad
                  </Accordion.Header>
                  <Accordion.Body>
                    <ol>
                      {pauta.criteria.map((criteria, indexC) => (
                        <li key={indexC}>
                          {criteria.name} <span>({criteria.level})</span>{" "}
                          {criteria.comment}
                        </li>
                      ))}
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      ))}
      <Container className="p-0">
        <p>*{principle.date}</p>
      </Container>
    </Container>
  );
}
