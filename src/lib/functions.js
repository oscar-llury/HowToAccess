import Data from "data/Data";

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

export function getCriteriaSlugByIndex(index) {
  let DataSlug = {};
  const base = "/normas-de-accesibilidad-web";
  DataSlug["1"] = `${base}/${Data["perceptible"].name.toLowerCase()}`;
  DataSlug["1.1"] = `${DataSlug["1"]}/${Data["alternativas_textuales"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["1.1.1"] = `${DataSlug["1.1"]}#${Data["contenido_no_textual"].slug}`;

  DataSlug["1.2"] = `${DataSlug["1"]}/${Data["medios_tempodependientes"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["1.2.1"] = `${DataSlug["1.2"]}#${Data["solo_audio_video_grabado"].slug}`;
  DataSlug["1.2.2"] = `${DataSlug["1.2"]}#${Data["subtitulos_grabado"].slug}`;
  DataSlug["1.2.3"] = `${DataSlug["1.2"]}#${Data["audiodescripcion_medio_alternativo"].slug}`;
  DataSlug["1.2.4"] = `${DataSlug["1.2"]}#${Data["subtitulos_directo"].slug}`;
  DataSlug["1.2.5"] = `${DataSlug["1.2"]}#${Data["audiodescripcion_grabado"].slug}`;
  DataSlug["1.2.6"] = `${DataSlug["1.2"]}#${Data["lengua_de_señas_grabado"].slug}`;
  DataSlug["1.2.7"] = `${DataSlug["1.2"]}#${Data["audiodescripcion_grabada_ampliada"].slug}`;
  DataSlug["1.2.8"] = `${DataSlug["1.2"]}#${Data["medio_alternativo_grabado"].slug}`;
  DataSlug["1.2.9"] = `${DataSlug["1.2"]}#${Data["solo_audio_directo"].slug}`;

  DataSlug["1.3"] = `${DataSlug["1"]}/${Data["adaptable"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["1.3.1"] = `${DataSlug["1.3"]}#${Data["informacion_relaciones"].slug}`;
  DataSlug["1.3.2"] = `${DataSlug["1.3"]}#${Data["secuencia_significativa"].slug}`;
  DataSlug["1.3.3"] = `${DataSlug["1.3"]}#${Data["caracteristicas_sensoriales"].slug}`;
  DataSlug["1.3.4"] = `${DataSlug["1.3"]}#${Data["orientacion"].slug}`;
  DataSlug["1.3.5"] = `${DataSlug["1.3"]}#${Data["identificar_proposito_entrada"].slug}`;
  DataSlug["1.3.6"] = `${DataSlug["1.3"]}#${Data["identificar_proposito"].slug}`;

  DataSlug["1.4"] = `${DataSlug["1"]}/${Data["distinguible"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["1.4.1"] = `${DataSlug["1.4"]}#${Data["uso_del_color"].slug}`;
  DataSlug["1.4.2"] = `${DataSlug["1.4"]}#${Data["control_del_audio"].slug}`;
  DataSlug["1.4.3"] = `${DataSlug["1.4"]}#${Data["contraste_minimo"].slug}`;
  DataSlug["1.4.4"] = `${DataSlug["1.4"]}#${Data["cambiar_tamaño_texto"].slug}`;
  DataSlug["1.4.5"] = `${DataSlug["1.4"]}#${Data["imagenes_de_texto"].slug}`;
  DataSlug["1.4.6"] = `${DataSlug["1.4"]}#${Data["contraste_mejorado"].slug}`;
  DataSlug["1.4.7"] = `${DataSlug["1.4"]}#${Data["sonido_de_fondo"].slug}`;
  DataSlug["1.4.8"] = `${DataSlug["1.4"]}#${Data["presentacion_visual"].slug}`;
  DataSlug["1.4.9"] = `${DataSlug["1.4"]}#${Data["imagenes_de_texto_sin_excepcion"].slug}`;
  DataSlug["1.4.10"] = `${DataSlug["1.4"]}#${Data["reflujo"].slug}`;
  DataSlug["1.4.11"] = `${DataSlug["1.4"]}#${Data["contraste_sin_texto"].slug}`;
  DataSlug["1.4.12"] = `${DataSlug["1.4"]}#${Data["espaciado_de_texto"].slug}`;
  DataSlug["1.4.13"] = `${DataSlug["1.4"]}#${Data["contenido_en_hover"].slug}`;

  DataSlug["2"] = `${base}/${Data["operable"].name.toLowerCase()}`;
  DataSlug["2.1"] = `${DataSlug["2"]}/${Data["accesible_por_teclado"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["2.1.1"] = `${DataSlug["2.1"]}#${Data["teclado"].slug}`;
  DataSlug["2.1.2"] = `${DataSlug["2.1"]}#${Data["sin_trampas_foco_teclado"].slug}`;
  DataSlug["2.1.3"] = `${DataSlug["2.1"]}#${Data["teclado_sin_excepciones"].slug}`;
  DataSlug["2.1.4"] = `${DataSlug["2.1"]}#${Data["tajos_de_teclas"].slug}`;

  DataSlug["2.2"] = `${DataSlug["2"]}/${Data["tiempo_suficiente"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["2.2.1"] = `${DataSlug["2.2"]}#${Data["tiempo_ajustable"].slug}`;
  DataSlug["2.2.2"] = `${DataSlug["2.2"]}#${Data["pausa_detener_ocultar"].slug}`;
  DataSlug["2.2.3"] = `${DataSlug["2.2"]}#${Data["sin_tiempo"].slug}`;
  DataSlug["2.2.4"] = `${DataSlug["2.2"]}#${Data["interrupciones"].slug}`;
  DataSlug["2.2.5"] = `${DataSlug["2.2"]}#${Data["re_autentificacion"].slug}`;
  DataSlug["2.2.6"] = `${DataSlug["2.2"]}#${Data["tiempos_de_espera"].slug}`;

  DataSlug["2.3"] = `${DataSlug["2"]}/${Data["convulsiones"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["2.3.1"] = `${DataSlug["2.3"]}#${Data["umbral_tres_destellos_menos"].slug}`;
  DataSlug["2.3.2"] = `${DataSlug["2.3"]}#${Data["umbral_tres_destellos"].slug}`;
  DataSlug["2.3.3"] = `${DataSlug["2.3"]}#${Data["animacion_interacciones"].slug}`;

  DataSlug["2.4"] = `${DataSlug["2"]}/${Data["navegable"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["2.4.1"] = `${DataSlug["2.4"]}#${Data["evitar_bloques"].slug}`;
  DataSlug["2.4.2"] = `${DataSlug["2.4"]}#${Data["titulado_de_paginas"].slug}`;
  DataSlug["2.4.3"] = `${DataSlug["2.4"]}#${Data["orden_del_foto"].slug}`;
  DataSlug["2.4.4"] = `${DataSlug["2.4"]}#${Data["proposito_enlaces_en_contexto"].slug}`;
  DataSlug["2.4.5"] = `${DataSlug["2.4"]}#${Data["multiples_vias"].slug}`;
  DataSlug["2.4.6"] = `${DataSlug["2.4"]}#${Data["encabezados_etiquetas"].slug}`;
  DataSlug["2.4.7"] = `${DataSlug["2.4"]}#${Data["foco_visible"].slug}`;
  DataSlug["2.4.8"] = `${DataSlug["2.4"]}#${Data["ubicacion"].slug}`;
  DataSlug["2.4.9"] = `${DataSlug["2.4"]}#${Data["proposito_enlaces_solo_enlaces"].slug}`;
  DataSlug["2.4.10"] = `${DataSlug["2.4"]}#${Data["encabezados_de_seccion"].slug}`;

  DataSlug["2.5"] = `${DataSlug["2"]}/${Data["modalidades_de_entrada"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["2.5.1"] = `${DataSlug["2.5"]}#${Data["gestos_de_puntero"].slug}`;
  DataSlug["2.5.2"] = `${DataSlug["2.5"]}#${Data["cancelacion_de_puntero"].slug}`;
  DataSlug["2.5.3"] = `${DataSlug["2.5"]}#${Data["etiqueta_en_nombre"].slug}`;
  DataSlug["2.5.4"] = `${DataSlug["2.5"]}#${Data["actuacion_de_movimiento"].slug}`;
  DataSlug["2.5.5"] = `${DataSlug["2.5"]}#${Data["tamano_objeto"].slug}`;
  DataSlug["2.5.6"] = `${DataSlug["2.5"]}#${Data["mecanismos_entrada_recurrentes"].slug}`;

  DataSlug["3"] = `${base}/${Data["entendible"].name.toLowerCase()}`;
  DataSlug["3.1"] = `${DataSlug["3"]}/${Data["legible"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["3.1.1"] = `${DataSlug["3.1"]}#${Data["idioma_pagina"].slug}`;
  DataSlug["3.1.2"] = `${DataSlug["3.1"]}#${Data["idioma_partes"].slug}`;
  DataSlug["3.1.3"] = `${DataSlug["3.1"]}#${Data["palabras_inusuales"].slug}`;
  DataSlug["3.1.4"] = `${DataSlug["3.1"]}#${Data["abreviaturas"].slug}`;
  DataSlug["3.1.5"] = `${DataSlug["3.1"]}#${Data["nivel_de_lectura"].slug}`;
  DataSlug["3.1.6"] = `${DataSlug["3.1"]}#${Data["pronunciacion"].slug}`;

  DataSlug["3.2"] = `${DataSlug["3"]}/${Data["predecible"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["3.2.1"] = `${DataSlug["3.2"]}#${Data["recibir_el_foco"].slug}`;
  DataSlug["3.2.2"] = `${DataSlug["3.2"]}#${Data["recibir_entradas"].slug}`;
  DataSlug["3.2.3"] = `${DataSlug["3.2"]}#${Data["navegacion_coherente"].slug}`;
  DataSlug["3.2.4"] = `${DataSlug["3.2"]}#${Data["identificacion_coherente"].slug}`;
  DataSlug["3.2.5"] = `${DataSlug["3.2"]}#${Data["cambios_a_peticion"].slug}`;

  DataSlug["3.3"] = `${DataSlug["3"]}/${Data["entrada_de_datos_asistida"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["3.3.1"] = `${DataSlug["3.3"]}#${Data["identificacion_errores"].slug}`;
  DataSlug["3.3.2"] = `${DataSlug["3.3"]}#${Data["etiquetas"].slug}`;
  DataSlug["3.3.3"] = `${DataSlug["3.3"]}#${Data["sugerencias_errores"].slug}`;
  DataSlug["3.3.4"] = `${DataSlug["3.3"]}#${Data["prevencion_errores"].slug}`;
  DataSlug["3.3.5"] = `${DataSlug["3.3"]}#${Data["ayuda"].slug}`;
  DataSlug["3.3.6"] = `${DataSlug["3.3"]}#${Data["prevencion_errores_todos"].slug}`;

  DataSlug["4"] = `${base}/${Data["robusto"].name.toLowerCase()}`;
  DataSlug["4.1"] = `${DataSlug["4"]}/${Data["compatible"].name.toLowerCase().replaceAll(" ", "-")}`;
  DataSlug["4.1.1"] = `${DataSlug["4.1"]}#${Data["procesamiento"].slug}`;
  DataSlug["4.1.2"] = `${DataSlug["4.1"]}#${Data["nombre_funcion_valor"].slug}`;
  DataSlug["4.1.3"] = `${DataSlug["4.1"]}#${Data["mensajes_de_estado"].slug}`;

  return DataSlug[index];
}
