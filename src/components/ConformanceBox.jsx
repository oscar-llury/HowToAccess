import React, { useState, useEffect } from "react";

export default function ConformanceBox({ idConformance, className, children }) {
  const [component, setComponent] = useState(<span></span>);
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (idConformance) {
      case 1:
        return setTitle("Conformidad de nivel A"), setComponent(<span>A</span>);
      case 2:
        return (
          setTitle("Conformidad de nivel AA"), setComponent(<span>AA</span>)
        );
      case 3:
        return (
          setTitle("Conformidad de nivel AAA"), setComponent(<span>AAA</span>)
        );
      case 4:
        return (
          setTitle("Público objetivo"),
          setComponent(<i className="bi bi-person-check-fill"></i>)
        );
      default:
        return setTitle(""), setComponent(<span></span>);
    }
  }, []);

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
