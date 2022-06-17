import ConformanceBox from "components/ConformanceBox";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  VictoryStack,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryAnimation,
  VictoryLabel,
} from "victory";
import { renderConformidad } from "../lib/functions";

export default function Proyecto() {
  const params = useParams();
  const id = params.proyectoId;

  let timer;
  const size = 400;
  const animationDuration = 2000;
  const [percent, setPercent] = useState(75);
  const [data, setData] = useState([
    { x: 1, y: 0 },
    { x: 2, y: 100 },
  ]);

  const updateCount = () => {
    setData(getData(percent > 100 ? 0 : percent));

    /*
    timer =
      !timer &&
      setInterval(() => {
        console.log("ticking");
        console.log(percent);
        setData(getData(percent > 100 ? 0 : percent));
      }, 2000);*/
  };

  useEffect(() => {
    // Runs on first render
    updateCount();

    return () => {
      // Runs once on cleanup/un-mounting this component
      clearInterval(timer);
    };
  }, []);

  function getData(percent) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  }

  return (
    <Container className="app-proyecto">
      <div>
        <Link to="/proyectos">Volver a proyectos</Link>
      </div>
      <Container className="card-info">
        <Container className="d-inline-block w-75">
          <h2>Nombre del proyecto</h2>
          <ConformanceBox idConformance={1} className="d-inline-block" />
          <p className="d-inline-block ms-2">Nivel de conformidad</p>
          <Row>
            <Col sm="3"></Col>
            <Col sm="3">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  title="Title"
                ></div>
              </div>
            </Col>
            <Col sm="3">3</Col>
            <Col sm="3">4</Col>
          </Row>
        </Container>
        <Container className="d-inline-block w-25 text-center">
          <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
            <VictoryPie
              standalone={false}
              animate={{ duration: animationDuration }}
              width={size}
              height={size}
              data={data}
              innerRadius={130}
              cornerRadius={25}
              labels={() => null}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onMouseOver: () => {
                      console.log("hover");
                    },
                    onClick: () => {
                      console.log("clic");
                    },
                  },
                },
              ]}
              style={{
                data: {
                  fill: ({ datum }) => {
                    const color = datum.y > 30 ? "green" : "red";
                    return datum.x === 1 ? color : "transparent";
                  },
                },
              }}
            />
            <VictoryAnimation duration={animationDuration} data={data}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={size / 2}
                    y={size / 2}
                    text={`${percent}%`}
                    style={{
                      fontSize: 45,
                      fontFamily: "Inter",
                      fontWeight: 600,
                    }}
                  />
                );
              }}
            </VictoryAnimation>
          </svg>
          <p>Progreso total</p>
        </Container>
      </Container>
    </Container>
  );
}
