import axios from "axios";
import ConformanceBox from "components/ConformanceBox";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";
import { percentage } from "../lib/functions";
import { useSelector } from "react-redux";

export default function Proyecto() {
  const params = useParams();
  const navigate = useNavigate();
  const id_pjt = params.proyectoId;
  const tokenRedux = useSelector((state) => state.token);
  const [info, setInfo] = useState({});
  const [criteria, setCriteria] = useState([]);
  const [principles, setPrinciples] = useState([]);
  const [windowWd, detectWd] = useState(window.innerWidth);
  const size = 300;
  const animationDuration = 2000;
  const [totalProgress, setTotalProgress] = useState([
    { x: 1, y: 0 },
    { x: 2, y: 100 },
  ]);

  const detectSize = () => {
    detectWd(window.innerWidth);
  };

  function getData(total, progress) {
    const perc = percentage(progress, total, 0);
    return [
      { x: 1, y: perc },
      { x: 2, y: 100 - perc },
    ];
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowWd]);
  /*
  useEffect(() => {
    setData(getData(totalProgress > 100 ? 0 : totalProgress));
  }, [totalProgress]);*/

  useEffect(() => {
    //run when page loaded
    let formData = new FormData();
    formData.append("proyectoId", id_pjt);

    return axios
      .post(
        `${process.env.REACT_APP_BACK_URL}/API/proyectos/info.php`,
        formData,
        {
          headers: {},
        }
      )
      .then((data) => {
        const dataR = data.data;
        if (dataR.status) {
          setInfo(dataR.data);
          setCriteria(dataR.data.criterios);
          setPrinciples(dataR.data.principios);
          setTotalProgress(
            getData(
              dataR.data.criterios_totales,
              dataR.data.criterios_cumplidos
            )
          );
        } else {
          console.dir(dataR);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((e) => {
        //console.log("always");
      });
  }, [id_pjt]);

  const handleCompleteCriteria = (e) => {
    e.preventDefault();
    const index_e = e.target.dataset.id;

    //el id a enviar de pro_has_criterio = completado
    let formData = new FormData();
    formData.append("id", criteria[index_e].id);
    formData.append("proyectoId", id_pjt);
    formData.append("token", tokenRedux);

    return axios
      .post(
        `${process.env.REACT_APP_BACK_URL}/API/proyectos/completarCriterio.php`,
        formData,
        { headers: {} }
      )
      .then((data) => {
        const dataR = data.data;
        if (dataR.status === 1) {
          const newCriteria = criteria.slice(0);
          newCriteria[index_e].completado = 1;
          setCriteria(newCriteria);

          const newPrinciples = principles.slice(0);
          newPrinciples[criteria[index_e].principio - 1].cumplidos++;
          setPrinciples(newPrinciples);

          info.criterios_cumplidos++;
          info.criterios = criteria;
          info.principios = principles;

          setTotalProgress(
            getData(info.criterios_totales, info.criterios_cumplidos + 1)
          );
        } else {
          //error
          console.dir(dataR);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container fluid="sm" className="app-proyecto p-lg-5">
      <div>
        <Link to="/proyectos">
          <i className="bi bi-arrow-left"></i>Volver a proyectos
        </Link>
      </div>
      {windowWd >= 992 ? (
        <Row className="card-info align-items-center">
          <Col lg="9" className="">
            <RenderProjectInfo
              name={info.nombre}
              idConformance={info.conformidad}
            />
            <RenderProjectPrinciples principles={principles} />
          </Col>
          <Col lg="3" className="text-center">
            <RenderTotalProgress
              animationDuration={animationDuration}
              size={size}
              data={totalProgress}
              info={info}
            />
          </Col>
        </Row>
      ) : (
        <div className="card-info flex-wrap">
          <Row className="align-items-center flex-wrap">
            <Col xs="8" sm="8" md="9" className="">
              <RenderProjectInfo
                name={info.nombre}
                idConformance={info.conformidad}
              />
            </Col>
            <Col xs="4" sm="4" md="3" className="text-center">
              <RenderTotalProgress
                animationDuration={animationDuration}
                size={size}
                data={totalProgress}
                info={info}
              />
            </Col>
          </Row>
          <RenderProjectPrinciples principles={principles} />
        </div>
      )}
      <Container className="criterios">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="text-center">Estado</th>
              <th className="text-center">Indice</th>
              <th className="text-center">Conformidad</th>
              <th>Nombre del criterio</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((criteria, index) => (
              <tr id={"criteria_" + index} key={index}>
                <td className="text-center status">
                  {criteria.completado ? (
                    <i
                      className="bi bi-check-circle"
                      title="Proyecto completado"
                    ></i>
                  ) : (
                    <i
                      className="bi bi-three-dots"
                      title="Proyecto en curso"
                    ></i>
                  )}
                </td>
                <td className="text-center">{criteria.indice}</td>
                <td>
                  <ConformanceBox idConformance={criteria.conformidad} />
                </td>
                <td
                  className="link"
                  onClick={() => {
                    navigate(criteria.id);
                  }}
                >
                  <a href="#c">{criteria.nombre}</a>
                </td>
                <td className="text-center">
                  {criteria.completado ? (
                    <span></span>
                  ) : (
                    <button
                      className="btn px-4 py-0 cursor-pointer"
                      title="Marcar criterio como cumplido"
                      onClick={handleCompleteCriteria}
                      data-id={index}
                    >
                      <i className="bi bi-check2-circle" data-id={index}></i>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
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

const RenderProjectInfo = ({ name, idConformance }) => {
  return (
    <>
      <h2>{name}</h2>
      <ConformanceBox
        idConformance={idConformance}
        className="d-inline-block"
      />
      <p className="d-inline-block ms-2">Nivel de conformidad WCAG objetivo</p>
    </>
  );
};

const RenderProjectPrinciples = ({ principles }) => {
  return (
    <Row className="principles">
      {principles.map((principle, index) => (
        <Col sm="6" lg="3" className="box" key={index}>
          <PrincipleProgress
            completed={principle.cumplidos}
            total={principle.total}
            name={principle.nombre}
          />
        </Col>
      ))}

      <p className="mt-3">*CA: Criterios de Conformidad</p>
    </Row>
  );
};

const RenderTotalProgress = ({ animationDuration, size, data, info }) => {
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
          /*
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
          ]}*/
          style={{
            data: {
              fill: ({ datum }) => {
                const color = datum.y > 30 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              },
            },
          }}
        />
        <VictoryAnimation duration={animationDuration} data={data} info={info}>
          {(newProps) => {
            return (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={size / 2}
                y={size / 2}
                text={`${percentage(
                  info.criterios_cumplidos,
                  info.criterios_totales,
                  0
                )}%`}
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
