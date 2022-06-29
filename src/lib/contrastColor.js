/**
 * ============================================================================
 * Utility functions for color luminance and contrast ratios
 * ============================================================================
 */

/**
 * Calculate the relative luminance of a color. See the defintion of relative
 * luminance in the WCAG 2.0 guidelines:
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 *
 * @param {number} r The red component (0-255)
 * @param {number} g The green component (0-255)
 * @param {number} b The blue component (0-255)
 * @returns {number}
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
 * Calculate the contrast ratio between the relative luminance values of two
 * colors. See the definition of contrast ratio in the WCAG 2.0 guidelines:
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 *
 * @param {number} luminance1 The relative luminance of the first color (0-1)
 * @param {number} luminance2 The relative luminance of the second color (0-1)
 * @returns {number}
 */
function contrastRatio(luminance1, luminance2) {
  let lighterLum = Math.max(luminance1, luminance2);
  let darkerLum = Math.min(luminance1, luminance2);

  return (lighterLum + 0.05) / (darkerLum + 0.05);
}

/**
 * Calculate the contrast ratio between two colors. The minimum contrast is 1,
 * and the maximum is 21.
 *
 * @param {string} color1 The six-digit hex code of the first color
 * @param {string} color2 The six-digit hex code of the second color
 * @returns {number}
 */
export function checkContrast(color1, color2) {
  let [luminance1, luminance2] = [color1, color2].map((color) => {
    /* Remove the leading hash sign if it exists */
    color = color.startsWith("#") ? color.slice(1) : color;

    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);

    return luminance(r, g, b);
  });

  return contrastRatio(luminance1, luminance2);
}

/**
 * Format the given contrast ratio as a string (ex. "4.3:1" or "17:1")
 *
 * @param {number} ratio
 * @returns {string}
 */
export function formatRatio(ratio) {
  let ratioAsFloat = ratio.toFixed(2);
  let isInteger = Number.isInteger(parseFloat(ratioAsFloat));
  return `${isInteger ? Math.floor(ratio) : ratioAsFloat}:1`;
}

/**
 * Determine whether the given contrast ratio meets WCAG requirements at any
 * level (AA Large, AA, or AAA). In the return value, `isPass` is true if
 * the ratio meets or exceeds the minimum of at least one level, and `maxLevel`
 * is the strictest level that the ratio passes.
 *
 * @param {number} ratio The contrast ratio (1-21)
 * @returns {{ isPass: boolean, maxLevel: "AAA"|"AA"|"AA Large" }}
 */
/*
    AA small text (<18pt or >=14pt bold) >= 4.5
    AAA small text (<18pt or >=14pt bold) >= 7
    AA large text (>=18pt) >= 3
    AAA large text (>=18pt) >= 4.5
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
