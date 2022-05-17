import React, { useState, useRef } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Tooltip,
  Form,
  InputGroup,
  Toast,
  ToastContainer,
  Overlay,
} from "react-bootstrap";
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
import daltonismo from "../img/confirmar-eliminación.png";
import daltonismo_azul from "../img/confirmar-eliminación-azul.png";
import daltonismo_rojo from "../img/confirmar-eliminación-rojo.png";
import daltonismo_verde from "../img/confirmar-eliminación-verde.png";
import logo from "../img/logo.svg";

const Home = () => {
  const [imageAccHeight, setImageAccHeight] = useState(200);
  const [pointerTooltip, setPointerTooltip] = useState(0);
  const [visibleTooltip, setVisibleTooltip] = useState(false);
  const [tooltip, setTooltip] = useState();

  const targetImg1 = useRef(null);
  const targetImg2 = useRef(null);
  const targetImg3 = useRef(null);
  const targetImg4 = useRef(null);

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

  const tooltipsBarreras = [
    "Una persona sorda no podrá entender el contenido de un video que no tenga subtítulos.",
    "Una persona ciega no podrá comprender el contenido de una página si esta no está estructurada y etiquetada correctamente.",
    "Una persona con discapacidades físicas puede encontrar problemas en la navegación de una página web.",
  ];

  function onImgLoad({ target: img }) {
    setImageAccHeight(img.offsetHeight);
  }

  function randomTooltip(e) {
    e.preventDefault();
    if (!visibleTooltip) {
      if (pointerTooltip < tooltipsBarreras.length - 1) {
        setPointerTooltip(pointerTooltip + 1);
      } else {
        setPointerTooltip(0);
      }
      setTooltip(tooltipsBarreras[pointerTooltip]);
    }
    setVisibleTooltip(!visibleTooltip);
  }

  return (
    <Container fluid className="app-home p-0">
      <div className="bg-soft">
        <Carrousel slides={slides} />
        <Container fluid="lg" className="mt-4 text-black app-home-section1">
          <Row className="justify-content-center align-items-center m-auto">
            <Col lg="7" md="6" xs="12">
              <Container className="mb-4 text-container">
                <h2>
                  La <span className="bolder">Accesibilidad</span> en{" "}
                  <span className="highlighted">Páginas Web</span>
                </h2>

                <p className="my-4">
                  En un mundo rebosante de información digital se ha convertido
                  en un factor imprescindible retener a los visitantes de un
                  nuestro web. Se estima que Google procesa 63.000 búsquedas por
                  segundo.
                </p>
                <p>
                  Personas que no comprendan o no puedan interactuar con la
                  información o el funcionamiento de una página web la
                  abandonarán rápidamente.
                </p>
                <p className="my-4">
                  Los sitios web deben estár diseñados y desarrollados de tal
                  manera que puedan usarlos el mayor porcentaje de población
                  posible, este es el objetivo de la Accesibilidad web. Texto
                  alternativo en imágenes, colores contrastados y navegación por
                  teclado... Descubre los elementos más importantes de la
                  accesibilidad web en{" "}
                  <span className="accent-hta">How To Access</span>.
                </p>
                <Button
                  variant="primary"
                  className="w-auto"
                  href="/accesibilidad-web"
                >
                  Ver más <i className="bi bi-arrow-right"></i>
                </Button>
              </Container>
            </Col>
            <Col lg="5" md="6" xs="12" className="keyboard-container">
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
      <Container
        fluid="lg"
        className="text-black app-home-section2 p-container"
      >
        <Row className="justify-content-center align-items-center gx-4">
          <Col lg="7" md="6" xs="12">
            <Container className="mb-4 text-container">
              <h2>Barreras de Accesibilidad</h2>
              <p className="mt-4">
                Personas que utilizan gafas, son daltónicas, tienen mobilidad
                reducida en los brazos, viven en entornos ruidosos, son
                dislexicos, o tienen mala conexion a internet, se encuentran con
                barreras de accesibilidad diariamente.
              </p>
              <p className="my-4">
                Páginas web que no contemplen los elementos de la accesibilidad
                web pueden provocar que estas personas no puedan navegar o
                comprender su contenido.
              </p>
            </Container>
          </Col>
          <Col lg="5" md="6" xs="12" className="px-3 mb-3">
            <Container
              className="px-3 text-center container-image-accesibility"
              fluid="sm"
            >
              <div
                className="tap-to-discover"
                aria-hidden="true"
                data-st-delay="0.3"
              >
                Clic para descubrir
              </div>
              <ToastContainer
                position="middle-center"
                className="toast-accessibility"
              >
                <Toast
                  show={visibleTooltip}
                  onClose={randomTooltip}
                  bg="white"
                  className="custom-toast"
                >
                  <Toast.Header>
                    <strong className="me-auto">
                      Barrera de accesibilidad
                    </strong>
                  </Toast.Header>
                  <Toast.Body>{tooltip}</Toast.Body>
                </Toast>
              </ToastContainer>

              <img
                onClick={randomTooltip}
                className="w-75"
                src={barrera_accesibilidad}
                alt=""
              />
            </Container>
          </Col>
        </Row>
      </Container>
      <Container
        fluid="lg"
        className="text-black app-home-section3 p-container"
      >
        <Row className="justify-content-center align-items-center gx-5">
          <Col
            lg="5"
            md={{ order: "first", span: 6 }}
            sm={{ order: "last", span: 12 }}
            xs={{ order: "last", span: 12 }}
          >
            <Container fluid="sm" className="d-grid grid-daltonismo">
              <img ref={targetImg1} className="w-100" src={daltonismo} alt="" />
              <Overlay target={targetImg1.current} show={true} placement="top">
                <Tooltip id="overlay-example">Visión normal</Tooltip>
              </Overlay>
              <img
                ref={targetImg2}
                className="w-100"
                src={daltonismo_azul}
                alt=""
              />
              <Overlay target={targetImg2.current} show={true} placement="top">
                <Tooltip id="overlay-example">Ceguera al azul</Tooltip>
              </Overlay>
              <img
                ref={targetImg3}
                className="w-100"
                src={daltonismo_rojo}
                alt=""
              />
              <Overlay
                target={targetImg3.current}
                show={true}
                placement="bottom"
              >
                <Tooltip id="overlay-example">Ceguera al rojo</Tooltip>
              </Overlay>
              <img
                ref={targetImg4}
                className="w-100"
                src={daltonismo_verde}
                alt=""
              />
              <Overlay
                target={targetImg4.current}
                show={true}
                placement="bottom"
              >
                <Tooltip id="overlay-example">Ceguera al verde</Tooltip>
              </Overlay>
            </Container>
          </Col>
          <Col
            lg="7"
            md={{ order: "last", span: 6 }}
            sm={{ order: "first", span: 12 }}
            xs={{ order: "first", span: 12 }}
            className="mb-4"
          >
            <Container className="text-container">
              <h2>Aprendizaje práctico</h2>
              <p className="mt-4">
                El daltonismo puede provocar que una persona no pueda
                diferenciar bien los colores. Para evitar confusiones, se debe
                proporcionar ayuda textual que permita distinguir los elementos
                afectados.
              </p>
              <p className="my-4">
                Una de las mejores maneras de aprender es prácticando, por eso
                en <span className="accent-hta">How To Access</span>{" "}
                proporcionamos ejemplos de diseños e implementaciones que
                cumplen con las normativas y recomendaciones de la Accesibilidad
                web.
              </p>
              <Button
                variant="primary"
                className="w-auto"
                href="/normas-de-accesibilidad-web"
              >
                Descubrir más <i className="bi bi-arrow-right"></i>
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
