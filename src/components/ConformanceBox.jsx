import React, { useState, useEffect } from "react";

export default function ConformanceBox({ idConformance, className, children }) {
  const [component, setComponent] = useState(<span></span>);
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (idConformance) {
      case 1:
        setTitle("Conformidad de nivel A");
        setComponent(<span>A</span>);
        break;
      case 2:
        setTitle("Conformidad de nivel AA");
        setComponent(<span>AA</span>);
        break;
      case 3:
        setTitle("Conformidad de nivel AAA");
        setComponent(<span>AAA</span>);
        break;
      case 4:
        setTitle("Público objetivo");
        setComponent(<i className="bi bi-person-check-fill"></i>);
        break;
      default:
        setTitle("");
        setComponent(<span></span>);
        break;
    }
  }, [idConformance]);

  return (
    <div
      title={title}
      className={`text-center p-0 conformance-box ${className}`}
    >
      {component}
      {children}
    </div>
  );
}
