import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Col, Container, Form, Row, InputGroup, Button } from "react-bootstrap";

export default function NuevoProyecto() {
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const [nombre, setNombre] = useState("");
  const [tipoCriterios, setTipoCriterios] = useState(0);
  const [conformance, setConformance] = useState(0);
  const [foo, setFoo] = useState(
    <p>Selecciona primero un método de selección de criterios de conformidad</p>
  );
  const ids = [1, 2, 3];
  const [totalComplete, setTotalComplete] = useState(0);
  const [conformanceCriteria, setConformanceCriteria] = useState([]);

  const addEventListenerToDot = useCallback((e) => {
    const id = Number(e.target.dataset.id);
    setActive(id);
  }, []);

  useEffect(() => {
    let rowNav = document.getElementById("steps-nav").querySelectorAll(".dots");
    rowNav.forEach((l) => {
      if (!l.classList.contains("disabled")) {
        l.removeEventListener("click", addEventListenerToDot);
        l.addEventListener("click", addEventListenerToDot);
      }
    });
  }, [totalComplete]);

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
        //console.log("always");
      });
  }

  async function handleSubmitSt1(e) {
    e.preventDefault();
    setActive(2, 1);
    setTotalComplete(1);
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
  }

  function changeProyectType(e) {
    setTipoCriterios(Number(e.target.value));
  }

  function changeConformanceLevel(e) {
    setConformance(Number(e.target.value));
  }

  return (
    <Container
      fluid="sm"
      className="text-black p-lg-5 p-md-3 p-sm-2 app-nuevo-proyecto"
    >
      <Row id="steps-nav" className="steps-nav">
        <Col>
          <Container className="w-75 d-flex">
            <Container
              id="dot-1"
              data-id="1"
              className="first active dots w-auto d-inline-block"
            >
              <i data-id="1" className="bi bi-arrow-right"></i>
            </Container>
            <Container
              id="dot-2"
              data-id="2"
              className="second dots w-auto d-inline-block disabled"
            >
              <i data-id="2" className="bi bi-arrow-right"></i>
            </Container>
            <Container
              id="dot-3"
              data-id="3"
              className="third dots w-auto d-inline-block disabled"
            >
              <i data-id="3" className="bi bi-arrow-right"></i>
            </Container>
          </Container>
        </Col>
      </Row>
      <Form validated={validated} onSubmit={handleSubmitSt1}>
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
                //checked={tipoCriterios === 1}
                onChange={changeProyectType}
                value={1}
                label="En base a un nivel de conformidad"
              />
              <Form.Check
                required
                name="proyect_type"
                id="proyect_type_2"
                type="radio"
                //checked={tipoCriterios === 2}
                onChange={changeProyectType}
                value={2}
                label="En base a un público objetivo"
                disabled
              />
            </Form.Group>
          </Col>
          <Col
            md="6"
            xs="12"
            //className="d-flex justify-content-end flex-column"
          >
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
            <ul className="principles-list">
              {conformanceCriteria.map((principle, index) => (
                <li key={index}>
                  <h3>
                    <span>{principle.code}</span>- {principle.name}
                  </h3>
                  <ul className="guidelines-list">
                    {principle.pautas.map((guidelines, indx) => (
                      <li key={indx}>
                        <h4>
                          <span>{guidelines.code}</span>- {guidelines.name}
                        </h4>
                        <ul className="criteria-list">
                          {guidelines.criterios.map((criteria, ind) => (
                            <li key={ind}>
                              <Form.Group
                                className="mb-3 d-inline-block"
                                controlId={`criteria_${criteria.code}`}
                              >
                                <Form.Check
                                  name={`proyect_criteria_${criteria.code}`}
                                  id={`criteria_${criteria.code}`}
                                  type="checkbox"
                                  defaultChecked={true}
                                  value={criteria.code}
                                  label={
                                    <h5>
                                      <span>{criteria.code}</span>-{" "}
                                      {criteria.name}
                                    </h5>
                                  }
                                />
                              </Form.Group>
                              <p className="d-inline-block float-end">
                                Nivel AAA
                              </p>
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
            {tipoCriterios == 1
              ? "En base a un nivel de conformidad"
              : "En base a un público objetivo"}
          </p>
          <p className="field">Nivel de conformidad:</p>
          <p className="value">
            {conformance == 1
              ? "Nivel A"
              : conformance == 2
              ? "Nivel AA"
              : "Nivel AAA"}
          </p>
        </Col>
        <Col md="6" xs="12" className="principles">
          <ul>
            {conformanceCriteria.map((principle, index) => (
              <li key={index}>
                <h3>
                  <span>{principle.code}</span>- {principle.name}
                </h3>
                <ul>
                  {principle.pautas.map((guidelines, indx) => (
                    <li key={indx}>
                      <h4>
                        <span>{guidelines.code}</span>- {guidelines.name}
                      </h4>
                      <ul>
                        {guidelines.criterios.map((criteria, ind) => (
                          <li key={ind}>
                            <h5>
                              <span>{criteria.code}</span>- {criteria.name}
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
            Siguiente
          </Button>
        </Col>
      </Row>
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
          //checked={Number(conformance) === 1}
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
          //checked={Number(conformance) === 2}
          onChange={changeConformanceLevel}
          value={2}
          label="Nivel AA"
        />
        <Form.Check
          required
          name="proyect_conformance"
          id="proyect_conformance_3"
          type="radio"
          //checked={Number(conformance) === 3}
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
