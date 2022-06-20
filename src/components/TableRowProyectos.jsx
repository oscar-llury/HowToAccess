import React from "react";
import { useNavigate } from "react-router-dom";
import ConformanceBox from "./ConformanceBox";

async function handleDownload(e) {
  e.preventDefault();
  console.dir(e.target.id);
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
}
