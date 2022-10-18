import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ColorContrast from "../components/ColorContrast";

import imgB from "../img/simulations/background-letters.png";
import imgA from "../img/simulations/foreground-letters.png";
import loading from "../img/loading.gif";

export default function SimulacionInteractiva() {
  const [pos, setPos] = useState(50);
  const [imageDyslexia, setImageDyslexia] = useState({ with: 664, height: 336 });

  function onImgLoad({ target: img }) {
    setImageDyslexia({ with: img.offsetWidth, height: img.offsetHeight });
  }
  return (
    <>
      <Container fluid="md" className="dyslexic-slider">
        <Row className="align-items-center justify-content-around">
          <Col xs="12" md="7" lg="6">
            <h1 className="fw-extrabold">Herramienta de contraste de color</h1>
            <p>OpenDyslexic se creó para ayudar a la lectura de textos con a personas con síntomas de dislexia. Las letras tienen bordes inferiores más pesados para indicar la dirección y poder distinguir rápidamente qué parte de la letra está abajo. Esto ayuda a reconocer la letra correcta y, a veces, ayuda a evitar que el cerebro las gire. Las formas únicas de cada letra ayudan a evitar confusiones al voltear e intercambiar letras.</p>
          </Col>
          <Col xs="6" sm="5" md="4" lg="5" xl="4" className="overflow-hidden text-center">
            <img src={loading} alt="" className="scale-1-2 w-100" />
          </Col>
        </Row>
        <div className="slider-container m-auto" style={{ width: `${imageDyslexia.with}px`, height: `${imageDyslexia.height}px` }}>
          <div className="background-img text-end">
            <span className="box position-absolute end-0">adios</span>
            <img src={imgB} alt="" className="container-text w-100" />
          </div>
          <div className="foreground-img overflow-hidden" style={{ width: `${pos}%` }}>
            <span className="box position-absolute">hola</span>
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
        <div>
          <p>https://opendyslexic.org/</p>
          <p>Puedo encontrar la lectura complicada y leer mal algunas palabras. Para hacer un seguimiento de dónde estoy, a menudo uso el dedo o el cursor y, a veces, necesito volver a leer algo varias veces para asegurarme de que lo he leído correctamente y lo he asimilado todo. Un tipo de letra disléxico ayuda mucho con esto, encuentro que reduce el impacto de mi dislexia y me permite leer más rápido y con mayor precisión.</p>

          <p>La base pesada también es útil para los usuarios que se pierden en las líneas de texto. Debido a que la parte inferior de cada línea es más gruesa que la superior, significa que es más fácil ver dónde comienzan y terminan las líneas de texto.</p>

          <p>También con Helvetica D, P, D, Q son todos el mismo carácter simplemente volteado o girado. Esto significa que a las personas que experimentan el cambio de letras les resulta difícil determinar qué personaje deben ver, en comparación con OpenDyslexic, donde cada personaje está mucho más definido, como D como una cola pequeña a diferencia de B, lo que significa que está claro para el usuario lo que está leyendo.</p>

          <p>Las fuentes para disléxicos no son efectivas para todos, algo sobre lo que ha escrito Neil Milliken . A algunas personas simplemente no les gustan, mientras que otras pueden encontrarlos inútiles. A menudo se presentan como una solución para todas las dificultades de lectura, lo que no es el caso.Las personas tienen diferentes preferencias y esto es importante. Deje que la gente elija y no asuma que lo que funciona para uno funcionará para todos.</p>
        </div>
      </Container>
      <div>
        <ColorContrast />
      </div>
    </>
  );
}
