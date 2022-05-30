import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Proyecto() {
  const params = useParams();

  return (
    <div>
      <h2>Id: {params.proyectoId}</h2>

      <Link to="/proyectos">Volver a proyectos</Link>
    </div>
  );
}
