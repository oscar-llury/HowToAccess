import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Button,
  Modal,
} from "react-bootstrap";

import modalImg from "../img/complete-form.svg";

export default function NuevoProyecto() {
  //const [validated, setValidated] = useState(false);
  let navigate = useNavigate();
  const [error, setError] = useState();
  const [nombre, setNombre] = useState("");
  const [tipoCriterios, setTipoCriterios] = useState(0);
  const [conformanceLevel, setConformanceLevel] = useState(0);
  const [foo, setFoo] = useState(
    <p>Selecciona primero un método de selección de criterios de conformidad</p>
  );
  const ids = [1, 2, 3];
  const [totalComplete, setTotalComplete] = useState(0);
  const [conformanceCriteria, setConformanceCriteria] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    setShow(false);
    navigate("/proyectos/" + e.target.dataset.id);
  };

  function setActive(active, ...completed) {
    if (completed.length > 0) {
      completed.forEach((i) => {
        //completed
        document.getElementById(`step-${i}`).classList.add("d-none");

        let foo = document.getElementById(`dot-${i}`);
        foo.classList.add("completed");
        foo.classList.remove("active");
      });
    } else {
      const idCopy = [...ids];
      const index = idCopy.indexOf(active);
      if (index > -1) {
        idCopy.splice(index, 1); // 2nd parameter means remove one item only
      }
      idCopy.forEach((i) => {
        document.getElementById(`step-${i}`).classList.add("d-none");

        let foo = document.getElementById(`dot-${i}`);
        //foo.classList.add("disabled");
        foo.classList.remove("active");
      });
    }
    //active
    document.getElementById(`step-${active}`).classList.remove("d-none");
    let foo = document.getElementById(`dot-${active}`);
    foo.classList.remove("disabled");
    foo.classList.add("active");
  }

  const addEventListenerToDot = useCallback((e) => {
    const id = Number(e.target.dataset.id);
    setActive(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let rowNav = document.getElementById("steps-nav").querySelectorAll(".dots");
    rowNav.forEach((l) => {
      if (!l.classList.contains("disabled")) {
        l.removeEventListener("click", addEventListenerToDot);
        l.addEventListener("click", addEventListenerToDot);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalComplete]);

  useEffect(() => {
    Number(tipoCriterios) === 1 ? (
      setFoo(<ProyectTypeConformance />)
    ) : Number(tipoCriterios) === 2 ? (
      setFoo(<ProyectTypePublic />)
    ) : (
      <div></div>
    );
  }, [tipoCriterios]);

  function loadCriteria(callback) {
    const headers = {
      headers: {},
    };
    const formData = new FormData();
    formData.append("conformanceLevel", conformanceLevel);
    return axios
      .post(
        `${process.env.REACT_APP_BACK_URL}/API/accesibilidad/listarCriterios.php`,
        formData,
        headers
      )
      .then((data) => {
        const dataR = data.data;
        if (dataR.status) {
          callback(dataR.data);
        } else {
          console.dir(dataR);
          callback(false);
        }
      })
      .catch((err) => {
        console.log(err);
        callback(false);
      })
      .finally((e) => {
        document.getElementById("step-2-spinner").classList.add("d-none");
      });
  }

  async function handleSubmitSt1(e) {
    e.preventDefault();
    setActive(2, 1);
    setTotalComplete(1);
    setConformanceCriteria([]);
    document.getElementById("step-2-spinner").classList.remove("d-none");
    await loadCriteria((criteria) => {
      if (criteria) {
        setConformanceCriteria([...criteria]);
      }
    });
  }

  function handleSubmitSt2(e) {
    e.preventDefault();
    setActive(3, 2, 1);
    setTotalComplete(2);
  }

  function handleGoBack(e) {
    e.preventDefault();
    console.dir(e.target);
    setActive(e.target.dataset.id);
  }

  function handleCreateProyect(e) {
    e.preventDefault();
    const headers = {
      headers: {},
    };
    const formData = new FormData();
    formData.append("name", nombre);
    formData.append("tipoCriterios", tipoCriterios);
    formData.append("conformanceLevel", conformanceLevel);

    let criterios_list = [];

    conformanceCriteria.forEach((principio, _) => {
      principio.pautas.forEach((pauta, _) => {
        pauta.criterios.forEach((criterio, _) => {
          const val = {
            principio: principio.code,
            pauta: pauta.code,
            criterio: criterio.code,
          };
          criterios_list.push(val);
        });
      });
    });
    formData.append("criterios_list", JSON.stringify(criterios_list));
    return axios
      .post(
        `${process.env.REACT_APP_BACK_URL}/API/proyectos/crear.php`,
        formData,
        headers
      )
      .then((data) => {
        const dataR = data.data;
        console.log(dataR);
        if (dataR.status === 1) {
          setShow(true);
          document.getElementById("modal-continue").dataset.id = dataR.data.id;
        } else {
          //error
          setError(
            "Por favor, revisa que los datos sean correctos e inténtalo de nuevo."
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function changeProyectType(e) {
    setTipoCriterios(Number(e.target.value));
  }

  function changeConformanceLevel(e) {
    setConformanceLevel(Number(e.target.value));
  }

  return (
    <Container
      fluid="sm"
      className="text-black p-lg-5 p-md-3 p-sm-2 app-nuevo-proyecto"
    >
      <Row id="steps-nav" className="steps-nav">
        <Col xs="12">
          <ol className="steps">
            <li id="dot-1" data-id="1" className="dots active">
              Datos del proyecto
            </li>
            <li id="dot-2" data-id="2" className="dots disabled">
              Selección de criterios
            </li>
            <li id="dot-3" data-id="3" className="dots disabled">
              Resumen de datos
            </li>
          </ol>
        </Col>
      </Row>
      <Form onSubmit={handleSubmitSt1}>
        <Row id="step-1" className="form-proyecto step-1">
          <Col xs="12" className="text-center mb-3">
            <h2>Datos del proyecto</h2>
          </Col>
          <Col md="6" xs="12">
            <Form.Group className="mb-3" controlId="proyect_name">
              <Form.Label>Nombre del proyecto</Form.Label>
              <Form.Control
                name="proyect_name"
                type="text"
                placeholder=""
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="proyect_type">
              <Form.Label>
                Método de selección de criterios de conformidad
              </Form.Label>
              <Form.Check
                required
                name="proyect_type"
                id="proyect_type_1"
                type="radio"
                onChange={changeProyectType}
                value={1}
                label="Automática: en base a un nivel de conformidad"
              />
              <Form.Check
                required
                name="proyect_type"
                id="proyect_type_2"
                type="radio"
                onChange={changeProyectType}
                value={2}
                label="Automática: en base a un público objetivo"
                disabled
              />
            </Form.Group>
          </Col>
          <Col md="6" xs="12">
            {foo}
          </Col>
          <Col xs="12" className="d-flex justify-content-end">
            <Button variant="primary" type="submit" onSubmit={handleSubmitSt1}>
              Siguiente
            </Button>
          </Col>
        </Row>
      </Form>
      <Row id="step-2" className="form-proyecto step-2 d-none">
        <Col xs="12" className="text-center mb-3">
          <h2>Selección de criterios</h2>
        </Col>
        <Form onSubmit={handleSubmitSt2}>
          <Col xs="12">
            <Container className="text-center mb-3">
              A continuación se listan los Criterios de Conformidad que deberán
              satisfacerse para cumplir con un Nivel de Conformidad{" "}
              {conformanceLevel === 1
                ? " A"
                : conformanceLevel === 2
                ? "AA"
                : "AAA"}
              .
            </Container>
            <Container id="step-2-spinner" className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Container>
            <ul className="principles-list">
              {conformanceCriteria.map((principle, index) => (
                <li key={index}>
                  <h3>
                    <span>{principle.key}</span>- {principle.name}
                  </h3>
                  <ul className="guidelines-list">
                    {principle.pautas.map((guidelines, indx) => (
                      <li key={indx}>
                        <h4>
                          <span>{guidelines.key}</span>- {guidelines.name}
                        </h4>
                        <ul className="criteria-list">
                          {guidelines.criterios.map((criteria, ind) => (
                            <li key={ind}>
                              <Row className="align-items-center">
                                <Col xs="6" md="8">
                                  <h5 className="m-0">
                                    <span>{criteria.key}</span>- {criteria.name}
                                  </h5>
                                </Col>
                                <Col xs="4" md="3" className="text-end">
                                  <p className="m-0">
                                    Nivel {criteria.level_name}
                                  </p>
                                </Col>
                                <Col xs="2" md="1" className="text-end">
                                  <Button
                                    variant="info"
                                    href="#"
                                    size="sm"
                                    target="blank"
                                    title="Consultar criterio"
                                  >
                                    <i className="bi bi-info-circle"></i>
                                  </Button>
                                </Col>
                              </Row>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs="12" className="d-flex justify-content-between">
            <Button
              variant="primary"
              type="button"
              data-id="1"
              onClick={handleGoBack}
            >
              Anterior
            </Button>
            <Button variant="primary" type="submit" onSubmit={handleSubmitSt2}>
              Siguiente
            </Button>
          </Col>
        </Form>
      </Row>
      <Row id="step-3" className="form-proyecto step-3 d-none">
        <Col xs="12" className="text-center mb-3">
          <h2>Resumen de datos del proyecto</h2>
        </Col>

        <Col md="6" xs="12" className="project-data">
          <p className="field">Nombre del proyecto:</p>
          <p className="value">{nombre}</p>
          <p className="field">
            Método de selección de criterios de conformidad:{" "}
          </p>
          <p className="value">
            {tipoCriterios === 1
              ? "En base a un nivel de conformidad"
              : "En base a un público objetivo"}
          </p>
          <p className="field">Nivel de conformidad:</p>
          <p className="value">
            {conformanceLevel === 1
              ? "Nivel A"
              : conformanceLevel === 2
              ? "Nivel AA"
              : "Nivel AAA"}
          </p>
        </Col>
        <Col md="6" xs="12" className="principles">
          <p className="field">Listado de Criterios de Conformidad:</p>
          <ul>
            {conformanceCriteria.map((principle, index) => (
              <li key={index}>
                <h3>
                  <span>{principle.key}</span>- {principle.name}
                </h3>
                <ul>
                  {principle.pautas.map((guidelines, indx) => (
                    <li key={indx}>
                      <h4>
                        <span>{guidelines.key}</span>- {guidelines.name}
                      </h4>
                      <ul>
                        {guidelines.criterios.map((criteria, ind) => (
                          <li key={ind}>
                            <h5>
                              <span>{criteria.key}</span>- {criteria.name}{" "}
                              (Nivel {criteria.level_name})
                            </h5>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs="12">
          <p
            id="bar-status"
            className={`text-end text-danger ${error ?? "d-none"}`}
          >
            <strong className="text-danger">Ha ocurrido un error.</strong>{" "}
            {error}
          </p>
        </Col>
        <Col xs="12" className="d-flex justify-content-between">
          <Button
            variant="primary"
            type="button"
            data-id="2"
            onClick={handleGoBack}
          >
            Anterior
          </Button>
          <Button variant="primary" type="button" onClick={handleCreateProyect}>
            Crear proyecto
          </Button>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="drop-from-top only-continue no-border text-center"
      >
        <Modal.Header className="flex-column">
          <img src={modalImg} alt="" />
          <Modal.Title>Proyecto creado correctamente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El proyecto se ha creado correctamente. A continuación serás
          redirigido a la ficha del proyecto.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="modal-continue" onClick={handleClose}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );

  function ProyectTypeConformance() {
    return (
      <Form.Group className="mb-3" controlId="proyect_conformance">
        <Form.Label>Nivel de conformidad</Form.Label>
        <Form.Check
          required
          name="proyect_conformance"
          id="proyect_conformance_1"
          type="radio"
          onChange={changeConformanceLevel}
          value={1}
          label="Nivel A"
          title="Nivel A"
        />
        <Form.Check
          required
          name="proyect_conformance"
          id="proyect_conformance_2"
          type="radio"
          onChange={changeConformanceLevel}
          value={2}
          label="Nivel AA"
        />
        <Form.Check
          required
          name="proyect_conformance"
          id="proyect_conformance_3"
          type="radio"
          onChange={changeConformanceLevel}
          value={3}
          label="Nivel AAA"
        />
        <p>
          Ten en cuenta que los criterios agrupados en un nivel también se
          encuentran incluidos en el siguiente nivel.
        </p>
      </Form.Group>
    );
  }

  function ProyectTypePublic() {
    return <></>;
  }
}
