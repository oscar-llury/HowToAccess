import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ColorContrast from "../components/ColorContrast";

import imgB_pc from "../img/simulations/background-letters-pc.png";
import imgA_pc from "../img/simulations/foreground-letters-pc.png";
import imgB_mb from "../img/simulations/background-letters-mb.png";
import imgA_mb from "../img/simulations/foreground-letters-mb.png";
import bpq_letters from "../img/simulations/bpq-letters.svg";
import dyslexis_letters from "../img/simulations/dyslexis-letters.svg";
import letters_mural from "../img/simulations/letters-dyslexia-mural.svg";

import zip from "../styles/static/OpenDyslexic.zip";

export default function SimulacionInteractiva() {
  const [pos, setPos] = useState(50);
  const [imageDyslexia, setImageDyslexia] = useState({ with: 648, height: 328 });
  const [src_imgB, setImgB] = useState(imgB_pc);
  const [src_imgA, setImgA] = useState(imgA_pc);

  function onImgLoad({ target: img }) {
    setImageDyslexia({ with: img.offsetWidth, height: img.offsetHeight });
  }

  useEffect(() => {
    function handleResizeImageAccHeight() {
      if (window.innerWidth < 576 && src_imgA !== imgA_mb) {
        setImgB(imgB_mb);
        setImgA(imgA_mb);
      } else if (window.innerWidth >= 576 && src_imgA !== imgA_pc) {
        setImgB(imgB_pc);
        setImgA(imgA_pc);
      }
      const img = document.querySelector("#imgSliderBg");
      setImageDyslexia({ with: img.offsetWidth + 10, height: img.offsetHeight });
    }
    window.addEventListener("resize", handleResizeImageAccHeight);
    return () => window.removeEventListener("resize", handleResizeImageAccHeight);
  }, [imageDyslexia, src_imgA]);

  useEffect(() => {
    if (window.innerWidth < 576) {
      setImgB(imgB_mb);
      setImgA(imgA_mb);
    } else if (window.innerWidth >= 576) {
      setImgB(imgB_pc);
      setImgA(imgA_pc);
    }
  }, []);

  return (
    <>
      <Container fluid="md" className="dyslexic-slider main-container">
        <Row className="align-items-center justify-content-around mb-4">
          <Col xs="12" lg="6" xl="7">
            <h1 className="fw-extrabold">Tipografía para disléxicos</h1>
            <p>OpenDyslexic es un proyecto de código abierto que se creó para ayudar a la lectura de textos a personas con síntomas de dislexia. Las letras tienen bordes inferiores más pesados para indicar la dirección y poder distinguir rápidamente qué parte de la letra está abajo. Esto ayuda a reconocer la letra correcta y, a veces, ayuda a evitar que el cerebro las gire. Las formas únicas de cada letra también ayudan a evitar confusiones al voltear e intercambiar letras.</p>
          </Col>
          <Col xs="8" sm="6" lg="5" xl="4" className="overflow-hidden text-center">
            <img src={dyslexis_letters} alt="" className="scale-1-2 w-100 my-3" />
          </Col>
        </Row>
        <div className="slider-container m-auto w-100" style={{ height: `${imageDyslexia.height}px`, maxWidth: `${imageDyslexia.with < 644 ? imageDyslexia.with : 644}px`, width: `${imageDyslexia.with}px` }}>
          <div className="background-img text-end">
            <span className="box position-absolute end-0">Helvetica</span>
            <img src={src_imgB} alt="" className="container-text w-100" onLoad={onImgLoad} id="imgSliderBg" />
          </div>
          <div className="foreground-img overflow-hidden" style={{ width: `${pos}%` }}>
            <span className="box position-absolute">OpenDyslexic</span>
            <img src={src_imgA} alt="" className="container-text" style={{ height: `${imageDyslexia.height}px`, width: `${imageDyslexia.with - 10}px` }} />
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={pos}
            className="slider"
            name="slider"
            id="slider"
            onChange={(e) => {
              setPos(e.target.value);
            }}
          />
          <div className="slider-button cursor-pointer" style={{ left: `calc(${pos}% - 17px)` }}></div>
        </div>
        <p className="mt-1 mb-4 text-center">Comparativa de texto entre la tipografía Helvetica y OpenDyslexic.</p>
        <Container fluid="md" className="my-3">
          <p className="mb-3">
            En la tipografía Helvetica las letras B, P, Q son todas el mismo carácter simplemente volteado o girado. Esto significa que las personas con dislexia pueden experimentar un volteado letras y como resultado una mayor dificultad para determinar qué carácter deben ver. En comparación con OpenDyslexic, cada caracter está mucho más definido, como la Q con una cola más resaltada a diferencia de P, lo que facilita la distincion de ellas y queda claro para el usuario lo que está leyendo.
          </p>
          <figure className="text-center mb-4">
            <img src={bpq_letters} alt="" className="bpq_letters" />
            <figcaption>Comparativa de caracteres B, P, Q entre la tipografía Helvetica y OpenDyslexic.</figcaption>
          </figure>
          <p>Las fuentes para disléxicos no son efectivas para todas las personas. A algunas simplemente no les gustan, mientras que otras pueden encontrarlo inútil. A menudo se presentan como una solución para todas las dificultades de lectura, lo que no es el caso. Las personas tienen diferentes preferencias y esto es importante. Deje que el usuario elija, y no asuma que lo que funciona para uno funcionará para todos.</p>
          <p>
            Puedes descargar la tipografía de OpenDyslexic desde{" "}
            <a href={zip} download="OpenDyslexic.zip" rel="nofollow">
              aquí
            </a>{" "}
            y consultar toda la información en la documentación oficial en este{" "}
            <a href="https://opendyslexic.org/" target="_blank" rel="noreferrer">
              enlace
            </a>
            .
          </p>
        </Container>
        <img src={letters_mural} alt="" className="mural position-absolute opacity-75" />
      </Container>
      <div>
        <ColorContrast />
      </div>
    </>
  );
}
