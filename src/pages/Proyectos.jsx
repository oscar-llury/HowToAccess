import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Table, Modal, Accordion } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConformanceBox from "../components/ConformanceBox";
import CodeBlock from "components/CodeBlock";

import wcag21_A_gold_png from "img/wcag-logos/wcag2.1-A-gold.png";
import wcag21_AA_gold_png from "img/wcag-logos/wcag2.1-AA-gold.png";
import wcag21_AAA_gold_png from "img/wcag-logos/wcag2.1-AAA-gold.png";
import wcag21_A_blue_png from "img/wcag-logos/wcag2.1-A-blue.png";
import wcag21_AA_blue_png from "img/wcag-logos/wcag2.1-AA-blue.png";
import wcag21_AAA_blue_png from "img/wcag-logos/wcag2.1-AAA-blue.png";

import wcag21_A_gold_svg from "img/wcag-logos/wcag2.1-A-gold.svg";
import wcag21_AA_gold_svg from "img/wcag-logos/wcag2.1-AA-gold.svg";
import wcag21_AAA_gold_svg from "img/wcag-logos/wcag2.1-AAA-gold.svg";
import wcag21_A_blue_svg from "img/wcag-logos/wcag2.1-A-blue.svg";
import wcag21_AA_blue_svg from "img/wcag-logos/wcag2.1-AA-blue.svg";
import wcag21_AAA_blue_svg from "img/wcag-logos/wcag2.1-AAA-blue.svg";

export default function Proyectos() {
  let navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const [show, setShow] = useState(false);
  const [level, setLevel] = useState(0);

  function handleNewProyect(e) {
    e.preventDefault();
    navigate("/nuevo-proyecto");
  }

  useEffect(async () => {
    //run when page loaded
    const headers = {
      headers: {},
    };
    try {
      const data = await axios.post(`${process.env.REACT_APP_BACK_URL}/API/proyectos/listar.php`, "token=" + token, headers);
      const dataR = data.data;
      if (dataR.status) {
        setProyectos(dataR.data);
      } else {
        console.dir(dataR);
      }
    } catch (err) {
      console.log(err);
    }
    // es lint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [proyectos, setProyectos] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

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
                <th className="text-center">Conformidad</th>
                <th className="text-center">Criterios</th>
                <th className="text-center">Insignia</th>
              </tr>
            </thead>
            <tbody>
              {proyectos.map((proyecto, index) => (
                <TableRowProyectos key={index} proyecto={proyecto} navigate={navigate} setShow={setShow} setLevel={setLevel} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} keyboard={false} size="lg" centered className="drop-from-top only-continue no-border text-center">
        <Modal.Header className="flex-column">
          <Modal.Title>Descargar insignias</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>A continuación puedes descargar las insignias WCAG con un nivel de conformidad {level == 1 ? "A" : level == 2 ? "AA" : "AAA"} para insertar en tu sitio web.</p>
          {(level > 0) & (level <= 3) ? (
            <Row>
              <Col xs="12" sm="6" className="text-center px-lg-5">
                {level == 1 ? (
                  <>
                    <img src={wcag21_A_gold_png} alt="Logo WCAG 2.1 Level A gold" className="mw-75" />
                    <p>
                      Formatos:{" "}
                      <a href={wcag21_A_gold_png} download="wcag21_A_gold" alt="wcag21_A_gold.png" title="wcag21_A_gold.png">
                        png
                      </a>{" "}
                      o{" "}
                      <a href={wcag21_A_gold_svg} download="wcag21_A_gold" alt="wcag21_A_gold.svg" title="wcag21_A_gold.svg">
                        svg
                      </a>
                    </p>
                  </>
                ) : level == 2 ? (
                  <>
                    <img src={wcag21_AA_gold_png} alt="Logo WCAG 2.1 Level AA gold" className="mw-75" />
                    <p>
                      Formatos:{" "}
                      <a href={wcag21_AA_gold_png} download="wcag21_AA_gold" alt="wcag21_AA_gold.png" title="wcag21_AA_gold.png">
                        png
                      </a>{" "}
                      o{" "}
                      <a href={wcag21_AA_gold_svg} download="wcag21_AA_gold" alt="wcag21_AA_gold.svg" title="wcag21_AA_gold.svg">
                        svg
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <img src={wcag21_AAA_gold_png} alt="Logo WCAG 2.1 Level AAA gold" className="mw-75" />
                    <p>
                      Formatos:{" "}
                      <a href={wcag21_AAA_gold_png} download="wcag21_AAA_gold" alt="wcag21_AAA_gold.png" title="wcag21_AAA_gold.png">
                        png
                      </a>{" "}
                      o{" "}
                      <a href={wcag21_AAA_gold_svg} download="wcag21_AAA_gold" alt="wcag21_AAA_gold.svg" title="wcag21_AAA_gold.svg">
                        svg
                      </a>
                    </p>
                  </>
                )}
              </Col>
              <Col xs="12" sm="6" className="text-center px-lg-5">
                {level == 1 ? (
                  <>
                    <img src={wcag21_A_blue_png} alt="Logo WCAG 2.1 Level A blue" className="mw-75" />
                    <p>
                      Formatos:{" "}
                      <a href={wcag21_A_blue_png} download="wcag21_A_blue" alt="wcag21_A_blue.png" title="wcag21_A_blue.png">
                        png
                      </a>{" "}
                      o{" "}
                      <a href={wcag21_A_blue_svg} download="wcag21_A_blue" alt="wcag21_A_blue.svg" title="wcag21_A_blue.svg">
                        svg
                      </a>
                    </p>
                  </>
                ) : level == 2 ? (
                  <>
                    <img src={wcag21_AA_blue_png} alt="Logo WCAG 2.1 Level AA blue" className="mw-75" />
                    <p>
                      Formatos:{" "}
                      <a href={wcag21_AA_blue_png} download="wcag21_AA_blue" alt="wcag21_AA_blue.png" title="wcag21_AA_blue.png">
                        png
                      </a>{" "}
                      o{" "}
                      <a href={wcag21_AA_blue_svg} download="wcag21_AA_blue" alt="wcag21_AA_blue.svg" title="wcag21_AA_blue.svg">
                        svg
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <img src={wcag21_AAA_blue_png} alt="Logo WCAG 2.1 Level AAA blue" className="mw-75" />
                    <p>
                      Formatos:{" "}
                      <a href={wcag21_AAA_blue_png} download="wcag21_AAA_blue" alt="wcag21_AAA_blue.png" title="wcag21_AAA_blue.png">
                        png
                      </a>{" "}
                      o{" "}
                      <a href={wcag21_AAA_blue_svg} download="wcag21_AAA_blue" alt="wcag21_AAA_blue.svg" title="wcag21_AAA_blue.svg">
                        svg
                      </a>
                    </p>
                  </>
                )}
              </Col>
            </Row>
          ) : (
            ""
          )}
          <Accordion className="mx-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Mostrar código de inserción</Accordion.Header>
              <Accordion.Body>
                {level == 1 ? (
                  <CodeBlock code={"<a href='https://www.w3.org/WAI/WCAG2A-Conformance'\ntitle='Explanation of WCAG 2.1 Level A Conformance'>\n\t<img height='32' width='88' src='wcag2.1-A-gold.png'\n\talt='Level A conformance, W3C WAI WCAG 2.1'/>\n</a>"} language="html" className="text-start" />
                ) : level == 2 ? (
                  <CodeBlock code={"<a href='https://www.w3.org/WAI/WCAG2AA-Conformance'\ntitle='Explanation of WCAG 2.1 Level AA Conformance'>\n\t<img height='32' width='88' src='wcag2.1-AA-gold.png'\n\talt='Level AA conformance, W3C WAI WCAG 2.1'/>\n</a>"} language="html" className="text-start" />
                ) : (
                  <CodeBlock code={"<a href='https://www.w3.org/WAI/WCAG2AAA-Conformance'\ntitle='Explanation of WCAG 2.1 Level AAA Conformance'>\n\t<img height='32' width='88' src='wcag2.1-AAA-gold.png'\n\talt='Level AAA conformance, W3C WAI WCAG 2.1'/>\n</a>"} language="html" className="text-start" />
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="modal-continue" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const TableRowProyectos = ({ proyecto, navigate, setShow, setLevel }) => {
  const handleShow = () => {
    setLevel(proyecto.conformidad);
    setShow(true);
  };

  return (
    <tr id={"proyecto_" + proyecto.id} className="proyecto-row">
      <td className="text-start">
        <a href={`/proyectos/${proyecto.id}`} title="Ver datos del proyecto" className="link">
          {proyecto.nombre}
        </a>
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
        <ConformanceBox className="m-auto" idConformance={proyecto.conformidad} />
      </td>
      <td className="text-center">
        <span>{proyecto.criteriosF}</span>/<span>{proyecto.criteriosT}</span>
      </td>
      <td className="text-center">
        {proyecto.estado & (proyecto.conformidad > 0) & (proyecto.conformidad <= 3) ? (
          <button className="btn px-2 py-0 rounded-3" title="Descargar insignias" onClick={handleShow}>
            <i className="bi bi-download" id={proyecto.id}></i>
          </button>
        ) : (
          <span></span>
        )}
      </td>
    </tr>
  );
};
