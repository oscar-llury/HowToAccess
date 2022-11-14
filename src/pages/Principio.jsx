import React from "react";
import { Col, Row, Container, Button, Accordion } from "react-bootstrap";
import BreadcrumbCustom from "components/Breadcrumb";
import Image from "components/Image";

//data
import Data from "data/Data";

export default function Principle({ crumbs, slug, pages, windowWd }) {
  let dateTime = 0;
  //search in Data the actual page info
  const principle = pages.reduce((o, i) => ({ ...o, [i]: Data[i] }), {})[slug.replaceAll("-", "_")];
  /*const dateString = principle.date;
  let date = new Date(dateString.split(":")[1]);
  date.setHours(12);
  dateTime = date.toISOString();*/

  const pautas = principle.guidelines;

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
      <article>
        <header>
          <h1 className="fw-extrabold ">
            <span className="index fs-3">{principle.index} </span>
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
                <figure className="text-center">
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
          <article key={indexP} className="pauta" id={Data[pauta.key].slug}>
            <header>
              <h2 className="fw-extrabold">
                <span className="index fs-4">{Data[pauta.key].index} </span>
                <br />
                {Data[pauta.key].name}
              </h2>
            </header>

            <div className={windowWd >= 768 ? "clearfix" : "row"}>
              {Data[pauta.key].img ? (
                <figure className="text-center col-md-4 col-lg-6 col-xl-5 float-md-end ms-md-3">
                  <Image src={Data[pauta.key].img} alt={Data[pauta.key].caption} className="w-100 mb-3" />
                  <figcaption>{Data[pauta.key].caption}</figcaption>
                </figure>
              ) : (
                ""
              )}
              <p className="col-auto order-first">{Data[pauta.key].objective}</p>
              <div>
                <Button className={windowWd < 768 ? "w-100" : ""} variant="outline-primary" as="a" href={`./${slug}/${pauta.key.replace("_", "-")}`}>
                  Ampliar información
                </Button>
              </div>
              <Accordion flush className="d-grid">
                <Accordion.Item eventKey="0">
                  <Accordion.Header as="h3">{Data[pauta.key].index} - Criterios de conformidad</Accordion.Header>
                  <Accordion.Body className="px-0">
                    <ol>
                      {pauta.criteria.map((criteria, indexC) => (
                        <li key={indexC}>
                          <a href={`./${slug}/${pauta.key.replace("_", "-")}#${Data[criteria.key].slug}`} className="text-decoration-none">
                            <h4 className="title">{Data[criteria.key].name}</h4> <span>({Data[criteria.key].level})</span> {Data[criteria.key].comment}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </article>
        ))}
        <Container className="p-0">
          <time>*{principle.date}</time>
        </Container>
      </article>
    </Container>
  );
}
