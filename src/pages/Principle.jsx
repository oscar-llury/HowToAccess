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
import operable_img from "img/operable.png";

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

  const pautas = {
    perceptible: perceptible_json,
    operable: operable_json,
    entendible: entendible_json,
    robusto: robusto_json,
  }[slug];

  const [crumbs, setCrumbs] = useState([
    {
      title: paths[1].replaceAll("-", " "),
      link: "/" + paths[1],
    },
    { title: slug },
  ]);

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
      <Container fluid="sm" className="principio">
        <Row className="align-items-center">
          <span className="index">Principio 1</span>
          <h1>Perceptible</h1>
          <Col sm="8">
            <p>
              La información y los componentes de la interfaz de usuario deben
              ser presentados al usuario de tal forma que sean perceptibles. El
              objetivo es ofrecer diversas formas de sentir, ver y escuchar el
              contenido web, como el ajuste del tamaño de letra, la
              visualización de subtítulos en un vídeo, o la escucha del texto
              alternativo de una imagen en un teléfono inteligente. Un contenido
              perceptible hará posible que todos los usuarios vean y escuchen la
              informarción.
            </p>
          </Col>
          <Col sm="4">
            <img src={operable_img} alt="" className="w-100" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-2">
              El principio Perceptible está compuesto por las pautas:
            </p>
            <ul>
              <li>
                Proporcione <strong>alternativas textuales</strong> para
                contenido no textual.
              </li>
              <li>
                Proporcione <strong>subtítulos y otras alternativas</strong>{" "}
                para multimedia.
              </li>
              <li>
                Cree contenido que se pueda{" "}
                <strong>presentar de diferentes formas</strong>, incluyendo a
                las tecnologías de apoyo, sin perder información.
              </li>
              <li>
                Facilite que los usuarios puedan{" "}
                <strong>ver y oir el contenido</strong>.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {pautas.map((pauta, indexP) => (
        <Container
          key={indexP}
          className="pauta"
          id={`pauta_` + pauta.key.replace(".", "_")}
        >
          <Row>
            <span className="index">Pauta {pauta.key}</span>
            <h2>{pauta.name}</h2>
            <Col sm="8">
              <p>{pauta.description}</p>
              <Button as="a" href="#">
                Ampliar información
              </Button>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Pauta {pauta.key} - Criterios de conformidad
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
            <Col sm="4">
              <img src={operable_img} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      ))}
    </Container>
  );
}
