import React from "react";
import { Col, Row, Container, Button, Accordion } from "react-bootstrap";
import BreadcrumbCustom from "components/Breadcrumb";
import GoBack from "components/GoBack";
import Image from "components/Image";

//data
import Data from "data/Data";

export default function Principle({ crumbs, slug, pages }) {
  let dateTime = 0;
  //search in Data the actual page info
  const principle = pages.reduce((o, key) => ({ ...o, [key]: Data[key] }), {})[slug.replaceAll("-", "_")];
  const dateString = principle.date;
  let date = new Date(dateString.split(":")[1]);
  date.setHours(12);
  dateTime = date.toISOString();

  const pautas = principle.guidelines;

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
      <GoBack />
      <article>
        <header>
          <h1>
            <span className="index">{principle.key} </span>
            <br />
            {principle.name}
          </h1>
        </header>
        <Container className="principio">
          <Row className="align-items-center">
            <Col xl={principle.img ? "7" : "12"} lg={principle.img ? "8" : "12"} md="12">
              <p className="mb-3 objective">
                <strong>{principle.objective}</strong>
              </p>
              <p className="mb-3">{principle.description}</p>
            </Col>
            {principle.img ? (
              <Col xl="5" lg="4" md="12">
                <figure>
                  <Image src={principle.img} alt={principle.caption} className="w-100" />
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
          <article key={indexP} className="pauta" id={pauta.key.toLowerCase().replace(/\.| /g, "_")}>
            <header>
              <h2>
                <span className="index">{pauta.key} </span>
                <br />
                {pauta.name}
              </h2>
            </header>
            <Row>
              <Col lg={pauta.img ? "8" : "12"} md="12" className="mt-3">
                <div dangerouslySetInnerHTML={{ __html: pauta.description }}></div>
                <Button variant="outline-primary" as="a" href={`/normas-de-accesibilidad-web/${principle.name.toLowerCase().replace(/ /g, "-")}/${pauta.name.toLowerCase().replace(/ /g, "-")}`}>
                  Ampliar información
                </Button>
              </Col>
              {pauta.img ? (
                <Col lg="4" md="12" className="text-center">
                  <figure>
                    <Image src={pauta.img} alt={pauta.caption} className="w-100" />
                    <figcaption>{pauta.caption}</figcaption>
                  </figure>
                </Col>
              ) : (
                ""
              )}
              <Col lg="8" md="12">
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header as="h3">{pauta.key} - Criterios de conformidad</Accordion.Header>
                    <Accordion.Body className="px-0">
                      <ol>
                        {pauta.criteria.map((criteria, indexC) => (
                          <li key={indexC}>
                            <h4 className="title">{criteria.name}</h4> <span>({criteria.level})</span> {criteria.comment}
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
          <time dateTime={dateTime}>*{principle.date}</time>
        </Container>
      </article>
    </Container>
  );
}
