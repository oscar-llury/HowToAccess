import React, { useState } from "react";
import ColorContrast from "../components/ColorContrast";

import imgB from "../img/simulations/1.png";
import imgA from "../img/simulations/2.png";

export default function SimulacionInteractiva() {
  const [pos, setPos] = useState(50);

  return (
    <>
      <div className="oscaryosoy">
        <div className="background-img text-end">
          <p className="position-absolute end-0">adios</p>
          <img src={imgB} alt="" />
        </div>
        <div className="foreground-img overflow-hidden" style={{ width: `${pos}%` }}>
          <p className="position-absolute">jola</p>
          <img src={imgA} alt="" />
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={pos}
          className="slider"
          name="slider"
          id="slider"
          onChange={(e) => {
            setPos(e.target.value);
          }}
        />
        <div className="slider-button cursor-pointer" style={{ left: `calc(${pos}% - 18px)` }}></div>
      </div>
      <div>
        <ColorContrast />
      </div>
    </>
  );
}
