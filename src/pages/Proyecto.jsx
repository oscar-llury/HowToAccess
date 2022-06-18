import ConformanceBox from "components/ConformanceBox";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";
import { percentage } from "../lib/functions";

export default function Proyecto() {
  const params = useParams();
  const id = params.proyectoId;

  const [windowWd, detectWd] = useState(window.innerWidth);
  const detectSize = () => {
    detectWd(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowWd]);

  let timer;
  const size = 300;
  const animationDuration = 2000;
  const [totalProgress, setTotalProgress] = useState(75);
  const [data, setData] = useState([
    { x: 1, y: 0 },
    { x: 2, y: 100 },
  ]);

  const updateCount = () => {
    setData(getData(totalProgress > 100 ? 0 : totalProgress));

    /*
    timer =
      !timer &&
      setInterval(() => {
        console.log("ticking");
        console.log(totalProgress);
        setData(getData(totalProgress > 100 ? 0 : totalProgress));
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

  function getData(totalProgress) {
    return [
      { x: 1, y: totalProgress },
      { x: 2, y: 100 - totalProgress },
    ];
  }

  return (
    <Container fluid="sm" className="app-proyecto p-lg-5">
      <div>
        <Link to="/proyectos">
          <i className="bi bi-arrow-left"></i>Volver a proyectos
        </Link>
        <p> {windowWd}</p>
      </div>
      {windowWd >= 992 ? (
        <Row className="card-info align-items-center">
          <Col lg="9" className="">
            <RenderProjectInfo />
            <RenderProjectPrinciples />
          </Col>
          <Col lg="3" className="text-center">
            <RenderTotalProgress
              animationDuration={animationDuration}
              size={size}
              data={data}
              totalProgress={totalProgress}
            />
          </Col>
        </Row>
      ) : (
        <Row className="card-info align-items-end">
          <Col xs="8" sm="8" md="9" className="">
            <RenderProjectInfo />
          </Col>
          <Col xs="4" sm="4" md="3" className="text-center">
            <RenderTotalProgress
              animationDuration={animationDuration}
              size={size}
              data={data}
              totalProgress={totalProgress}
            />
          </Col>
          <Col>
            <RenderProjectPrinciples />
          </Col>
        </Row>
      )}
    </Container>
  );
}
const PrincipleProgress = ({ completed, total, name }) => {
  return (
    <>
      <h3 className="mb-3">{name}</h3>
      <ProgressBar
        now={percentage(completed, total, 0)}
        label={`${percentage(completed, total, 0)}%`}
        className="my-2"
      />
      <p className="mb-0">CA cumplidos: {completed}</p>
      <p className="mb-0">CA pendientes: {total - completed}</p>
    </>
  );
};

const RenderProjectInfo = () => {
  return (
    <>
      <h2>Nombre del proyecto</h2>
      <ConformanceBox idConformance={1} className="d-inline-block" />
      <p className="d-inline-block ms-2">Nivel de conformidad WCAG objetivo</p>
    </>
  );
};

const RenderProjectPrinciples = () => {
  return (
    <Row className="principles">
      <Col sm="6" lg="3">
        <PrincipleProgress completed={1} total={3} name={"Perceptible"} />
      </Col>
      <Col sm="6" lg="3">
        <PrincipleProgress completed={1} total={4} name={"Operable"} />
      </Col>
      <Col sm="6" lg="3">
        <PrincipleProgress completed={1} total={4} name={"Entendible"} />
      </Col>
      <Col sm="6" lg="3">
        <PrincipleProgress completed={1} total={4} name={"Robusto"} />
      </Col>
      <p className="mt-3">*CA: Criterios de Conformidad</p>
    </Row>
  );
};

const RenderTotalProgress = ({
  animationDuration,
  size,
  data,
  totalProgress,
}) => {
  return (
    <>
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
        <VictoryPie
          standalone={false}
          animate={{ duration: animationDuration }}
          width={size}
          height={size}
          data={data}
          innerRadius={115}
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
                text={`${totalProgress}%`}
                style={{
                  fontSize: 45,
                  fontFamily: "Inter",
                  fontWeight: 500,
                }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
      <p>Progreso total</p>
    </>
  );
};
