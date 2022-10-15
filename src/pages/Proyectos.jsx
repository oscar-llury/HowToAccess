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
      .post(
        `${process.env.REACT_APP_BACK_URL}/API/proyectos/listar.php`,
        "token=" + token,
        headers
      )
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
    <Container fluid="sm" className="text-black p-lg-5">
      <Row className="px-5 my-5">
        <Col lg="8" md="8" xs="12">
          <Container className="text-start">
            <h1>Mis proyectos</h1>
          </Container>
        </Col>
        <Col lg="4" md="4" xs="12">
          <Container className="text-center">
            <Button
              variant="primary"
              type="button"
              className=""
              onClick={handleNewProyect}
            >
              Nuevo proyecto
            </Button>
          </Container>
        </Col>
      </Row>
      <Row className="px-5">
        <Col xs="12">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Estado</th>
                <th>Nombre del proyecto</th>
                <th>Conformidad</th>
                <th>Criterios</th>
                <th>Insignia</th>
              </tr>
            </thead>
            <tbody>
              {proyectos.map((proyecto, index) => (
                <TableRowProyectos
                  key={index}
                  proyecto={proyecto}
                  navigate={navigate}
                />
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
    <tr id={"proyecto_" + proyecto.id} data-id={proyecto.id}>
      <td>
        {proyecto.estado ? (
          <i className="bi bi-check-circle" title="Proyecto completado"></i>
        ) : (
          <i className="bi bi-three-dots" title="Proyecto en curso"></i>
        )}
      </td>
      <td
        className="text-start link"
        title="Ver datos del proyecto"
        onClick={(e) => {
          navigate(e.target.parentNode.dataset.id);
        }}
      >
        {proyecto.nombre}
      </td>
      <td>
        <ConformanceBox idConformance={proyecto.conformidad} />
      </td>
      <td>
        <span>{proyecto.criteriosF}</span>/<span>{proyecto.criteriosT}</span>
      </td>
      <td>
        {proyecto.estado ? (
          <button
            className="btn px-4 py-0"
            title="Descargar insignias"
            onClick={handleDownload}
          >
            <i className="bi bi-download" id={proyecto.id}></i>
          </button>
        ) : (
          <span></span>
        )}
      </td>
    </tr>
  );
};
