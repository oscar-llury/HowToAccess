alter table `tfg`.`acc_criterio_conformidad` AUTO_INCREMENT=1;
alter table `tfg`.`acc_nivel_conformidad` AUTO_INCREMENT=1;
alter table `tfg`.`acc_pauta` AUTO_INCREMENT=1;
alter table `tfg`.`acc_principio` AUTO_INCREMENT=1;
alter table `tfg`.`pro_has_criterio` AUTO_INCREMENT=1;
alter table `tfg`.`pro_proyecto` AUTO_INCREMENT=1;
alter table `tfg`.`pro_tipo_proyecto` AUTO_INCREMENT=1;
alter table `tfg`.`usr_has_proyecto` AUTO_INCREMENT=1;
alter table `tfg`.`usr_has_suscripcion` AUTO_INCREMENT=1;
alter table `tfg`.`usr_suscripcion` AUTO_INCREMENT=1;
alter table `tfg`.`usr_usuario` AUTO_INCREMENT=1;

-- usuario
INSERT INTO `tfg`.`usr_usuario` (`nombre`, `apellidos`, `email`, `contrasena`) VALUES ('admin', 'web', 'oscar.rivas.99@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918');

-- tipo suscripcion
INSERT INTO `tfg`.`usr_suscripcion` (`nombre`, `max_proyectos`) VALUES ('Básica', '5');

-- tipo proyecto
INSERT INTO `tfg`.`pro_tipo_proyecto` (`nombre`) VALUES ('Nivel de conformidad objetivo A');
INSERT INTO `tfg`.`pro_tipo_proyecto` (`nombre`) VALUES ('Nivel de conformidad objetivo AA');
INSERT INTO `tfg`.`pro_tipo_proyecto` (`nombre`) VALUES ('Nivel de conformidad objetivo AAA');
INSERT INTO `tfg`.`pro_tipo_proyecto` (`nombre`) VALUES ('Público objetivo');

-- versiones
INSERT INTO `tfg`.`acc_criterio_version` (`nombre`) VALUES ('WCAG 2.0');
INSERT INTO `tfg`.`acc_criterio_version` (`nombre`) VALUES ('WCAG 2.1');

-- nivel conformidad
INSERT INTO `tfg`.`acc_nivel_conformidad` (`codigo`, `nombre`) VALUES ('A', 'Nivel A');
INSERT INTO `tfg`.`acc_nivel_conformidad` (`codigo`, `nombre`) VALUES ('AA', 'Nivel AA');
INSERT INTO `tfg`.`acc_nivel_conformidad` (`codigo`, `nombre`) VALUES ('AAA', 'Nivel AAA');

-- principio
INSERT INTO `tfg`.`acc_principio` (`codigo`, `nombre`) VALUES ('1', 'Perceptible');
INSERT INTO `tfg`.`acc_principio` (`codigo`, `nombre`) VALUES ('2', 'Operable');
INSERT INTO `tfg`.`acc_principio` (`codigo`, `nombre`) VALUES ('3', 'Comprensible');
INSERT INTO `tfg`.`acc_principio` (`codigo`, `nombre`) VALUES ('4', 'Robusto');

-- pauta
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('1', '1', 'Alternativas textuales');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('1', '2', 'Medios tempodependientes');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('1', '3', 'Adaptable');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('1', '4', 'Distinguible');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('2', '1', 'Accesible por teclado');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('2', '2', 'Tiempo suficiente');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('2', '3', 'Convulsiones');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('2', '4', 'Navegable');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('2', '5', 'Modalidades de entrada');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('3', '1', 'Legible');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('3', '2', 'Predecible');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('3', '3', 'Entrada de datos asistida');
INSERT INTO `tfg`.`acc_pauta` (`principio_id`, `codigo`, `nombre`) VALUES ('4', '1', 'Compatible');

-- criterio conformidad
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '1', '1', 'Contenido no textual', '1', '1');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '1', 'Sólo audio y sólo vídeo (grabado)', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '2', 'Subtítulos (grabados)', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '3', 'Audiodescripción o Medio Alternativo (grabado)', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '4', 'Subtítulos (en directo)', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '5', 'Audiodescripción (grabado)', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '6', 'Lengua de señas (grabado)', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '7', 'Audiodescripción ampliada (grabada)', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '8', 'Medio alternativo (grabado)', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '2', '9', 'Sólo audio (en directo)', '3', '1');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '3', '1', 'Información y relaciones', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '3', '2', 'Secuencia significativa', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '3', '3', 'Características sensoriales', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '3', '4', 'Orientación', '2', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '3', '5', 'Identificar el propósito de entrada', '2', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '3', '6', 'Identificar Propósito', '3', '2');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '1', 'Uso del color', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '2', 'Control del audio', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '3', 'Contraste (mínimo)', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '4', 'Cambiar el tamaño del texto', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '5', 'Imágenes de texto', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '6', 'Contraste (mejorado)', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '7', 'Sonido de fondo bajo o ausente', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '8', 'Presentación visual', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '9', 'Imágenes de texto (sin excepción)', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '10', 'Reflujo', '2', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '11', 'Contraste sin texto', '2', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '12', 'Espaciado de texto', '2', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('1', '4', '13', 'Contenido en Hover o Focus', '2', '2');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '5', '1', 'Teclado', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '5', '2', 'Sin trampas para el foco del teclado', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '5', '3', 'Teclado (sin excepciones)', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '5', '4', 'Atajos de teclas de caracteres', '1', '2');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '6', '1', 'Tiempo ajustable', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '6', '2', 'Poner en pausa, detener, ocultar', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '6', '3', 'Sin tiempo', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '6', '4', 'Interrupciones ', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '6', '5', 'Re-autentificación', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '6', '6', 'Tiempos de espera', '3', '2');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '7', '1', 'Umbral de tres destellos o menos', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '7', '2', 'Tres destellos', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '7', '3', 'Animación de interacciones', '3', '2');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '1', 'Evitar bloques', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '2', 'Titulado de páginas', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '3', 'Orden del foco', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '4', 'Propósito de los enlaces (en contexto)', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '5', 'Múltiples vías', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '6', 'Encabezados y etiquetas', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '7', 'Foco visible', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '8', 'Ubicación ', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '9', 'Propósito de los enlaces (sólo enlaces)', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '8', '10', 'Encabezados de sección', '3', '1');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '9', '1', 'Gestos de puntero', '1', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '9', '2', 'Cancelación de puntero', '1', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '9', '3', 'Etiqueta en nombre', '1', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '9', '4', 'Actuación de movimiento', '1', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '9', '5', 'Tamaño objetivo', '3', '2');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('2', '9', '6', 'Mecanismos de entrada concurrentes', '3', '2');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '10', '1', 'Idioma de la página', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '10', '2', 'Idioma de las partes', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '10', '3', 'Palabras inusuales', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '10', '4', 'Abreviaturas ', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '10', '5', 'Nivel de lectura', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '10', '6', 'Pronunciación ', '3', '1');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '11', '1', 'Al recibir el foco', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '11', '2', 'Al recibir entradas', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '11', '3', 'Navegación coherente', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '11', '4', 'Identificación coherente', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '11', '5', 'Cambios a petición', '3', '1');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '12', '1', 'Identificación de errores', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '12', '2', 'Etiquetas o instrucciones', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '12', '3', 'Sugerencias ante errores', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '12', '4', 'Prevención de errores (legales, financieros, datos)', '2', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '12', '5', 'Ayuda ', '3', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('3', '12', '6', 'Prevención de errores (todos)', '3', '1');

INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('4', '13', '1', 'Procesamiento', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('4', '13', '2', 'Nombre, función, valor', '1', '1');
INSERT INTO `tfg`.`acc_criterio_conformidad` (`principio_id`, `pauta_id`, `codigo`, `nombre`, `nivel_conformidad`, `version_id`) VALUES ('4', '13', '3', 'Mensajes de estado', '2', '2');

-- proyecto
INSERT INTO `tfg`.`pro_proyecto` (`nombre`, `tipo_proyecto`) VALUES ('Proyecto oscar', '1');
INSERT INTO `tfg`.`pro_proyecto` (`nombre`, `tipo_proyecto`) VALUES ('Proyecto ejemplo', '2');
INSERT INTO `tfg`.`pro_proyecto` (`nombre`, `tipo_proyecto`) VALUES ('Proyecto tres', '3');
INSERT INTO `tfg`.`pro_proyecto` (`nombre`, `tipo_proyecto`) VALUES ('Proyecto cuatro', '4');

-- usr has proyecto
INSERT INTO `tfg`.`usr_has_proyecto` (`id_usuario`, `id_proyecto`) VALUES ('1', '1');
INSERT INTO `tfg`.`usr_has_proyecto` (`id_usuario`, `id_proyecto`) VALUES ('1', '2');
INSERT INTO `tfg`.`usr_has_proyecto` (`id_usuario`, `id_proyecto`) VALUES ('1', '3');
INSERT INTO `tfg`.`usr_has_proyecto` (`id_usuario`, `id_proyecto`) VALUES ('1', '4');

-- pro has criterio
INSERT INTO `tfg`.`pro_has_criterio` (`proyecto_id`, `criterio_id`) VALUES ('1', '1');
INSERT INTO `tfg`.`pro_has_criterio` (`proyecto_id`, `criterio_id`, `completado`) VALUES ('1', '2', '1');
INSERT INTO `tfg`.`pro_has_criterio` (`proyecto_id`, `criterio_id`) VALUES ('2', '3');
INSERT INTO `tfg`.`pro_has_criterio` (`proyecto_id`, `criterio_id`, `completado`) VALUES ('2', '4', '1');
INSERT INTO `tfg`.`pro_has_criterio` (`proyecto_id`, `criterio_id`) VALUES ('3', '5');
INSERT INTO `tfg`.`pro_has_criterio` (`proyecto_id`, `criterio_id`) VALUES ('4', '6');

-- discapacidad
INSERT INTO `tfg`.`acc_discapacidad` (`nombre`) VALUES ('Visual');
INSERT INTO `tfg`.`acc_discapacidad` (`nombre`) VALUES ('Auditiva');
INSERT INTO `tfg`.`acc_discapacidad` (`nombre`) VALUES ('Motora');
INSERT INTO `tfg`.`acc_discapacidad` (`nombre`) VALUES ('Cognitiva');

-- beneficio
INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('Color', '1');
INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('Visión reducida', '1');
INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('Ceguera', '1');

INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('Audición reducida', '2');
INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('Sordera', '2');

INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('Movilidad reducida', '3');

INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('TDH / dificultad comprension', '4');
INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('Dislexia', '4');
INSERT INTO `tfg`.`acc_beneficio` (`nombre`, `discapacidad_id`) VALUES ('Perdida memoria a corto plazo / memoria limitada', '4');

INSERT INTO `tfg`.`acc_beneficio` (`nombre`) VALUES ('Abuelos');


-- acc_criterio_has_beneficio
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '1', '1', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '2', '1', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '3', '1', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '4', '1', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '5', '1', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '6', '1', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '7', '1', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '8', '1', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('1', '9', '1', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('2', '2', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('2', '3', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('2', '4', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('2', '5', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('2', '7', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('2', '9', '2', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('3', '4', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('3', '5', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('3', '7', '2', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('4', '2', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('4', '3', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('4', '4', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('4', '5', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('4', '7', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('4', '8', '2', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('4', '9', '2', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('5', '4', '2', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('5', '5', '2', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('5', '9', '2', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('6', '2', '2', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('6', '3', '2', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('6', '7', '2', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('6', '8', '2', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('7', '4', '2', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('7', '5', '2', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('8', '2', '2', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('8', '3', '2', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('8', '7', '2', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('8', '8', '2', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('9', '2', '2', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('9', '3', '2', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('9', '4', '2', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('9', '5', '2', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('10', '4', '2', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('10', '5', '2', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '1', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '2', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '3', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '4', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '5', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '6', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '7', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '8', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('11', '9', '3', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('12', '1', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('12', '2', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('12', '3', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('12', '7', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('12', '8', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('12', '9', '3', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('13', '1', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('13', '2', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('13', '3', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('13', '7', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('13', '8', '3', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('13', '9', '3', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('14', '2', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('14', '3', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('14', '6', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('14', '7', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('14', '8', '3', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('15', '2', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('15', '3', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('15', '6', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('15', '7', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('15', '8', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('15', '9', '3', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('16', '2', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('16', '3', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('16', '6', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('16', '7', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('16', '8', '3', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('16', '9', '3', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('17', '1', '4', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('17', '2', '4', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('17', '3', '4', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('17', '7', '4', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('17', '9', '4', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('18', '2', '4', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('18', '3', '4', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('19', '1', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('19', '2', '4', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('20', '2', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('20', '8', '4', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('21', '2', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('21', '7', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('21', '8', '4', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('22', '1', '4', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('22', '2', '4', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('23', '4', '4', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('23', '5', '4', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('24', '1', '4', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('24', '2', '4', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('24', '7', '4', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('24', '8', '4', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('25', '2', '4', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('25', '7', '4', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('25', '8', '4', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('26', '2', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('26', '8', '4', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('27', '1', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('27', '2', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('27', '8', '4', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('28', '2', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('28', '7', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('28', '8', '4', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('29', '2', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('29', '6', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('29', '7', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('29', '8', '4', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('29', '9', '4', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('30', '2', '5', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('30', '3', '5', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('30', '6', '5', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('30', '8', '5', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('31', '2', '5', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('31', '3', '5', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('31', '6', '5', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('31', '8', '5', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('32', '2', '5', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('32', '3', '5', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('32', '6', '5', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('32', '8', '5', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('33', '2', '5', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('33', '3', '5', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('33', '6', '5', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('34', '2', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('34', '3', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('34', '4', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('34', '5', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('34', '6', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('34', '7', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('34', '8', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('34', '9', '6', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('35', '1', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('35', '2', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('35', '6', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('35', '7', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('35', '8', '6', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('35', '9', '6', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('36', '3', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('36', '5', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('36', '6', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('36', '7', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('36', '8', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('36', '9', '6', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('37', '2', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('37', '3', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('37', '7', '6', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('38', '2', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('38', '3', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('38', '6', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('38', '7', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('38', '8', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('38', '9', '6', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('39', '6', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('39', '7', '6', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('39', '9', '6', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('40', '1', '7', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('40', '2', '7', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('41', '1', '7', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('41', '2', '7', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('43', '2', '7', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('43', '3', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('43', '6', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('43', '7', '8', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('44', '3', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('44', '6', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('44', '7', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('44', '9', '8', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('45', '2', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('45', '3', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('45', '6', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('45', '7', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('45', '8', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('45', '9', '8', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('46', '2', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('46', '3', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('46', '6', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('46', '7', '8', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('46', '9', '8', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('47', '3', '8', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('47', '7', '8', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('48', '2', '8', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('48', '3', '8', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('48', '6', '8', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('48', '7', '8', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('48', '9', '8', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('49', '2', '8', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('49', '7', '8', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('49', '9', '8', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('50', '7', '8', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('50', '9', '8', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('51', '2', '8', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('51', '3', '8', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('51', '6', '8', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('51', '7', '8', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('51', '9', '8', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('52', '3', '8', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('52', '6', '8', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('52', '7', '8', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('53', '3', '9', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('53', '6', '9', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('54', '2', '9', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('54', '3', '9', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('54', '6', '9', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('54', '8', '9', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('55', '3', '9', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('56', '3', '9', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('56', '6', '9', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('57', '2', '9', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('57', '6', '9', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('58', '3', '9', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('58', '6', '9', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('59', '2', '10', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('59', '3', '10', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('59', '4', '10', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('59', '5', '10', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('59', '6', '10', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('59', '8', '10', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('60', '2', '10', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('60', '3', '10', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('60', '4', '10', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('60', '5', '10', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('60', '6', '10', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('60', '8', '10', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('61', '2', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('61', '3', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('61', '7', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('61', '8', '10', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('62', '2', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('62', '7', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('62', '8', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('62', '9', '10', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('63', '7', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('63', '8', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('63', '9', '10', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('64', '2', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('64', '3', '10', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('64', '8', '10', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('65', '2', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('65', '3', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('65', '6', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('65', '7', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('65', '8', '11', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('66', '1', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('66', '2', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('66', '3', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('66', '6', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('66', '7', '11', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('66', '8', '11', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('67', '2', '11', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('67', '3', '11', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('67', '7', '11', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('67', '8', '11', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('67', '9', '11', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('68', '2', '11', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('68', '3', '11', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('68', '7', '11', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('68', '9', '11', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('69', '2', '11', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('69', '3', '11', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('69', '6', '11', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('69', '7', '11', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('69', '9', '11', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('70', '1', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('70', '2', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('70', '3', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('70', '7', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('70', '9', '12', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('71', '2', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('71', '3', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('71', '6', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('71', '7', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('71', '8', '12', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('71', '9', '12', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('72', '2', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('72', '3', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('72', '6', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('72', '7', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('72', '9', '12', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '1', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '2', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '3', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '4', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '5', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '6', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '7', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '8', '12', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('73', '9', '12', '2');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('74', '6', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('74', '7', '12', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '1', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '2', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '3', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '4', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '5', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '6', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '7', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '8', '12', '3');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('75', '9', '12', '3');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('76', '3', '13', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('76', '5', '13', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('76', '6', '13', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('77', '2', '13', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('77', '3', '13', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('77', '5', '13', '1');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('77', '6', '13', '1');

INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('78', '3', '13', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('78', '5', '13', '2');
INSERT INTO `tfg`.`acc_criterio_has_beneficio` (`criterio_id`, `beneficio_id`, `pauta_id`, `nivel_conformidad_id`) VALUES ('78', '6', '13', '2');