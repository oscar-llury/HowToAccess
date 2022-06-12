import React, { useState } from "react";
import { Col, Row, Container, Button, Accordion } from "react-bootstrap";
import { useLocation } from "react-router";
import BreadcrumbCustom from "components/Breadcrumb";

//data
import perceptible_json from "data/Perceptible.json";
import operable_json from "data/Operable.json";
import entendible_json from "data/Entendible.json";
import robusto_json from "data/Robusto.json";

//media
import perceptible_img from "img/perceivable.png";
import operable_img from "img/operable.png";
import entendible_img from "img/understandable.png";
import robusto_img from "img/robust.png";

/* eslint-disable import/no-webpack-loader-syntax */
//import perceptible from "!babel-loader!mdx-loader!./../data/perceptible.mdx";

export default function Principle() {
  let location = useLocation();
  const paths = location.pathname.split("/");
  const slug = paths[paths.length - 1];

  /*
  function importAll(r) {
    r.keys()
      .map(r)
      .forEach((element) => {
        console.log(element);
        //const { data, content } = matter(element);
      });
  }
  const images = importAll(require.context("./../data/", false, /\.(mdx)$/));
*/

  const principle = {
    perceptible: perceptible_json,
    operable: operable_json,
    entendible: entendible_json,
    robusto: robusto_json,
  }[slug];

  const img = {
    perceptible: perceptible_img,
    operable: operable_img,
    entendible: entendible_img,
    robusto: robusto_img,
  }[slug];

  const pautas = principle.guidelines;

  const [crumbs, setCrumbs] = useState([
    {
      title: paths[1].replaceAll("-", " "),
      link: "/" + paths[1],
    },
    { title: slug, link: location.pathname },
  ]);

  //const imgUrl = require(`../${principle.img}`);
  //console.log(imgUrl);

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
      <Container className="principio">
        <Row className="align-items-center">
          <span className="index">{principle.key}</span>
          <h1>{principle.name}</h1>
          <Col xl="8" lg="6" md="12">
            <p>{principle.description}</p>
          </Col>
          <Col xl="4" lg="6" md="12">
            <img src={img} alt="" className="w-100" />
          </Col>
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
            <Col lg="8" md="12">
              <p>{pauta.description}</p>
              <Button as="a" href="#">
                Ampliar información
              </Button>
            </Col>
            <Col lg="4" md="12">
              <img
                src={require("img/operable.png").default}
                alt=""
                className="w-100"
              />
            </Col>
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
