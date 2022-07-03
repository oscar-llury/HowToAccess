/**
 * Calcula la luminancia relativa de un color en RGB.
 * Definición de luminancia relativa WCAG:
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 * Retorna la luminancia en el rango [0,1] en float.
 *
 * @param {number} r componente rojo [0-255]
 * @param {number} g componente verde [0-255]
 * @param {number} b componente azul [0-255]
 * @returns {float}
 */
function luminance(r, g, b) {
  let [lumR, lumG, lumB] = [r, g, b].map((component) => {
    //CsRGB = C8bit/255
    let proportion = component / 255;

    // TODO: Return the proportion
    //CsRGB <= 0.03928 then R = CsRGB / 12.92
    //else C = ((CsRGB+0.055) / 1.055) ^ 2.4
    return proportion <= 0.03928
      ? proportion / 12.92
      : Math.pow((proportion + 0.055) / 1.055, 2.4);
  });

  // TODO: The rest of the formula
  //L = 0.2126 * R + 0.7152 * G + 0.0722 * B
  return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
}

/**
 * Calcula el contraste entre la luminancia relativa de dos colores.
 * Definición de ratio de contraste WCAG:
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 * Retorna el ratio en el rango [1,21] en float.
 *
 * @param {float} luminance1 luminancia relativa del color 1
 * @param {float} luminance2 luminancia relativa del color 1
 * @returns {float}
 */
function contrastRatio(luminance1, luminance2) {
  let lighterLum = Math.max(luminance1, luminance2);
  let darkerLum = Math.min(luminance1, luminance2);

  return (lighterLum + 0.05) / (darkerLum + 0.05);
}

/**
 * Calcula el ratio de contraste entre dos colores.
 * Retorna el ratio en el rango [1,21] en float.
 *
 * @param {string} color1 código hex de 6 digitos del color 1
 * @param {string} color2 código hex de 6 digitos del color 2
 * @returns {float}
 */
export function checkContrast(color1, color2) {
  let [luminance1, luminance2] = [color1, color2].map((color) => {
    /* eliminar el # en caso de existir */
    color = color.startsWith("#") ? color.slice(1) : color;

    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);

    return luminance(r, g, b);
  });

  return contrastRatio(luminance1, luminance2);
}

/**
 * Formatea un ratio en float a la estructura X.XX
 *
 * @param {float} ratio ratio de contraste
 * @param {float} isFormated true para formatear en X.XX:1
 * @returns {string}
 */
export function formatRatio(ratio, isFormated = null) {
  let ratioAsFloat = ratio.toFixed(2);
  let isInteger = Number.isInteger(parseFloat(ratioAsFloat));
  if (isFormated) {
    return `${isInteger ? Math.floor(ratio) : ratioAsFloat}:1`;
  }
  return isInteger ? Math.floor(ratio) : ratioAsFloat;
}

/**
 * Dato un ratio de contraste comprueba los requerimientos de WCAG
 * para los niveles:
 * AA small text (<18pt or >=14pt bold) >= 4.5
 * AAA small text (<18pt or >=14pt bold) >= 7
 * AA large text (>=18pt) >= 3
 * AAA large text (>=18pt) >= 4.5
 *
 * Retorna un objeto con boolean sobre los niveles WCAG
 *
 * @param {float} ratio ratio de contraste (1-21)
 * @returns {{ AAsmall: boolean,  AAlarge: boolean, AAAsmall: boolean, AAAlarge: boolean, }}
 */
export function meetsMinimumRequirements(ratio) {
  const result = {
    AAsmall: ratio < 4.5 ? false : true,
    AAlarge: ratio < 3 ? false : true,
    AAAsmall: ratio < 7 ? false : true,
    AAAlarge: ratio < 4.5 ? false : true,
  };

  return result;
}

/**
 * Retorna el grado de contrante [1-4]
 *
 * @param {float} ratio ratio de contraste
 * @returns {number}
 */
export function resultOfRatio(ratio) {
  return ratio < 4.5 ? 1 : ratio < 7 ? 2 : ratio < 12 ? 3 : 4;
}
