import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConformanceBox from "../components/ConformanceBox";

export default function Proyectos() {
  let navigate = useNavigate();
  const token = useSelector((state) => state.token);

  function handleNewProyect(e) {
    e.preventDefault();
    navigate("/nuevo-proyecto");
  }

  useEffect(() => {
    //run when page loaded
    const headers = {
      headers: {},
    };
    return axios
      .post(`${process.env.REACT_APP_BACK_URL}/API/proyectos/listar.php`, "token=" + token, headers)
      .then((data) => {
        const dataR = data.data;
        if (dataR.status) {
          setProyectos(dataR.data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [proyectos, setProyectos] = useState([]);

  return (
    <Container fluid="sm" className="app-proyectos text-black p-lg-5">
      <Row className="px-2 px-lg-5 header justify-content-between">
        <Col lg="8" md="8" sm="6" xs="12" className="p-0">
          <Container className="title">
            <h1>Mis proyectos</h1>
          </Container>
        </Col>
        <Col lg="4" md="4" sm="5" xs="12" className="p-0">
          <Container className="button">
            <Button size="sm" variant="primary" type="button" className="" onClick={handleNewProyect}>
              Nuevo proyecto
            </Button>
          </Container>
        </Col>
      </Row>
      <Row className="px-2 px-lg-5">
        <Col xs="12">
          <Table borderless hover responsive className="proyectos-table">
            <thead>
              <tr>
                <th>Nombre del proyecto</th>
                <th>Estado</th>
                <th>Conformidad</th>
                <th>Criterios</th>
                <th className="text-center">Insignia</th>
              </tr>
            </thead>
            <tbody>
              {proyectos.map((proyecto, index) => (
                <TableRowProyectos key={index} proyecto={proyecto} navigate={navigate} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

async function handleDownload(e) {
  e.preventDefault();
  console.dir(e.target.id);
}

const TableRowProyectos = ({ proyecto, navigate }) => {
  return (
    <tr id={"proyecto_" + proyecto.id} data-id={proyecto.id} className="proyecto-row">
      <td
        className="text-start link"
        title="Ver datos del proyecto"
        onClick={(e) => {
          navigate(e.target.parentNode.dataset.id);
        }}
      >
        {proyecto.nombre}
      </td>
      <td className="estado">
        {proyecto.estado ? (
          <>
            <i className="bi bi-circle-fill text-success-light fs-05" title="Proyecto completado"></i>
            Completado
          </>
        ) : (
          <>
            <i className="bi bi-circle-fill text-warning fs-05" title="Proyecto en curso"></i>
            En curso
          </>
        )}
      </td>
      <td>
        <ConformanceBox idConformance={proyecto.conformidad} />
      </td>
      <td>
        <span>{proyecto.criteriosF}</span>/<span>{proyecto.criteriosT}</span>
      </td>
      <td className="text-center">
        {proyecto.estado ? (
          <button className="btn px-2 py-0" title="Descargar insignias" onClick={handleDownload}>
            <i className="bi bi-download" id={proyecto.id}></i>
          </button>
        ) : (
          <span></span>
        )}
      </td>
    </tr>
  );
};
