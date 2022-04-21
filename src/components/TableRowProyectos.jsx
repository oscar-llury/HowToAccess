import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

async function handleDownload(e) {
  e.preventDefault();
  console.dir(e.target.id);
}

function renderConformidad(nivel) {
  switch (nivel) {
    case 1:
      return <span title="Conformidad de nivel A">A</span>;
    case 2:
      return <span title="Conformidad de nivel AA">AA</span>;
    case 3:
      return <span title="Conformidad de nivel AAA">AAA</span>;
    case 4:
      return (
        <i className="bi bi-person-check-fill" title="Público objetivo"></i>
      );
    default:
      return <span></span>;
  }
}

export default function TableRowProyectos({ proyecto }) {
  const navigate = useNavigate();

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
        className="text-start text-hover"
        title="Ver datos del proyecto"
        onClick={(e) => {
          navigate(e.target.parentNode.dataset.id);
        }}
      >
        {proyecto.nombre}
      </td>
      <td>
        <Container
          className="text-center p-0"
          style={{
            width: "70px",
            margin: "auto",
            backgroundColor: "white",
            border: "1px solid black",
          }}
        >
          {renderConformidad(proyecto.conformidad)}
        </Container>
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
}
