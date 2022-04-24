import React, { useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Carrousel from "../components/Carrousel";
import Spacer from "../components/Spacer";

//images
import slide1 from "../img/home_slide1.png";
import slide2 from "../img/home_slide1.png";
import slide3 from "../img/home_slide1.png";
import barrera_accesibilidad from "../img/barrera_accesibilidad.png";
import que_es_accesibilidad from "../img/accesibilidad-bg.png";
import que_es_accesibilidad2 from "../img/accesibilidad-1.png";
import que_es_accesibilidad3 from "../img/accesibilidad-2.png";
import que_es_accesibilidad4 from "../img/accesibilidad-3.png";
import logo from "../img/logo.svg";

const Home = () => {
  const [imageAccHeight, setImageAccHeight] = useState(200);

  const slides = [
    {
      title: "How To Access",
      desc: "¡Hecho para ti desarrollador!",
      img: slide1,
      img_alt: "Cómo ser accesible en páginas web. Hecho para desarrolladores.",
    },
    {
      title: "¿Accesibilidad web?",
      desc: "Es un paso más que poner el atributo Alt en las imágenes",
      img: slide2,
      img_alt:
        "La accesibilidad es más que poner el atributo Alt en las imágenes",
    },
    {
      title: "Aprendizaje práctico",
      desc: "Principios, Pautas, Criterios, y mucho más...",
      img: slide3,
      img_alt:
        "Aprendizaje práctico: Principios, Pautas, Criterios, y mucho más...",
    },
  ];

  function onImgLoad({ target: img }) {
    setImageAccHeight(img.offsetHeight);
  }

  return (
    <Container fluid className="app-home p-0">
      <div className="bg-soft">
        <Carrousel slides={slides} />
        <Container fluid="sm" className="mt-4 text-black app-home-section1">
          <Row className="justify-content-center align-items-center m-auto">
            <Col lg="7" md="6" xs="12">
              <Container className="text-center mb-4">
                <h2>
                  Cómo ser accesible en <span>páginas web</span>
                </h2>
                <p>
                  La accesibilidad es más que poner el atributo Alt en las
                  imágenes
                </p>
                <Button variant="primary" className="w-auto" href="">
                  Ver más <i className="bi bi-arrow-right"></i>
                </Button>
              </Container>
            </Col>
            <Col lg="5" md="6" xs="12">
              <Container
                className="position-relative"
                style={{ height: imageAccHeight }}
              >
                <img
                  className="w-100 position-absolute left-0"
                  src={que_es_accesibilidad}
                  alt=""
                />
                <AnimationOnScroll
                  animateIn="animate__bounceInRight"
                  delay={1000}
                  animateOnce="true"
                  className="position-absolute left-0"
                >
                  <img
                    className="w-100"
                    src={que_es_accesibilidad2}
                    alt=""
                    onLoad={onImgLoad}
                  />
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__bounceInRight"
                  delay={2000}
                  animateOnce="true"
                  className="position-absolute left-0"
                >
                  <img className="w-100" src={que_es_accesibilidad3} alt="" />
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__bounceInRight"
                  delay={3000}
                  animateOnce="true"
                  className="position-absolute left-0"
                >
                  <img className="w-100" src={que_es_accesibilidad4} alt="" />
                </AnimationOnScroll>
              </Container>
            </Col>
          </Row>
        </Container>
        <Spacer space={[2, 0]} />
      </div>
      <Container fluid="sm" className="text-black app-home-section2">
        <Row className="justify-content-center align-items-center m-auto">
          <Col lg="6" md="5" xs="12" className="px-3">
            <Container className="px-3 text-center" fluid="sm">
              <img className="w-75" src={barrera_accesibilidad} alt="" />
            </Container>
          </Col>
          <Col lg="6" md="7" xs="12">
            <Container className="text-center mb-4">
              <h2>Barrera de accesibilidad</h2>
              <p>Explicación de la barrera de accesibilidad</p>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-black p-5">
        <Row className="justify-content-center align-items-center">
          <Col lg="4" md="4" xs="6">
            <Container className="mb-4">
              <img className="w-100" src={slide3} alt="" />
            </Container>
          </Col>
          <Col lg="4" md="4" xs="6">
            <Container className="mb-4">
              <img className="w-100" src={slide3} alt="" />
            </Container>
          </Col>
          <Col lg="4" md="4" xs="12" className="text-center">
            <Container className="text-center mb-4">
              <h2>Aprendizaje práctico</h2>
              <p>Explicación de la barrera de accesibilidad</p>
            </Container>
            <Button variant="primary" className="w-auto" href="">
              Descubrir más <i className="bi bi-arrow-right"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
