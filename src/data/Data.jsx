let Data = [];

Data["perceptible"] = require("./perceptible/perceptible.json");
Data["operable"] = require("./operable/operable.json");
Data["entendible"] = require("./entendible/entendible.json");
Data["robusto"] = require("./robusto/robusto.json");

//****** principio 1
//pauta 1
Data["alternativas_textuales"] = require("./perceptible/1_1_alternativas_textuales/alternativas_textuales.json");
Data["contenido_no_textual"] = require("./perceptible/1_1_alternativas_textuales/1_1_1_contenido_no_textual.json");
//pauta 2
Data["medios_tempodependientes"] = require("./perceptible/1_2_medios_tempodependientes/medios_tempodependientes.json");
Data["solo_audio_video_grabado"] = require("./perceptible/1_2_medios_tempodependientes/1_2_1_solo_audio_video_grabado.json");
Data["subtitulos_grabado"] = require("./perceptible/1_2_medios_tempodependientes/1_2_2_subtitulos_grabado.json");
Data["audiodescripcion_medio_alternativo"] = require("./perceptible/1_2_medios_tempodependientes/1_2_3_audiodescripcion_medio_alternativo.json");
Data["subtitulos_directo"] = require("./perceptible/1_2_medios_tempodependientes/1_2_4_subtitulos_directo.json");
Data["audiodescripcion_grabado"] = require("./perceptible/1_2_medios_tempodependientes/1_2_5_audiodescripcion_grabado.json");
Data["lengua_de_señas_grabado"] = require("./perceptible/1_2_medios_tempodependientes/1_2_6_lengua_de_señas_grabado.json");
Data["audiodescripcion_grabada_ampliada"] = require("./perceptible/1_2_medios_tempodependientes/1_2_7_audiodescripcion_grabada_ampliada.json");
Data["medio_alternativo_grabado"] = require("./perceptible/1_2_medios_tempodependientes/1_2_8_medio_alternativo_grabado.json");
Data["solo_audio_directo"] = require("./perceptible/1_2_medios_tempodependientes/1_2_9_solo_audio_directo.json");
//pauta 3
Data["adaptable"] = require("./perceptible/1_3_adaptable/adaptable.json");
Data["informacion_relaciones"] = require("./perceptible/1_3_adaptable/1_3_1_informacion_relaciones.json");
Data["secuencia_significativa"] = require("./perceptible/1_3_adaptable/1_3_2_secuencia_significativa.json");
Data["caracteristicas_sensoriales"] = require("./perceptible/1_3_adaptable/1_3_3_caracteristicas_sensoriales.json");
Data["orientacion"] = require("./perceptible/1_3_adaptable/1_3_4_orientacion.json");
Data["identificar_proposito_entrada"] = require("./perceptible/1_3_adaptable/1_3_5_identificar_proposito_entrada.json");
Data["identificar_proposito"] = require("./perceptible/1_3_adaptable/1_3_6_identificar_proposito.json");

//pauta 4
Data["distinguible"] = require("./perceptible/1_4_distinguible/distinguible.json");
Data["uso_del_color"] = require("./perceptible/1_4_distinguible/1_4_1_uso_del_color.json");
Data["control_del_audio"] = require("./perceptible/1_4_distinguible/1_4_2_control_del_audio.json");
Data["contraste_minimo"] = require("./perceptible/1_4_distinguible/1_4_3_contraste_minimo.json");
Data["cambiar_tamaño_texto"] = require("./perceptible/1_4_distinguible/1_4_4_cambiar_tamaño_texto.json");
Data["imagenes_de_texto"] = require("./perceptible/1_4_distinguible/1_4_5_imagenes_de_texto.json");
Data["contraste_mejorado"] = require("./perceptible/1_4_distinguible/1_4_6_contraste_mejorado.json");
Data["sonido_de_fondo"] = require("./perceptible/1_4_distinguible/1_4_7_sonido_de_fondo.json");
Data["presentacion_visual"] = require("./perceptible/1_4_distinguible/1_4_8_presentacion_visual.json");
Data["imagenes_de_texto_sin_excepcion"] = require("./perceptible/1_4_distinguible/1_4_9_imagenes_de_texto_sin_excepcion.json");
Data["reflujo"] = require("./perceptible/1_4_distinguible/1_4_10_reflujo.json");
Data["contraste_sin_texto"] = require("./perceptible/1_4_distinguible/1_4_11_contraste_sin_texto.json");
Data["espaciado_de_texto"] = require("./perceptible/1_4_distinguible/1_4_12_espaciado_de_texto.json");
Data["contenido_en_hover"] = require("./perceptible/1_4_distinguible/1_4_13_contenido_en_hover.json");

//****** principio 2
//pauta 1
Data["accesible_por_teclado"] = require("./operable/2_1_accesible_por_teclado/accesible_por_teclado.json");
Data["teclado"] = require("./operable/2_1_accesible_por_teclado/2_1_1_teclado");
Data["sin_trampas_foco_teclado"] = require("./operable/2_1_accesible_por_teclado/2_1_2_sin_trampas_foco_teclado");
Data["teclado_sin_excepciones"] = require("./operable/2_1_accesible_por_teclado/2_1_3_teclado_sin_excepciones");
Data["tajos_de_teclas"] = require("./operable/2_1_accesible_por_teclado/2_1_4_tajos_de_teclas");
//pauta 2
Data["tiempo_suficiente"] = require("./operable/2_2_tiempo_suficiente/tiempo_suficiente.json");
Data["tiempo_ajustable"] = require("./operable/2_2_tiempo_suficiente/2_2_1_tiempo_ajustable.json");
Data["pausa_detener_ocultar"] = require("./operable/2_2_tiempo_suficiente/2_2_2_pausa_detener_ocultar.json");
Data["sin_tiempo"] = require("./operable/2_2_tiempo_suficiente/2_2_3_sin_tiempo.json");
Data["interrupciones"] = require("./operable/2_2_tiempo_suficiente/2_2_4_interrupciones.json");
Data["re_autentificacion"] = require("./operable/2_2_tiempo_suficiente/2_2_5_re-autentificacion.json");
Data["tiempos_de_espera"] = require("./operable/2_2_tiempo_suficiente/2_2_6_tiempos_de_espera.json");
//pauta 3
Data["convulsiones"] = require("./operable/2_3_convulsiones/convulsiones.json");
Data["umbral_tres_destellos_menos"] = require("./operable/2_3_convulsiones/2_3_1_umbral_tres_detellos_menos.json");
Data["umbral_tres_destellos"] = require("./operable/2_3_convulsiones/2_3_2_umbral_tres_detellos.json");
Data["animacion_interacciones"] = require("./operable/2_3_convulsiones/2_3_3_animacion_interacciones.json");
//pauta 4
Data["navegable"] = require("./operable/2_4_navegable/navegable.json");
Data["evitar_bloques"] = require("./operable/2_4_navegable/2_4_1_evitar_bloques.json");
Data["titulado_de_paginas"] = require("./operable/2_4_navegable/2_4_2_titulado_de_paginas.json");
Data["orden_del_foto"] = require("./operable/2_4_navegable/2_4_3_orden_del_foto.json");
Data["proposito_enlaces_en_contexto"] = require("./operable/2_4_navegable/2_4_4_proposito_enlaces_en_contexto.json");
Data["multiples_vias"] = require("./operable/2_4_navegable/2_4_5_multiples_vias.json");
Data["encabezados_etiquetas"] = require("./operable/2_4_navegable/2_4_6_encabezados_etiquetas.json");
Data["foco_visible"] = require("./operable/2_4_navegable/2_4_7_foco_visible.json");
Data["ubicacion"] = require("./operable/2_4_navegable/2_4_8_ubicacion.json");
Data["proposito_enlaces_solo_enlaces"] = require("./operable/2_4_navegable/2_4_9_proposito_enlaces_solo_enlaces.json");
Data["encabezados_de_seccion"] = require("./operable/2_4_navegable/2_4_10_encabezados_de_seccion.json");
//pauta 5
Data["modalidades_de_entrada"] = require("./operable/2_5_modalidades_de_entrada/modalidades_de_entrada.json");
Data["gestos_de_puntero"] = require("./operable/2_5_modalidades_de_entrada/2_5_1_gestos_de_puntero.json");
Data["cancelacion_de_puntero"] = require("./operable/2_5_modalidades_de_entrada/2_5_2_cancelacion_de_puntero.json");
Data["etiqueta_en_nombre"] = require("./operable/2_5_modalidades_de_entrada/2_5_3_etiqueta_en_nombre.json");
Data["actuacion_de_movimiento"] = require("./operable/2_5_modalidades_de_entrada/2_5_4_actuacion_de_movimiento.json");
Data["tamano_objeto"] = require("./operable/2_5_modalidades_de_entrada/2_5_5_tamaño_objeto.json");
Data["mecanismos_entrada_recurrentes"] = require("./operable/2_5_modalidades_de_entrada/2_5_6_mecanismos_entrada_recurrentes.json");

//****** principio 3
//pauta 1
Data["legible"] = require("./entendible/3_1_legible/legible.json");
Data["idioma_pagina"] = require("./entendible/3_1_legible/3_1_1_idioma_pagina.json");
Data["idioma_partes"] = require("./entendible/3_1_legible/3_1_2_idioma_partes.json");
Data["palabras_inusuales"] = require("./entendible/3_1_legible/3_1_3_palabras_inusuales.json");
Data["abreviaturas"] = require("./entendible/3_1_legible/3_1_4_abreviaturas.json");
Data["nivel_de_lectura"] = require("./entendible/3_1_legible/3_1_5_nivel_de_lectura.json");
Data["pronunciacion"] = require("./entendible/3_1_legible/3_1_6_pronunciacion.json");
//pauta 2
Data["predecible"] = require("./entendible/3_2_predecible/predecible.json");
Data["recibir_el_foco"] = require("./entendible/3_2_predecible/3_2_1_recibir_el_foco.json");
Data["recibir_entradas"] = require("./entendible/3_2_predecible/3_2_2_recibir_entradas.json");
Data["navegacion_coherente"] = require("./entendible/3_2_predecible/3_2_3_navegacion_coherente.json");
Data["identificacion_coherente"] = require("./entendible/3_2_predecible/3_2_4_identificacion_coherente.json");
Data["cambios_a_peticion"] = require("./entendible/3_2_predecible/3_2_5_cambios_a_peticion.json");
//pauta 3
Data["entrada_de_datos_asistida"] = require("./entendible/3_3_entrada_de_datos_asistida/entrada_de_datos_asistida.json");
Data["identificacion_errores"] = require("./entendible/3_3_entrada_de_datos_asistida/3_3_1_identificacion_errores.json");
Data["etiquetas"] = require("./entendible/3_3_entrada_de_datos_asistida/3_3_2_etiquetas.json");
Data["sugerencias_errores"] = require("./entendible/3_3_entrada_de_datos_asistida/3_3_3_sugerencias_errores.json");
Data["prevencion_errores"] = require("./entendible/3_3_entrada_de_datos_asistida/3_3_4_prevencion_errores.json");
Data["ayuda"] = require("./entendible/3_3_entrada_de_datos_asistida/3_3_5_ayuda.json");
Data["prevencion_errores_todos"] = require("./entendible/3_3_entrada_de_datos_asistida/3_3_6_prevencion_errores_todos.json");

//****** principio 4
//pauta 1
Data["compatible"] = require("./robusto/4_1_compatible/compatible.json");
Data["procesamiento"] = require("./robusto/4_1_compatible/4_1_1_procesamiento.json");
Data["nombre_funcion_valor"] = require("./robusto/4_1_compatible/4_1_2_nombre_funcion_valor.json");
Data["mensajes_de_estado"] = require("./robusto/4_1_compatible/4_1_3_mensajes_de_estado.json");

export default Data;
