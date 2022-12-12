export function cifrarBA64(id) {
  return window.btoa(id);
} //btoa

export function descifrarBA64(id) {
  return window.atob(id);
} //atob
/**
 * Calculo de porcentajes
 * @param value valor completado
 * @param total valor total
 * @param [round] >0 para X decimales, <0 para 0 decimales, otro caso no redondea
 */
export function percentage(value, total, round = null) {
  return roundOff((100 * value) / total, round);
}

/**
 * Fijar decimales en numero
 * @param num valor completo
 * @param [places] >0 para X decimales, =0 para 0 decimales, otro caso no redondea
 */
export function roundOff(num, places = null) {
  if (places && places > 0) {
    const x = Math.pow(10, places);
    num = Math.round(num * x) / x;
  } else if (places === 0) {
    const x = Math.pow(10, 0);
    num = Math.round(num * x) / x;
  }
  return num;
}

/**
 * Establece una cookie
 * @param name nombre de la cookie
 * @param value valor de la cookie
 * @param exDays dias de expiración de la cookie
 * @param [encode] true para cifrar el valor de la cookie
 */
export function setCookie(name, value, exDays, encode = false) {
  if (encode) {
    value = cifrarBA64(value);
  }
  const d = new Date();
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  try {
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  } catch (e) {
    console.error(e);
  }
}

/**
 * Retorna el valor de una cookie
 * @param name nombre de la cookie
 */
export function getCookie(nameSearch, decode = false) {
  let name = nameSearch + "=";
  //get cookies and build array
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  //search cookie
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      if (decode) {
        return descifrarBA64(c.substring(name.length, c.length));
      } else {
        return c.substring(name.length, c.length);
      }
    }
  }
  //not found
  return "";
}
