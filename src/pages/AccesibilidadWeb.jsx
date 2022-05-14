import React, { useState, useRef, useEffect } from "react";
import { Container, ToastContainer, Toast, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import image_alts from "../img/image-alts.webp";
import color_contrast from "../img/color-contrast.svg";
import texto_accesible from "../img/texto-accesible.svg";
import page_structure from "../img/page-structure.svg";
import keyboard from "../img/keyboard-navigation.svg";
import headers from "../img/head-heading.svg";
import multicultural_flags from "../img/multicultural-flags.png";
import form_usage from "../img/form-usage.png";
import video_control from "../img/video-control.png";
import skip_navigation_link from "../img/skip-navigation-link.svg";
import ojo from "../img/ojo.svg";
import cabeza from "../img/cabeza.svg";
import tap from "../img/tap.svg";
import oido from "../img/oido.svg";

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
      <Container fluid="sm">
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <ToastContainer className="toast-accessibility " position="top-center">
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
