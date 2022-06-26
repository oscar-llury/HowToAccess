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
      <article>
        <header>
          <span className="index">{principle.key}</span>
          <h1>{principle.name}</h1>
        </header>
        <Container className="principio">
          <Row className="align-items-center">
            <Col
              xl={principle.img ? "7" : "12"}
              lg={principle.img ? "8" : "12"}
              md="12"
            >
              <p className="mb-3 objective">
                <strong>{principle.objective}</strong>
              </p>
              <p className="mb-3">{principle.description}</p>
            </Col>
            {principle.img ? (
              <Col xl="5" lg="4" md="12">
                <figure>
                  <Image
                    src={principle.img}
                    alt={principle.caption}
                    className="w-100"
                  />
                  <figcaption>{principle.caption}</figcaption>
                </figure>
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
          <article
            key={indexP}
            className="pauta"
            id={pauta.key.toLowerCase().replace(/\.| /g, "_")}
          >
            <header>
              <span className="index">{pauta.key}</span>
              <h2>{pauta.name}</h2>
            </header>
            <Row className="align-items-center">
              <Col lg={pauta.img ? "8" : "12"} md="12">
                <div
                  dangerouslySetInnerHTML={{ __html: pauta.description }}
                ></div>
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
                <Col lg="4" md="12" className="text-center">
                  <figure>
                    <Image
                      src={pauta.img}
                      alt={pauta.caption}
                      className="w-100"
                    />
                    <figcaption>{pauta.caption}</figcaption>
                  </figure>
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
          </article>
        ))}
        <Container className="p-0">
          <time dateTime="2014-03-28T20:00-04:00">*{principle.date}</time>
        </Container>
      </article>
    </Container>
  );
}
