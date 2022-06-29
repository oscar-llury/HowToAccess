import {
  checkContrast,
  contrastRatio,
  formatRatio,
  luminance,
  meetsMinimumRequirements,
} from "lib/contrastColor";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function SimulacionInteractiva() {
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [contrast, setContrast] = useState();
  const [ratio, setRatio] = useState();
  const [level, setlevel] = useState({});

  useEffect(() => {
    let newRatio = checkContrast(textColor, bgColor);
    setContrast(newRatio);
    let result = meetsMinimumRequirements(newRatio);
    setlevel(result);
    setRatio(formatRatio(newRatio));
  }, [textColor]);

  useEffect(() => {
    let newRatio = checkContrast(textColor, bgColor);
    setContrast(newRatio);
    let result = meetsMinimumRequirements(newRatio);
    setlevel(result);
    setRatio(formatRatio(newRatio));
  }, []);

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  return (
    <div>
      <h1>Contrast ratio: {ratio}</h1>
      <h5>Text color: {textColor}</h5>
      <h5>Bg color: {bgColor}</h5>
      <div>
        <Form.Label htmlFor="textColorPicker">Text color picker</Form.Label>
        <Form.Control
          type="color"
          id="textColorPicker"
          defaultValue="#000000"
          title="Choose your color"
          onChange={handleTextColorChange}
        />
      </div>
      <div>
        <Form.Label htmlFor="bgColorPicker">Bg color picker</Form.Label>
        <Form.Control
          type="color"
          id="bgColorPicker"
          defaultValue="#ffffff"
          title="Choose your color"
          onChange={handleBgColorChange}
        />
      </div>
      <div>
        <p>
          AA small text {"<"}18pt or {">"}=14pt bold: {`${level.AAsmall}`}
        </p>
        <p>
          AAA small text {"<"}18pt or {">"}=14pt bold: {`${level.AAAsmall}`}
        </p>
        <p>
          AA large text {">"}=18pt: {`${level.AAlarge}`}
        </p>
        <p>
          AAA large text {">"}=14pt: {`${level.AAAlarge}`}
        </p>
      </div>
      <p>
        Contrast ratios can range from 1 to 21 (commonly written 1:1 to 21:1).
        If both are the exact same color, the contrast ratio will be 1; The
        highest contrast is between white and black, and exact opposites in the
        color wheel (complementary colors) will have high values too.
      </p>
    </div>
  );
}
