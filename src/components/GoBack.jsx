import React from "react";
import { useNavigate } from "react-router";

export default function GoBack({ urlProp, text }) {
  const navigate = useNavigate();
  const url = urlProp ? urlProp : -1;

  return (
    <button className="btn btn-link p-0 mb-3" onClick={() => navigate(url)}>
      <i className="bi bi-arrow-left"></i>
      {text ? text : "Volver"}
    </button>
  );
}
