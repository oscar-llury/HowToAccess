import React, { useState } from "react";
import { Button, Container, Row, Col, Form, InputGroup } from "react-bootstrap";

import Carrousel from "../components/Carrousel";
import Spacer from "../components/Spacer";

//images
import slide1 from "../img/home_slide1.png";
import slide2 from "../img/home_slide2.png";
import slide3 from "../img/home_slide3.png";
import barrera_accesibilidad from "../img/barrera_accesibilidad.png";
import logo from "../img/logo.svg";

const Home = () => {
  const slides = [
    {
      title: "First slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      img: slide1,
      img_alt: "First slide",
    },
    {
      title: "Second slide label",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: slide2,
      img_alt: "Second slide",
    },
    {
      title: "Third slide label",
      desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      img: slide3,
      img_alt: "Third slide",
    },
  ];

  return (
    <div className="app-home ">
      <Carrousel slides={slides} />
      <Container fluid className="text-black p-5 app-home-section1">
        <Row className="justify-content-center align-items-center">
          <Col lg="6" md="6" xs="12">
            <Container className="text-center mb-4">
              <h2>Qué es la accesibilidad web</h2>
              <p>Descripción breve sobre accesibilidad web</p>
            </Container>
          </Col>
          <Col lg="6" md="6" xs="12">
            <Container className="mb-4">
              <img className="w-100" src={slide3} alt="" />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" className="w-auto" href="">
              Ver más <i className="bi bi-arrow-right"></i>
            </Button>
          </Col>
        </Row>
      </Container>
      <Spacer space={[2, 0]} />
      <Container fluid className="text-black px-5 app-home-section2">
        <Row className="justify-content-center align-items-center">
          <Col lg="6" md="6" xs="12" className="px-5">
            <Container className="mb-4 px-5">
              <img className="w-100 px-5" src={barrera_accesibilidad} alt="" />
            </Container>
          </Col>
          <Col lg="6" md="6" xs="12">
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
          <Col lg="4" md="4" xs="12">
            <Container className="text-center mb-4">
              <h2>Barrera de accesibilidad</h2>
              <p>Explicación de la barrera de accesibilidad</p>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" className="w-auto" href="">
              Descubrir más <i className="bi bi-arrow-right"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
