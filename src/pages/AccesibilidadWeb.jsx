import React, { useState, useRef, useEffect } from "react";
import { Container, ToastContainer, Toast, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";

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
import web_building from "../img/web_building.svg";
import waves_white from "../img/waves-white.svg";

import Spacer from "components/Spacer";

export default function AccesibilidadWeb() {
  const [showToast, setShowToast] = useState(false);
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
    { name: "Color de contraste", image: color_contrast, description: "Proporciona un buen contraste de color entre los colores de texto y los colores de fondo o imágenes." },
    {
      name: "Control sobre vídeos",
      image: video_control,
      description: "Permite a los usuarios utilizar los controles de reproducción para los vídeos. Esto permitirá elegir cuándo se reproduce el contenido, para evitar distracciones y reducir cualquier desencadenante que pueda causar convulsiones o eventos epilépticos.",
    },
    {
      name: "Estructura de la página",
      image: page_structure,
      description: "Proporciona una estructura html (section, article, title). Es esencial para los lectores de pantalla puedan interpretar el fin de cada sección de la página.",
    },
    {
      name: "Navegación por teclado",
      image: keyboard,
      description: "Permite a los usuarios la navegación por la web usando únicamente el teclado. Ayuda a los usuarios con discapacidades físicas o visuales a navegar por el contenido sin necesitar un ratón o puntero.",
    },
    {
      name: "Alt en imágenes",
      image: image_alts,
      description: "Proporciona un texto alternativo a las imágenes del sitio web para mostrar en lugar de la imagen en caso de error de carga.",
    },
    {
      name: "Encabezados de página",
      image: headers,
      description: "Proporciona títulos descriptivos para cada página y una estructura de encabezados jerárquica y accesible.",
    },
    {
      name: "Texto accesible",
      image: texto_accesible,
      description: "Proporciona herramientas para cambiar el tamaño de texto, interlineado y tipografía. Permite que usuarios con dislexia o discapacidades visuales puedan adaptar el texto a sus necesidades.",
    },
    {
      name: "Omitir enlace de navegación",
      image: skip_navigation_link,
      description: "Permite a los usuarios saltar bloques de contenido que estén repetidos.",
    },

    {
      name: "Idioma de la página",
      image: multicultural_flags,
      description: "Proporciona atributos de idioma para cada página. Esto es esencial para los usuarios que dependen de tecnología de asistencia como: lectores de pantalla, traductores de braille y software de reconocimiento de voz.",
    },
    {
      name: "Etiquetas en formularios",
      image: form_usage,
      description: "Crea etiquetas de formulario, atributos de obligatoriedad, y más, para que los lectores de pantalla comuniquen la intención y el valor esperado en cada campo del formulario.",
    },
  ];

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Close toast if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowToast(false);
          document.body.classList.remove("cursor-pointer");
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
      document.body.style.top = -window.pageYOffset + "px";
      document.body.classList.add("toast-accessibility-open", "cursor-pointer");
    }
  }
  // eslint-disable-next-line no-unused-vars
  const startAnimation = () => {
    const title = document.querySelector(".title-heading");
    const columns = document.querySelectorAll(".column-heading");
    const titleAnimation = "zoomInDown";
    title.classList.add("animate__animated", `animate__${titleAnimation}`, "animate__slow");
    columns.forEach((e, index) => e.classList.add("animate__animated", `animate__${titleAnimation}`, "animate__slow"));
  };

  useEffect(() => {
    //requestAnimationFrame(startAnimation);
    const columns = document.querySelectorAll(".masonry-column");
    columns[4].classList.add("flex-row");
    columns[5].classList.add("flex-row");
  }, []);

  return (
    <div className="web-accessibility bg-soft">
      <Container fluid className="masonry-box">
        <h1 className="opacity-0 m-0 w-0 h-0 m-0">Elementos que mejoran la accesibilidad web</h1>
        <Masonry breakpointCols={breakpointColumnsObj} className="masonry-accessibility-elements" columnClassName="masonry-column">
          {elements.map((e, index) => (
            <MasonryColumn key={index} info={e} openToast={openToast} />
          ))}
        </Masonry>
        <p className="info-click">* Pincha en los elementos para descubrir más.</p>
      </Container>
      <Container fluid="sm" className="">
        <Row className="accessibility-elements py-3 align-items-center">
          <Col xs="12" md="6" className="title">
            <h1 className="fw-extrabold">Tipos de discapacidades</h1>
            <p className="description">Los usuarios que navegan en internet pueden presentar distintos tipos de discapacidades que afectan al uso y experiencia de navegación web. También es posible que los usuarios presenten múltiples discapacidades simultáneamente. Estas discapacidades pueden verse agravadas por una avanzada edad del usuario o el desconocimiento de las tecnologías.</p>
            <p className="description">Comprender los distintos tipos de discapacidades y cómo estas afectan al uso de la tecnología es esencial para saber qué elementos implementar para proporcionar la mejor experiencia de usuario posible.</p>
          </Col>
          <Col xs="12" md="6">
            <Row className="pt-4 pb-2">
              <Col xs="6" className="column-item">
                <div className="d-flex align-items-center pb-2">
                  <div className="box">
                    <img src={ojo} alt="" />
                  </div>
                  <h2 className="title">Visuales</h2>
                </div>
                <p>Las discapacidades visuales pueden abarcar desde el daltonismo, una visión reducida, o incluso la ceguera completa.</p>
              </Col>
              <Col xs="6" className="column-item">
                <div className="d-flex align-items-center pb-2">
                  <div className="box">
                    <img src={cabeza} alt="" />
                  </div>
                  <h2 className="title">Cognitivas</h2>
                </div>
                <p>Las discapacidades cognitivas afectan a la comprensión del entorno y resolución de problemas, como el autismo.</p>
              </Col>
            </Row>
            <Row className="pt-2 pb-4">
              <Col xs="6" className="column-item">
                <div className="d-flex align-items-center pb-2">
                  <div className="box">
                    <img src={tap} alt="" />
                  </div>
                  <h2 className="title">Motoras</h2>
                </div>
                <p>Las discapacidades motoras afectan a los tiempos de respuesta y al método de intracción entre el usuario y el ordenador.</p>
              </Col>
              <Col xs="6" className="column-item">
                <div className="d-flex align-items-center pb-2">
                  <div className="box">
                    <img src={oido} alt="" />
                  </div>
                  <h2 className="title">Auditivas</h2>
                </div>
                <p>Las discapacidades auditivas pueden abarcar desde una audición reducida hasta la perdida total de la audición.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="position-relative">
        <Spacer space={[0, 0]} color="#e9eaeb" className="invert-y position-absolute w-100 top-0 z-index-1" />
        <img src={waves_white} className="position-absolute w-100 h-100 object-fit-cover " alt="" />
        <div className="bg-dark-blue py-5">
          <Container fluid="sm" className="main-content">
            <Row className="row1">
              <Col>
                <Container className="quote position-relative">
                  <img src={discapacidades} alt="" className="position-inherit" />
                  <blockquote cite="https://www.who.int/news-room/fact-sheets/detail/disability-and-health">
                    <span className="italic">Unicef</span> estima que hay 1000 millones de personas, el 15% de la población mundial, que experimentan algún tipo de discapacidad, de los cuales 240 millones son niños.
                  </blockquote>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
        <Spacer space={[0, 0]} color="#fff" className="position-absolute w-100 bottom-0" />
      </div>
      <div className="bg-white">
        <Container fluid="sm" className="main-content">
          <Row className="row2 align-items-center py-4">
            <Col md="12" lg="6">
              <h3 className="title fw-extrabold">Todos nos beneficiamos de una buena accesibilidad web</h3>
              <p>Aproximadamente la mitad de los usuarios que llegan a una página web podrían tener dificultades para navegar a traves de ella o entender su información.</p>
              <p>Además, personas perfectamente saludables, con excelente vista, audición y mobilidad, y que pueden leer y escribir sin esfuerzo, también pueden encontrar problemas de uso en páginas web.</p>
              <p>Realizar un diseño web que sea usable y accesible para personas con discapacidad tiene beneficios para el resto de personas que no presentan dichas discapacidades.</p>
            </Col>
            <Col md="12" lg="6">
              <img alt="" src={web_building} className="w-100" />
            </Col>
          </Row>
        </Container>
      </div>
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
