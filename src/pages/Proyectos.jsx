import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

import TableRowProyectos from "../components/TableRowProyectos";

function handleNewProyect(e) {
  e.preventDefault();
}

export default function Proyectos() {
  const token = useSelector((state) => state.token);

  useEffect(() => {
    //run when page loaded
    const headers = {
      headers: {},
    };
    return axios
      .post(
        `${process.env.REACT_APP_BACK_URL}login.php`,
        "token=" + token,
        headers
      )
      .then((data) => {
        const dataR = data.data.data;
        console.dir(dataR);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((e) => {
        console.log("always");
      });
  }, []);

  const [proyectos, setProyectos] = useState([
    {
      id: 1,
      estado: false,
      nombre: "Nombre del proyecto 1",
      conformidad: "A",
      criteriosF: 15,
      criteriosT: 20,
    },
    {
      id: 2,
      estado: true,
      nombre:
        "Nombre del proyecto 2 agd adgfdagads adgfdsagf adsfdsagf adsgfdsagf asfdsa",
      conformidad: "AAA",
      criteriosF: 20,
      criteriosT: 20,
    },
  ]);

  return (
    <Container fluid className="text-black p-lg-5">
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
                <TableRowProyectos key={index} proyecto={proyecto} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
