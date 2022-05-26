import React, { useState, useRef, useEffect } from "react";
import { Container, ToastContainer, Toast, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Carousel from "../components/Carousel";

import image_alts from "../img/accesibility-elements/image-alts.webp";
import color_contrast from "../img/accesibility-elements/color-contrast.svg";
import texto_accesible from "../img/accesibility-elements/texto-accesible.svg";
import page_structure from "../img/accesibility-elements/page-structure.svg";
import keyboard from "../img/accesibility-elements/keyboard-navigation.svg";
import headers from "../img/accesibility-elements/head-heading.svg";
import multicultural_flags from "../img/accesibility-elements/multicultural-flags.png";
import form_usage from "../img/accesibility-elements/form-usage.png";
import video_control from "../img/accesibility-elements/video-control.png";
import skip_navigation_link from "../img/accesibility-elements/skip-navigation-link.svg";
import ojo from "../img/ojo.svg";
import cabeza from "../img/cabeza.svg";
import tap from "../img/tap.svg";
import oido from "../img/oido.svg";
import discapacidades from "../img/discapacidades.svg";

import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";

export default function AccesibilidadWeb() {
  const [showToast, setShowToast] = useState(false);
  const [pageYOffset, setPageYOffset] = useState(0);
  const [toastInfo, setToastInfo] = useState({
    name: "",
    image: "",
    description: "",
  });

  const breakpointColumnsObj = {
    default: 6,
    1200: 6,
    992: 3,
    576: 2,
  };

  const breakpointsSlides = {
    1200: 6,
    992: 3,
    576: 2,
  };

  const elements = [
    { name: "Color de contraste", image: color_contrast, description: "" },

    {
      name: "Control sobre vídeos",
      image: video_control,
      description:
        "Permite a los usuarios utilizar los controles de reproducción para los vídeos. Esto permitirá elegir cuándo se reproduce el contenido, para evitar distracciones y reducir cualquier desencadenante que pueda causar convulsiones o eventos epilépticos.",
    },
    {
      name: "Estructura de la página",
      image: page_structure,
      description:
        "Proporciona una estructura html (section, article, title). Es esencial para los lectores de pantalla puedan interpretar el fin de cada sección de la página.",
    },
    {
      name: "Navegación por teclado",
      image: keyboard,
      description:
        "Permite a los usuarios la navegación por la web usando únicamente el teclado. Ayuda a los usuarios con discapacidades físicas o visuales a navegar por el contenido sin necesitar un ratón o puntero.",
    },
    {
      name: "Alt en imágenes",
      image: image_alts,
      description:
        "Proporciona un texto alternativo a las imágenes del sitio web para mostrar en lugar de la imagen en caso de error de carga.",
    },
    {
      name: "Encabezados de página",
      image: headers,
      description:
        "Proporciona títulos descriptivos para cada página y una estructura de encabezados jerárquica y accesible.",
    },
    {
      name: "Texto accesible",
      image: texto_accesible,
      description:
        "Proporciona herramientas para cambiar el tamaño de texto, interlineado y tipografía. Permite que usuarios con dislexia o discapacidades visuales puedan adaptar el texto a sus necesidades.",
    },
    {
      name: "Omitir enlace de navegación",
      image: skip_navigation_link,
      description:
        "Permite a los usuarios saltar bloques de contenido que estén repetidos.",
    },

    {
      name: "Idioma de la página",
      image: multicultural_flags,
      description:
        "Proporciona atributos de idioma para cada página. Esto es esencial para los usuarios que dependen de tecnología de asistencia como: lectores de pantalla, traductores de braille y software de reconocimiento de voz.",
    },
    {
      name: "Etiquetas en formularios",
      image: form_usage,
      description:
        "Crea etiquetas de formulario, atributos de obligatoriedad, y más, para que los lectores de pantalla comuniquen la intención y el valor esperado en cada campo del formulario.",
    },
  ];

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Close toast if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          //window.pageYOffset = pageYOffset;
          setShowToast(false);
          setTimeout(function () {
            document.body.classList.remove("toast-accessibility-open");
          }, 500);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  async function openToast(info) {
    if (!document.body.classList.contains("toast-accessibility-open")) {
      setToastInfo(info);
      setShowToast(true);
      setPageYOffset(window.pageYOffset);
      document.body.style.top = -window.pageYOffset + "px";
      document.body.classList.add("toast-accessibility-open");
    }
  }

  const startAnimation = () => {
    const title = document.querySelector(".title-heading");
    const columns = document.querySelectorAll(".column-heading");
    const titleAnimation = "zoomInDown";
    title.classList.add(
      "animate__animated",
      `animate__${titleAnimation}`,
      "animate__slow"
    );
    columns.forEach((e, index) =>
      e.classList.add(
        "animate__animated",
        `animate__${titleAnimation}`,
        "animate__slow"
      )
    );
  };

  useEffect(() => {
    //requestAnimationFrame(startAnimation);
    const columns = document.querySelectorAll(".masonry-column");
    columns[4].classList.add("flex-row");
    columns[5].classList.add("flex-row");
  }, []);

  return (
    <div className="web-accessibility">
      <Container fluid className="masonry-box">
        <Row className="heading">
          <Col xs="12" md="4">
            <Row className="group2">
              <Col xs="6" className="column-heading ">
                <div className="text-center">
                  <img src={ojo} alt="" />
                </div>
              </Col>
              <Col xs="6" className="column-heading ">
                <div className="text-center">
                  <img src={cabeza} alt="" />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md="4" className="title-heading ">
            <div className="p-3">
              <h1 className="text-center">
                Elementos que mejoran la accesibilidad web
              </h1>
            </div>
          </Col>
          <Col xs="12" md="4">
            <Row className="group2">
              <Col xs="6" className="column-heading ">
                <div className="text-center">
                  <img src={tap} alt="" />
                </div>
              </Col>
              <Col xs="6" className="column-heading ">
                <div className="text-center">
                  <img src={oido} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-accessibility-elements"
          columnClassName="masonry-column"
        >
          {elements.map((e, index) => (
            <MasonryColumn key={index} info={e} openToast={openToast} />
          ))}
        </Masonry>
      </Container>
      <Container fluid="sm" className="row1">
        <Row>
          <Col>
            <Container className="quote">
              <img src={discapacidades} alt="" />
              <blockquote cite="https://www.who.int/news-room/fact-sheets/detail/disability-and-health">
                <span className="italic">Unicef</span> estima que hay 1000
                millones de personas, el 15% de la población mundial, que
                experimentan algún tipo de discapacidad, de los cuales 240
                millones son niños.
              </blockquote>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <h2>Los beneficios de la accesibilidad web</h2>
            <p>
              Aproximadamente la mitad de los usuarios que llegan a una página
              web podrían tener dificultades para navegar a traves de ella o
              entender su información.
            </p>
            <p>
              Además, personas perfectamente saludables, con excelente vista,
              audición y mobilidad, y que pueden leer y escribir sin esfuerzo,
              también pueden encontrar problemas de uso en páginas web.
            </p>
            <p>
              Realizar un diseño web que sea usable y accesible para personas
              con discapacidad tiene beneficios para el resto de personas que no
              presentan dichas discapacidades, es decir,{" "}
              <strong>
                todos nos beneficiamos de una buena accesibilidad web
              </strong>
              .
            </p>
          </Col>
          <Col sm="12" className="accesibility-carrousel">
            <div>
              <Carousel breakpoints={breakpointsSlides} infiniteLoop>
                <div className="carrousel-item">
                  <img src={img1} alt="placeholder" />
                </div>
                <div className="carrousel-item">
                  <img src={img2} alt="placeholder" />
                </div>
                <div className="carrousel-item">
                  <img src={img3} alt="placeholder" />
                </div>
                <div className="carrousel-item">
                  <img src={img4} alt="placeholder" />
                </div>
                <div className="carrousel-item">
                  <img src={img5} alt="placeholder" />
                </div>
                <div className="carrousel-item">
                  <img src={img6} alt="placeholder" />
                </div>
                <div className="carrousel-item">
                  <img src={img7} alt="placeholder" />
                </div>
                <div className="carrousel-item">
                  <img src={img8} alt="placeholder" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer className="toast-accessibility" position="top-center">
        <div className={showToast ? "d-flex" : "d-none"}>
          <Toast
            onClose={() => {
              document.body.classList.remove("toast-accessibility-open");
              setShowToast(false);
            }}
            show={showToast}
            ref={wrapperRef}
            delay={20000}
            bg="white"
            className="m-auto custom-toast"
          >
            <Toast.Header>
              <strong className="me-auto">{toastInfo.name}</strong>
            </Toast.Header>
            <Toast.Body>{toastInfo.description}</Toast.Body>
          </Toast>
        </div>
      </ToastContainer>
    </div>
  );
}

function MasonryColumn({ info, openToast }) {
  return (
    <div
      onClick={() => {
        openToast(info);
      }}
      className="cursor-pointer mansonry-div"
    >
      <img src={info.image} alt={info.name}></img>
      <p className="info text-center">{info.name}</p>
    </div>
  );
}