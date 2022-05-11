import React, { useState, useRef, useEffect } from "react";
import { Container, ToastContainer, Toast } from "react-bootstrap";
import Masonry from "react-masonry-css";

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
    1100: 6,
    700: 3,
    500: 2,
  };

  const elements = [
    { name: "Color de contraste", image: color_contrast, description: "" },

    {
      name: "Control sobre vídeos",
      image: video_control,
      description:
        "Permite al usuario utilizar los controles de reproducción para los vídeos. Permite a los visitantes del sitio elegir cuándo se reproduce el contenido para evitar distracciones y reducir cualquier desencadenante que pueda causar convulsiones o eventos epilépticos.",
    },
    {
      name: "Estructura de la página",
      image: page_structure,
      description:
        "Proporciona una estructura de encabezados jerárquica y accesible para cada página, es esencial para los lectores de pantalla.",
    },

    {
      name: "Navegación por teclado",
      image: keyboard,
      description:
        "Permite a los usuarios la navegación por la web usando únicamente el teclado. Ayuda a los usuarios con discapacidades físicas o visuales a navegar por el contenido sin necesitar un ratón o puntero.",
    },
    { name: "Alt en imágenes", image: image_alts, description: "" },
    {
      name: "Encabezados de página",
      image: headers,
      description: "Proporciona títulos descriptivos para cada página.",
    },
    { name: "Texto accesible", image: texto_accesible, description: "" },
    {
      name: "Omitir enlace de navegación",
      image: skip_navigation_link,
      description:
        "Permite al usuario saltar bloques de contenido que estén repetidos",
    },

    {
      name: "Idioma de la página",
      image: multicultural_flags,
      description:
        "Proporciona atributos de idioma para cada página. Esto es esencial para los usuarios que dependen de tecnología de asistencia como lectores de pantalla, traductores de braille y software de reconocimiento de voz",
    },
    {
      name: "Etiquetas en formularios",
      image: form_usage,
      description:
        "Crea etiquetas de formulario, atributos de obligatoriedad, y más para que los lectores de pantalla comuniquen la intención y el valor esperado en cada campo del formulario.",
    },
  ];

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Close toast if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          document.body.classList.remove("toast-accessibility-open");
          //window.pageYOffset = pageYOffset;
          console.log(pageYOffset);
          setShowToast(false);
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
    setToastInfo(info);
    setShowToast(true);
    console.log(window.pageYOffset);
    setPageYOffset(window.pageYOffset);
    document.body.style.top = -window.pageYOffset + "px";
    document.body.classList.add("toast-accessibility-open");
  }

  return (
    <div className="web-accessibility">
      <Container fluid>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-accessibility-elements"
          columnClassName="masonry-column"
        >
          {elements.map((e, index) => (
            <MasonryColumn key={index} info={e} openToast={openToast} />
          ))}
        </Masonry>

        <div
          aria-live="polite"
          aria-atomic="true"
          className="bg-dark position-relative"
          style={{ minHeight: "240px" }}
        ></div>
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
            bg="light"
            className="m-auto"
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
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
      className="cursor-pointer"
    >
      <img src={info.image} alt={info.name}></img>
      <p className="info text-center">{info.name}</p>
    </div>
  );
}
