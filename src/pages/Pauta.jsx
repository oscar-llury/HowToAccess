import React, { useState, useEffect } from "react";
import { Col, Row, Container, Accordion, useAccordionButton } from "react-bootstrap";

import BreadcrumbCustom from "components/Breadcrumb";
import Image from "components/Image";

//data
import Data from "data/Data";
import CodeBlock from "components/CodeBlock";

export default function Pauta({ crumbs, slug, pages }) {
  //search in Data the actual page info
  const guidelines = pages.reduce((o, key) => ({ ...o, [key]: Data[key] }), {})[slug.replaceAll("-", "_")];
  const criteria = guidelines.criteria;
  const guidelines_index = guidelines.index.replace(/[^0-9 .]/g, "");
  const [criteriaOpen, setCriteriaOpen] = useState(document.location.hash.replace("#", ""));

  useEffect(() => {
    const setCriteriaState = () => {
      let butAccHeader = document.querySelector(`${decodeURIComponent(window.location.hash)} .accordion-header button`);
      butAccHeader.click();
    };

    window.addEventListener("hashchange", setCriteriaState);
    return () => {
      window.removeEventListener("hashchange", setCriteriaState);
    };
  }, []);

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
      <article className="criterio">
        <header className="d-flex flex-column-reverse">
          <h1 className="fw-extrabold">
            <span className="index fs-3">{guidelines.index} </span>
            <br />
            {guidelines.name}
          </h1>
          <h2 className="fs-3 fw-light">{guidelines.principle}</h2>
        </header>
        <Container className="mt-3 mt-lg-0 p-0">
          <Row className="align-items-center">
            <Col xl={guidelines.img ? "7" : "12"} lg={guidelines.img ? "8" : "12"} md="12">
              <p className="mb-3 objective">
                <strong>{guidelines.objective}</strong>
              </p>
              <div dangerouslySetInnerHTML={{ __html: guidelines.description }} className="mb-3"></div>
            </Col>
            {guidelines.img ? (
              <Col xl="5" lg="4" md="12">
                <figure className="text-center">
                  <Image src={guidelines.img} alt={guidelines.caption} className="mw-100" />
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
                            //setCriteriaOpen(Data[criteria.key].slug);
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
                <CriteriaBox criteria={Data[criteria.key]} key={indexP} criteriaOpen={criteriaOpen} setCriteriaOpen={setCriteriaOpen} />
              ))}
            </Col>
          </Row>
          <Row>
            <Col>
              {guidelines.examples ? <h2 className="fw-extrabold line-after mt-5">Ejemplo{guidelines.examples.length > 1 ? "s" : ""}</h2> : ""}
              {guidelines.examples
                ? guidelines.examples.map((content, indexC) => (
                    <div key={indexC}>
                      <h3 className="fw-bold fs-6">{content.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: content.description }}></div>
                    </div>
                  ))
                : ""}

              {guidelines.implementation ? <h2 className="fw-extrabold line-after mt-5">Tip{guidelines.implementation.length > 1 ? "s" : ""} de implementación</h2> : ""}
              {guidelines.implementation
                ? guidelines.implementation.map((content, indexC) => (
                    <div key={indexC}>
                      {content.title ? <h3 className="fw-bold fs-6">{content.title}</h3> : ""}
                      {content.description ? <div dangerouslySetInnerHTML={{ __html: content.description }}></div> : ""}
                      {content.code ? <CodeBlock code={content.code} language="html" className="px-5" /> : ""}
                    </div>
                  ))
                : ""}
            </Col>
          </Row>
        </Container>
      </article>
    </Container>
  );
}

const CriteriaBox = ({ criteria, criteriaOpen, setCriteriaOpen }) => {
  const headerOnClick = useAccordionButton("", () => {
    if (criteriaOpen === 0 || criteriaOpen != criteria.slug) {
      setCriteriaOpen(criteria.slug);
    } else {
      setCriteriaOpen(0);
    }

    //document.location.hash = criteria.slug;
  });
  return (
    <article className="pt-3 mb-3" id={criteria.slug}>
      <div className="pauta p-0 border-0 m-0">
        <Accordion flush activeKey={criteriaOpen}>
          <Accordion.Item eventKey={criteria.slug}>
            <Accordion.Header as="div" onClick={headerOnClick}>
              <header className="d-flex flex-column flex-md-row align-items-md-end justify-content-between w-100 me-4">
                <h2 className="m-0 fw-extrabold">
                  <span className="index fs-4">{criteria.key} </span>
                  <br />
                  {criteria.name}
                </h2>
                <p className="fs-4 fw-semibold m-0 space-nowrap">{criteria.level}</p>
              </header>
            </Accordion.Header>
            <Accordion.Body className="p-4" id={`item-${criteria.slug}`}>
              {criteria.comment ? <p>{criteria.comment}</p> : ""}

              {criteria.description ? <div dangerouslySetInnerHTML={{ __html: criteria.description }}></div> : ""}

              {criteria.img ? (
                <div className="text-center p-0">
                  <figure>
                    <Image src={criteria.img} alt={criteria.caption} className="mw-75 w-auto" />
                    <figcaption>{criteria.caption}</figcaption>
                  </figure>
                </div>
              ) : (
                ""
              )}

              {criteria.examples ? <h3 className="fw-extrabold line-after mt-3 fs-4">Ejemplo{criteria.examples.length > 1 ? "s" : ""}</h3> : ""}
              {criteria.examples
                ? criteria.examples.map((content, indexC) => (
                    <div key={indexC}>
                      <h4 className="fw-bold fs-6">{content.title}</h4>
                      <div dangerouslySetInnerHTML={{ __html: content.description }}></div>
                    </div>
                  ))
                : ""}

              {criteria.implementation ? <h3 className="fw-extrabold line-after mt-3 fs-4">Tip{criteria.implementation.length > 1 ? "s" : ""} de implementación</h3> : ""}
              {criteria.implementation
                ? criteria.implementation.map((content, indexC) => (
                    <div key={indexC}>
                      {content.title ? <h4 className="fw-bold fs-6">{content.title}</h4> : ""}
                      {content.description ? <div dangerouslySetInnerHTML={{ __html: content.description }}></div> : ""}
                      {content.code ? <CodeBlock code={content.code} language="html" /> : ""}
                    </div>
                  ))
                : ""}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </article>
  );
};
