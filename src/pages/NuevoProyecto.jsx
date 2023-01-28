import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Container, Form, Row, Spinner, Button, Modal } from "react-bootstrap";

import modalImg from "../img/complete-form.svg";
import { getCriteriaSlugByIndex } from "lib/functions";

export default function NuevoProyecto() {
  //const [validated, setValidated] = useState(false);
  let navigate = useNavigate();
  const [error, setError] = useState();
  const [nombre, setNombre] = useState("");
  const [tipoCriterios, setTipoCriterios] = useState(0);
  const [conformanceLevel, setConformanceLevel] = useState(0);
  const [proyectSelection, setProyectSelection] = useState(<p>Selecciona primero un método de selección de criterios de conformidad</p>);
  const ids = [1, 2, 3];
  const [totalComplete, setTotalComplete] = useState(0);
  const [conformanceCriteria, setConformanceCriteria] = useState([]);
  const [show, setShow] = useState(false);
  const [totalCriterios, setTotalCriterios] = useState(0);
  const [discSeleccionadas, setDiscSeleccionadas] = useState({});

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
    // es lint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let rowNav = document.getElementById("steps-nav").querySelectorAll(".dots");
    rowNav.forEach((l) => {
      if (!l.classList.contains("disabled")) {
        l.removeEventListener("click", addEventListenerToDot);
        l.addEventListener("click", addEventListenerToDot);
      }
    });
    // es lint-disable-next-line react-hooks/exhaustive-deps
  }, [totalComplete]);

  useEffect(() => {
    Number(tipoCriterios) === 1 ? setProyectSelection(<ProyectTypeConformance changeConformanceLevel={changeConformanceLevel} />) : Number(tipoCriterios) === 2 ? setProyectSelection(<ProyectTypePublic />) : <div></div>;
  }, [tipoCriterios]);

  async function loadCriteria(form, callback) {
    const headers = {
      headers: {},
    };
    const formData = new FormData(form);
    try {
      try {
        const data = await axios.post(`${process.env.REACT_APP_BACK_URL}/API/accesibilidad/listarCriterios.php`, formData, headers);
        const dataR = data.data;
        if (dataR.status) {
          setTotalCriterios(dataR.totalCriterios);
          callback(dataR.data);
        } else {
          setTotalCriterios(0);
          callback(false);
        }
        formData.has("proyect_name") && formData.delete("proyect_name");
        formData.has("proyect_type") && formData.delete("proyect_type");
        formData.has("proyect_conformance") && formData.delete("proyect_conformance");
        setDiscSeleccionadas({});
        const obj = {};
        for (const pair of formData.entries()) {
          const key = pair[0];
          obj[key] = pair[1];
        }
        setDiscSeleccionadas(obj);
      } catch (err) {
        console.log(err);
        callback(false);
      }
    } finally {
      document.getElementById("step-2-spinner").classList.add("d-none");
    }
  }

  function handleSubmitSt1(e) {
    e.preventDefault();
    setActive(2, 1);
    setTotalComplete(1);
    setConformanceCriteria([...[]]);
    const form = e.currentTarget;
    loadCriteria(form, (criteria) => {
      if (criteria) {
        setConformanceCriteria([...criteria]);
        document.getElementById("step-2-spinner").classList.remove("d-none");
      }
    });
    window.scrollTo(0, 0);
  }

  function handleSubmitSt2(e) {
    e.preventDefault();
    setActive(3, 2, 1);
    setTotalComplete(2);
    window.scrollTo(0, 0);
  }

  function handleGoBack(e) {
    e.preventDefault();
    setActive(e.target.dataset.id);
    window.scrollTo(0, 0);
  }

  async function handleCreateProyect(e) {
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
    try {
      const data = await axios.post(`${process.env.REACT_APP_BACK_URL}/API/proyectos/crear.php`, formData, headers);
      const dataR = data.data;
      if (dataR.status === 1) {
        setShow(true);
        document.getElementById("modal-continue").dataset.id = dataR.data.id;
      } else {
        //error
        setError("Por favor, revisa que los datos sean correctos e inténtalo de nuevo.");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function changeProyectType(e) {
    setTipoCriterios(Number(e.target.value));
  }

  function changeConformanceLevel(e) {
    setConformanceLevel(Number(e.target.value));
  }

  return (
    <Container fluid="sm" className="text-black p-lg-5 p-md-3 p-sm-2 app-nuevo-proyecto">
      <Row id="steps-nav" className="steps-nav mb-5">
        <div className="text-center">
          <h1>Nuevo proyecto</h1>
        </div>
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
              <Form.Label>Método de selección de criterios de conformidad</Form.Label>
              <Form.Check required name="proyect_type" id="proyect_type_1" type="radio" onChange={changeProyectType} value={1} label="Automática: en base a un nivel de conformidad" />
              <Form.Check required name="proyect_type" id="proyect_type_2" type="radio" onChange={changeProyectType} value={2} label="Automática: en base a un público objetivo" />
            </Form.Group>
            <p className="mb-1">Nota: todos los métodos incluyen los criterios marcados como obligatorios en WCAG 2.1, ya que su incumplimiento puede interferir con el uso de la página:</p>
            <ul className="m-0">
              <li>1.4.2 - Control del audio (Nivel A)</li>
              <li>2.1.2 - Sin trampas para el foco del teclado (Nivel A)</li>
              <li>2.3.1 - Umbral de tres destellos o menos (Nivel A)</li>
              <li>2.2.2 - Poner en pausa, detener, ocultar (Nivel A)</li>
            </ul>
          </Col>
          <Col md="6" xs="12">
            {proyectSelection}
          </Col>
          <Col xs="12" className="d-flex justify-content-end">
            <Button variant="outline-primary" type="submit" onSubmit={handleSubmitSt1}>
              Siguiente <i className="bi bi-arrow-right"></i>
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
              <p>A continuación se listan los Criterios de Conformidad que deberán satisfacerse para cumplir con {tipoCriterios === 2 ? "público objetivo seleccionado" : conformanceLevel === 1 ? "un Nivel de Conformidad A" : conformanceLevel === 2 ? "un Nivel de Conformidad AA" : "un Nivel de Conformidad AAA"}.</p>
              <p>Número total de criterios: {totalCriterios}</p>
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
                                  <p className="m-0">Nivel {criteria.level_name}</p>
                                </Col>
                                <Col xs="2" md="1" className="text-end">
                                  <a className="btn btn-info btn-sm" href={getCriteriaSlugByIndex(criteria.key)} target="_blank" title={`Consultar criterio ${criteria.key} ${criteria.name}`}>
                                    <i className="bi bi-info-circle"></i>
                                  </a>
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
            <Button variant="outline-primary" type="button" data-id="1" onClick={handleGoBack}>
              <i className="bi bi-arrow-left"></i> Anterior
            </Button>
            <Button variant="outline-primary" type="submit" onSubmit={handleSubmitSt2}>
              Siguiente <i className="bi bi-arrow-right"></i>
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
          <p className="field">Método de selección de criterios de conformidad: </p>
          <p className="value">{tipoCriterios === 1 ? "En base a un nivel de conformidad" : "En base a un público objetivo"}</p>
          {tipoCriterios === 1 ? (
            <>
              <p className="field">Nivel de conformidad:</p>
              <p className="value">{conformanceLevel === 1 ? "Nivel A" : conformanceLevel === 2 ? "Nivel AA" : "Nivel AAA"}</p>
            </>
          ) : (
            <>
              <p className="field">Discapacidades seleccionadas:</p>
              <div className="value">
                {discSeleccionadas.proyect_obj_1 && (
                  <div>
                    <p>Discapacidades visuales:</p>
                    <ul>
                      {discSeleccionadas.proyect_obj_1_1 && <li>Color</li>}
                      {discSeleccionadas.proyect_obj_1_2 && <li>Visión reducida</li>}
                      {discSeleccionadas.proyect_obj_1_3 && <li>Ceguera</li>}
                    </ul>
                  </div>
                )}
                {discSeleccionadas.proyect_obj_2 && (
                  <div>
                    <p>Discapacidades auditivas:</p>
                    <ul>
                      {discSeleccionadas.proyect_obj_2_1 && <li>Audición reducida</li>}
                      {discSeleccionadas.proyect_obj_2_2 && <li>Sordera</li>}
                    </ul>
                  </div>
                )}
                {discSeleccionadas.proyect_obj_4 && (
                  <div>
                    <p>Discapacidades cognitivas:</p>
                    <ul>
                      {discSeleccionadas.proyect_obj_4_1 && <li>TDH / dificultad comprension</li>}
                      {discSeleccionadas.proyect_obj_4_2 && <li>Dislexia</li>}
                      {discSeleccionadas.proyect_obj_4_3 && <li>Perdida memoria a corto plazo / memoria limitada</li>}
                    </ul>
                  </div>
                )}
                {discSeleccionadas.proyect_obj_3 && <p>Discapacidades motoras y Movilidad reducida</p>}
                <p>¿El público objetivo son personas mayores? {discSeleccionadas.proyect_obj_5 === "true" ? "Sí" : "No"}</p>
                <p>¿Incluir también nuestra selección de criterios recomendados? {discSeleccionadas.proyect_obj_6 === "true" ? "Sí" : "No"}</p>
              </div>
            </>
          )}
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
                              <span>{criteria.key}</span>- {criteria.name} (Nivel {criteria.level_name})
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
          <p id="bar-status" className={`text-end text-danger ${error ?? "d-none"}`}>
            <strong className="text-danger">Ha ocurrido un error.</strong> {error}
          </p>
        </Col>
        <Col xs="12" className="d-flex justify-content-between">
          <Button variant="outline-primary" type="button" data-id="2" onClick={handleGoBack}>
            <i className="bi bi-arrow-left"></i> Anterior
          </Button>
          <Button variant="primary" type="button" onClick={handleCreateProyect}>
            Crear proyecto
          </Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered className="drop-from-top only-continue no-border text-center">
        <Modal.Header className="flex-column">
          <img src={modalImg} alt="" />
          <Modal.Title>Proyecto creado correctamente</Modal.Title>
        </Modal.Header>
        <Modal.Body>El proyecto se ha creado correctamente. A continuación serás redirigido a la ficha del proyecto.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="modal-continue" onClick={handleClose}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const ProyectTypeConformance = ({ changeConformanceLevel }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="proyect_conformance">
        <Form.Label>Nivel de conformidad:</Form.Label>
        <Form.Check required name="proyect_conformance" id="proyect_conformance_1" type="radio" onChange={changeConformanceLevel} value={1} label="Nivel A" />
        <Form.Check required name="proyect_conformance" id="proyect_conformance_2" type="radio" onChange={changeConformanceLevel} value={2} label="Nivel AA" />
        <Form.Check required name="proyect_conformance" id="proyect_conformance_3" type="radio" onChange={changeConformanceLevel} value={3} label="Nivel AAA" />
      </Form.Group>
      <p>
        Ten en cuenta que en los criterios agrupados en un nivel también se encuentran los incluidos los criterios de los niveles anteriores.
        <br />
        Por ejemplo, el nivel AA incluye los criterios de nivel A y de nivel AA.
      </p>
    </>
  );
};

const ProyectTypePublic = () => {
  const [objVisual, setObjVisual] = useState(false);
  const [objAuditiva, setObjAuditiva] = useState(false);
  const [objCognitiva, setObjCognitiva] = useState(false);

  return (
    <div className="mb-3">
      <Form.Label>Selecciona las posibles discapacidades del público objetivo:</Form.Label>
      <Form.Check
        name="proyect_obj_1"
        id="proyect_obj_1"
        type="checkbox"
        onChange={(e) => {
          setObjVisual(e.target.checked);
        }}
        value={true}
        label="Discapacidades visuales"
      />
      {objVisual ? (
        <div className="px-3 py-1">
          <Form.Check name="proyect_obj_1_1" id="proyect_obj_1_1" type="checkbox" value={1} label="Color" />
          <Form.Check name="proyect_obj_1_2" id="proyect_obj_1_2" type="checkbox" value={2} label="Visión reducida" />
          <Form.Check name="proyect_obj_1_3" id="proyect_obj_1_3" type="checkbox" value={3} label="Ceguera" />
        </div>
      ) : (
        ""
      )}
      <Form.Check
        name="proyect_obj_2"
        id="proyect_obj_2"
        type="checkbox"
        onChange={(e) => {
          setObjAuditiva(e.target.checked);
        }}
        value={true}
        label="Discapacidades auditivas"
      />
      {objAuditiva ? (
        <div className="px-3 py-1">
          <Form.Check name="proyect_obj_2_1" id="proyect_obj_2_1" type="checkbox" value={4} label="Audición reducida" />
          <Form.Check name="proyect_obj_2_2" id="proyect_obj_2_2" type="checkbox" value={5} label="Sordera" />
        </div>
      ) : (
        ""
      )}
      <Form.Check
        name="proyect_obj_4"
        id="proyect_obj_4"
        type="checkbox"
        onChange={(e) => {
          setObjCognitiva(e.target.checked);
        }}
        value={true}
        label="Discapacidades cognitivas"
      />
      {objCognitiva ? (
        <div className="px-3 py-1">
          <Form.Check name="proyect_obj_4_1" id="proyect_obj_4_1" type="checkbox" value={7} label="TDH / dificultad comprension" />
          <Form.Check name="proyect_obj_4_2" id="proyect_obj_4_2" type="checkbox" value={8} label="Dislexia" />
          <Form.Check name="proyect_obj_4_3" id="proyect_obj_4_3" type="checkbox" value={9} label="Perdida memoria a corto plazo / memoria limitada" />
        </div>
      ) : (
        ""
      )}
      <Form.Check name="proyect_obj_3" id="proyect_obj_3" type="checkbox" value={6} label="Discapacidades motoras y Movilidad reducida" />
      <div className="pt-3">
        <Form.Group className="mb-3" controlId="proyect_obj_5">
          <Form.Label className="w-100">¿El público objetivo son personas mayores?</Form.Label>
          <Form.Check required name="proyect_obj_5" id="proyect_obj_5_1" type="radio" value={true} label="Sí" className="d-inline-block pe-3" />
          <Form.Check required name="proyect_obj_5" id="proyect_obj_5_2" type="radio" value={false} label="No" className="d-inline-block pe-3" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="proyect_obj_6">
          <Form.Label className="w-100">¿Incluir también nuestra selección de criterios recomendados?</Form.Label>
          <Form.Check required name="proyect_obj_6" id="proyect_obj_6_1" type="radio" value={true} label="Sí" className="d-inline-block pe-3" />
          <Form.Check required name="proyect_obj_6" id="proyect_obj_6_2" type="radio" value={false} label="No" className="d-inline-block pe-3" />
        </Form.Group>
      </div>
    </div>
  );
};
