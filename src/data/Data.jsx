let Data = {};

Data["perceptible"] = require("./perceptible/perceptible.json");
Data["operable"] = require("./operable/operable.json");
Data["entendible"] = require("./entendible/entendible.json");
Data["robusto"] = require("./robusto/robusto.json");

Data["alternativas_textuales"] = require("./perceptible/alternativas_textuales.json");
Data["medios_tempodependientes"] = require("./perceptible/medios_tempodependientes.json");
Data["adaptable"] = require("./perceptible/adaptable.json");
Data["distinguible"] = require("./perceptible/distinguible.json");
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
