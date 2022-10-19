import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import ColorContrast from "../components/ColorContrast";

import imgB from "../img/simulations/background-letters.png";
import imgA from "../img/simulations/foreground-letters.png";
import bpq_letters from "../img/simulations/bpq-letters.svg";
import dyslexis_letters from "../img/simulations/dyslexis-letters.svg";
import letters_mural from "../img/simulations/letters-dyslexia-mural.svg";

import zip from "../styles/static/OpenDyslexic.zip";

export default function SimulacionInteractiva() {
  const [pos, setPos] = useState(50);
  const [imageDyslexia, setImageDyslexia] = useState({ with: 648, height: 328 });

  function onImgLoad({ target: img }) {
    console.log({ with: img.offsetWidth, height: img.offsetHeight });
    setImageDyslexia({ with: img.offsetWidth, height: img.offsetHeight });
  }

  return (
    <>
      <Container fluid="md" className="dyslexic-slider main-container">
        <Row className="align-items-center justify-content-around mb-4">
          <Col xs="12" lg="6" xl="7">
            <h1 className="fw-extrabold">Tipografía para disléxicos</h1>
            <p>OpenDyslexic es un proyecto de código abierto que se creó para ayudar a la lectura de textos a personas con síntomas de dislexia. Las letras tienen bordes inferiores más pesados para indicar la dirección y poder distinguir rápidamente qué parte de la letra está abajo. Esto ayuda a reconocer la letra correcta y, a veces, ayuda a evitar que el cerebro las gire. Las formas únicas de cada letra también ayudan a evitar confusiones al voltear e intercambiar letras.</p>
          </Col>
          <Col xs="6" sm="5" xl="4" className="overflow-hidden text-center">
            <img src={dyslexis_letters} alt="" className="scale-1-2 w-100" />
          </Col>
        </Row>
        <div className="slider-container m-auto w-100" style={{ height: `${imageDyslexia.height}px`, maxWidth: `${imageDyslexia.with}px` }}>
          <div className="background-img text-end">
            <span className="box position-absolute end-0">OpenDyslexic</span>
            <img src={imgB} alt="" className="container-text w-100" />
          </div>
          <div className="foreground-img overflow-hidden" style={{ width: `${pos}%` }}>
            <span className="box position-absolute">Helvetica</span>
            <img src={imgA} alt="" className="container-text" onLoad={onImgLoad} />
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
          <div className="slider-button cursor-pointer" style={{ left: `calc(${pos}% - 18px)` }}></div>
        </div>
        <p className="mt-1 mb-3 text-center">Comparativa de texto entre la tipografía Helvetica y OpenDyslexic.</p>
        <Container fluid="md" className="my-3">
          <p className="mb-1">
            También con Helvetica las letras B, P, Q son todas el mismo carácter simplemente volteado o girado. Esto significa que las personas con dislexia pueden experimentar un volteado letras y como resultado una mayor dificultad para determinar qué carácter deben ver. En comparación con OpenDyslexic, cada caracter está mucho más definido, como la Q con una cola más resaltada a diferencia de P, lo que facilita la distincion de ellas y queda claro para el usuario lo que está leyendo.
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
            <a href="https://opendyslexic.org/" target="_blank" rel="nofollow">
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
