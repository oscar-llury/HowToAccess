import React from "react";
import { Col, Row, Container, Accordion } from "react-bootstrap";

import GoBack from "components/GoBack";
import BreadcrumbCustom from "components/Breadcrumb";
import Image from "components/Image";

//data
import Data from "data/Data";

export default function Pauta({ crumbs, slug, pages }) {
  //search in Data the actual page info
  const guidelines = pages.reduce((o, key) => ({ ...o, [key]: Data[key] }), {})[slug.replaceAll("-", "_")];
  const criteria = guidelines.criteria;
  const guidelines_index = guidelines.index.replace(/[^0-9 .]/g, "");

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
      <GoBack />
      <article className="criterio">
        <header className="d-flex flex-column-reverse">
          <h1>
            <span className="index fs-4">{guidelines.index} </span>
            <br />
            {guidelines.name}
          </h1>
          <h2 className="fs-4 fw-light">{guidelines.principle}</h2>
        </header>
        <Container className="mt-3 mt-lg-0 p-0">
          <Row className="align-items-center">
            <Col xl={guidelines.img ? "7" : "12"} lg={guidelines.img ? "8" : "12"} md="12">
              <p className="mb-3 objective">
                <strong>{guidelines.objective}</strong>
              </p>
              <p className="mb-3">{guidelines.description}</p>
            </Col>
            {guidelines.img ? (
              <Col xl="5" lg="4" md="12">
                <figure>
                  <Image src={guidelines.img} alt={guidelines.caption} className="w-100" />
                  <figcaption>{guidelines.caption}</figcaption>
                </figure>
              </Col>
            ) : (
              ""
            )}
          </Row>
          <Row className="criterios-list">
            <Col lg="3" key={1}>
              <div className="pauta mx-0 p-2">
                <p>Índice de Criterios</p>
                <ol start="2" className="p-0 m-0 index-list">
                  {criteria.map((criteria, indexP) => (
                    <li key={indexP}>
                      <div className="number">
                        {guidelines_index}.{indexP + 1}
                      </div>
                      {Data[criteria.key].name}
                    </li>
                  ))}
                </ol>
              </div>
            </Col>
            <Col lg="9">
              {criteria.map((criteria, indexP) => (
                <CriteriaBox criteria={Data[criteria.key]} index={indexP} key={indexP} />
              ))}
            </Col>
          </Row>
        </Container>
      </article>
    </Container>
  );
}

const CriteriaBox = ({ criteria }) => {
  return (
    <article className="pauta mx-0 p-0 border-0" id={criteria.key.toLowerCase().replace(/\.| /g, "_")}>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header as="div">
            <header className="d-flex flex-column flex-md-row align-items-md-end justify-content-between w-100 me-4">
              <h2 className="m-0">
                <span className="index fs-4">{criteria.key} </span>
                <br />
                {criteria.name}
              </h2>
              <p className="fs-4 fw-semibold m-0">{criteria.level}</p>
            </header>
          </Accordion.Header>
          <Accordion.Body className="p-4">
            <Row className="m-0">
              <Col lg={criteria.img ? "8" : "12"} md="12" className="p-0">
                <div dangerouslySetInnerHTML={{ __html: criteria.description }}></div>
              </Col>
              {criteria.img ? (
                <Col lg="4" md="12" className="text-center p-0">
                  <figure>
                    <Image src={criteria.img} alt={criteria.caption} className="w-100" />
                    <figcaption>{criteria.caption}</figcaption>
                  </figure>
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </article>
  );
};
