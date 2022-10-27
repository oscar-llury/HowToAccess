let Data = {};

Data["perceptible"] = require("./perceptible/perceptible.json");
Data["operable"] = require("./operable/operable.json");
Data["entendible"] = require("./entendible/entendible.json");
Data["robusto"] = require("./robusto/robusto.json");

//****** principio 1
//pauta 1
Data["alternativas_textuales"] = require("./perceptible/1_1_alternativas_textuales/alternativas_textuales.json");
Data["contenido_no_textual"] = require("./perceptible/1_1_alternativas_textuales/contenido_no_textual.json");
//pauta 2
Data["medios_tempodependientes"] = require("./perceptible/1_2_medios_tempodependientes/medios_tempodependientes.json");
Data["solo_audio_video_grabado"] = require("./perceptible/1_2_medios_tempodependientes/solo_audio_video_grabado.json");
Data["subtitulos_grabado"] = require("./perceptible/1_2_medios_tempodependientes/subtitulos_grabado.json");
Data["audiodescripcion_medio_alternativo"] = require("./perceptible/1_2_medios_tempodependientes/audiodescripcion_medio_alternativo.json");
Data["subtitulos_directo"] = require("./perceptible/1_2_medios_tempodependientes/subtitulos_directo.json");
Data["audiodescripcion_grabado"] = require("./perceptible/1_2_medios_tempodependientes/audiodescripcion_grabado.json");
Data["lengua_de_señas_grabado"] = require("./perceptible/1_2_medios_tempodependientes/lengua_de_señas_grabado.json");
Data["audiodescripcion_grabada_ampliada"] = require("./perceptible/1_2_medios_tempodependientes/audiodescripcion_grabada_ampliada.json");
Data["medio_alternativo_grabado"] = require("./perceptible/1_2_medios_tempodependientes/medio_alternativo_grabado.json");
Data["solo_audio_directo"] = require("./perceptible/1_2_medios_tempodependientes/solo_audio_directo.json");
//pauta 3
Data["adaptable"] = require("./perceptible/1_3_adaptable/adaptable.json");
Data["informacion_relaciones"] = require("./perceptible/1_3_adaptable/informacion_relaciones.json");
Data["secuencia_significativa"] = require("./perceptible/1_3_adaptable/secuencia_significativa.json");
Data["caracteristicas_sensoriales"] = require("./perceptible/1_3_adaptable/caracteristicas_sensoriales.json");
Data["orientacion"] = require("./perceptible/1_3_adaptable/orientacion.json");
Data["identificar_proposito_entrada"] = require("./perceptible/1_3_adaptable/identificar_proposito_entrada.json");
Data["identificar_proposito"] = require("./perceptible/1_3_adaptable/identificar_proposito.json");

//pauta 4
Data["distinguible"] = require("./perceptible/1_4_distinguible/distinguible.json");
Data["uso_del_color"] = require("./perceptible/1_4_distinguible/uso_del_color.json");
Data["control_del_audio"] = require("./perceptible/1_4_distinguible/control_del_audio.json");
Data["contraste_minimo"] = require("./perceptible/1_4_distinguible/contraste_minimo.json");
Data["cambiar_tamaño_texto"] = require("./perceptible/1_4_distinguible/cambiar_tamaño_texto.json");
Data["imagenes_de_texto"] = require("./perceptible/1_4_distinguible/imagenes_de_texto.json");
Data["contraste_mejorado"] = require("./perceptible/1_4_distinguible/contraste_mejorado.json");
Data["sonido_de_fondo"] = require("./perceptible/1_4_distinguible/sonido_de_fondo.json");
Data["presentacion_visual"] = require("./perceptible/1_4_distinguible/presentacion_visual.json");
Data["imagenes_de_texto_sin_excepcion"] = require("./perceptible/1_4_distinguible/imagenes_de_texto_sin_excepcion.json");
Data["reflujo"] = require("./perceptible/1_4_distinguible/reflujo.json");
Data["contraste_sin_texto"] = require("./perceptible/1_4_distinguible/contraste_sin_texto.json");
Data["espaciado_de_texto"] = require("./perceptible/1_4_distinguible/espaciado_de_texto.json");
Data["contenido_en_hover"] = require("./perceptible/1_4_distinguible/contenido_en_hover.json");

//****** principio 2
//pauta 1
Data["accesible_por_teclado"] = require("./operable/accesible_por_teclado.json");
Data["tiempo_suficiente"] = require("./operable/tiempo_suficiente.json");
Data["convulsiones"] = require("./operable/convulsiones.json");
Data["navegable"] = require("./operable/navegable.json");
Data["modalidades_de_entrada"] = require("./operable/modalidades_de_entrada.json");
Data["legible"] = require("./entendible/legible.json");
Data["predecible"] = require("./entendible/predecible.json");
Data["entrada_de_datos_asistida"] = require("./entendible/entrada_de_datos_asistida.json");
Data["compatible"] = require("./robusto/compatible.json");

export default Data;
