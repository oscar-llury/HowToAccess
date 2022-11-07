import React, { useState } from "react";
import { Col, Row, Container, Accordion } from "react-bootstrap";
import BreadcrumbCustom from "components/Breadcrumb";
import Image from "components/Image";

//data
import Data from "data/Data";

export default function Pauta({ crumbs, slug, pages }) {
  //search in Data the actual page info
  const guidelines = pages.reduce((o, key) => ({ ...o, [key]: Data[key] }), {})[slug.replaceAll("-", "_")];
  const criteria = guidelines.criteria;
  const guidelines_index = guidelines.index.replace(/[^0-9 .]/g, "");
  const [criteriaOpen, setCriteriaOpen] = useState(document.location.hash.replace("#", ""));

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
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
          <Row className="criterios-list mt-4">
            <Col lg="3" key={1}>
              <div className="position-sticky top-0 pt-3">
                <div className="pauta m-0 p-2">
                  <p>Índice de Criterios</p>
                  <ol start="2" className="p-0 m-0 index-list">
                    {criteria.map((criteria, indexP) => (
                      <li key={indexP}>
                        <a
                          onClick={() => {
                            setCriteriaOpen(Data[criteria.key].slug);
                            document.location.hash = Data[criteria.key].slug;
                          }}
                          className="text-decoration-none cursor-pointer"
                        >
                          <div className="number">
                            {guidelines_index}.{indexP + 1}
                          </div>
                          {Data[criteria.key].name}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Col>
            <Col lg="9" className="">
              {criteria.map((criteria, indexP) => (
                <CriteriaBox criteria={Data[criteria.key]} index={indexP} key={indexP} criteriaOpen={criteriaOpen} />
              ))}
            </Col>
          </Row>
        </Container>
      </article>
    </Container>
  );
}

const CriteriaBox = ({ criteria, criteriaOpen }) => {
  const open = criteriaOpen === criteria.slug ? "0" : "";
  return (
    <article className="pt-3 mb-3" id={criteria.slug}>
      <div className="pauta p-0 border-0 m-0">
        <Accordion flush activeKey={open}>
          <Accordion.Item eventKey="0">
            <Accordion.Header as="div">
              <header className="d-flex flex-column flex-md-row align-items-md-end justify-content-between w-100 me-4">
                <h2 className="m-0">
                  <span className="index fs-4">{criteria.key} </span>
                  <br />
                  {criteria.name}
                </h2>
                <p className="fs-4 fw-semibold m-0 space-nowrap">{criteria.level}</p>
              </header>
            </Accordion.Header>
            <Accordion.Body className="p-4">
              <div dangerouslySetInnerHTML={{ __html: criteria.description }}></div>
              {criteria.img ? (
                <div className="text-center p-0">
                  <figure>
                    <Image src={criteria.img} alt={criteria.caption} className="w-100" />
                    <figcaption>{criteria.caption}</figcaption>
                  </figure>
                </div>
              ) : (
                ""
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </article>
  );
};
