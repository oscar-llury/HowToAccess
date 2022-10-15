import React from "react";
import { CustomPicker } from "react-color";
import { SketchPicker } from "react-color";

function CustomColorPicker({ color, setColor, width, className }) {
  /*
  useEffect(() => {
    //console.dir(document.querySelector("#rc-editable-input-4"));
  }, []);*/

  const handleChange = (color) => {
    setColor(color.hex);
    document.querySelector(`div.position-relative.${className} > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div > div`).style.backgroundColor = color.hex;
  };

  return (
    <div className={`position-relative ${className}`}>
      <SketchPicker width={width} color={color} onChange={handleChange} className="m-auto" />
    </div>
  );
}

export default CustomPicker(CustomColorPicker);
