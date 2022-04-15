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
INSERT INTO `tfg`.`pro_tipo_proyecto` (`nombre`) VALUES ('Nivel de conformidad objetivo');
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
