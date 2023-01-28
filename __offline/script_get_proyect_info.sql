-- comprobar que proyecto pertenece a usuario y obtener info basica de proyecto
SELECT nombre, tipo_proyecto
FROM usr_has_proyecto
INNER JOIN pro_proyecto ON usr_has_proyecto.id_proyecto=pro_proyecto.id AND pro_proyecto.activo=1 AND usr_has_proyecto.activo=1
WHERE pro_proyecto.activo=1 and usr_has_proyecto.id_usuario=1 and pro_proyecto.id=1;

-- contar criterios totales por principio
SELECT acc_principio.codigo, acc_principio.nombre, count(completado) as total
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where proyecto_id=1 and pro_has_criterio.activo=1
group by acc_principio.codigo;

-- contar criterios cumplidos por principio
SELECT acc_principio.codigo, acc_principio.nombre, count(completado) as cumplidos
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where proyecto_id=1 and pro_has_criterio.completado=1 and pro_has_criterio.activo=1
group by acc_principio.codigo;

-- seleccionar criterios de un proyecto
SELECT pro_has_criterio.id, completado, acc_principio.id as id_principio, acc_principio.codigo as principio, acc_pauta.codigo as pauta, acc_criterio_conformidad.codigo as criterio, nivel_conformidad, acc_criterio_conformidad.nombre
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_pauta ON acc_criterio_conformidad.pauta_id=acc_pauta.id and acc_pauta.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where proyecto_id=1 and pro_has_criterio.activo=1;

-- seleccionar los criterios de un beneficio
SELECT acc_principio.codigo as cod_principio,
acc_principio.nombre as nombre_principio,
acc_pauta.codigo as cod_pauta,
acc_pauta.nombre as nombre_pauta,
acc_criterio_conformidad.codigo as cod_criterio,
acc_criterio_conformidad.nombre as nombre_criterio,
acc_criterio_conformidad.nivel_conformidad as nivel_conformidad_id,
acc_nivel_conformidad.codigo as nivel_conformidad_code
FROM acc_criterio_has_beneficio
INNER JOIN acc_beneficio ON acc_criterio_has_beneficio.beneficio_id=acc_beneficio.id AND acc_beneficio.activo=1
INNER JOIN acc_criterio_conformidad ON acc_criterio_has_beneficio.criterio_id=acc_criterio_conformidad.id AND acc_criterio_conformidad.activo=1
INNER JOIN acc_nivel_conformidad ON acc_criterio_conformidad.nivel_conformidad=acc_nivel_conformidad.id AND acc_nivel_conformidad.activo=1
INNER JOIN acc_pauta ON acc_criterio_has_beneficio.pauta_id=acc_pauta.id AND acc_pauta.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id AND acc_principio.activo=1
where acc_beneficio.id IN (1,3)
group by acc_criterio_conformidad.id;