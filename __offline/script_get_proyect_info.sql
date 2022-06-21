-- comprobar que proyecto pertenece a usuario y obtener info basica de proyecto
SELECT nombre, tipo_proyecto
FROM usr_has_proyecto
INNER JOIN pro_proyecto ON usr_has_proyecto.id_proyecto=pro_proyecto.id AND pro_proyecto.activo=1 AND usr_has_proyecto.activo=1
WHERE pro_proyecto.activo=1 and usr_has_proyecto.id_usuario=1 and pro_proyecto.id=9;

-- contar criterios totales por principio
SELECT acc_principio.codigo, acc_principio.nombre, count(completado) as total
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where proyecto_id=9 and pro_has_criterio.activo=1
group by acc_principio.codigo;

-- contar criterios cumplidos por principio
SELECT acc_principio.codigo, acc_principio.nombre, count(completado) as cumplidos
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where proyecto_id=9 and pro_has_criterio.completado=1 and pro_has_criterio.activo=1
group by acc_principio.codigo;

-- seleccionar criterios de un proyecto
SELECT completado, acc_principio.codigo as principio, acc_pauta.codigo as pauta, acc_criterio_conformidad.codigo as criterio, nivel_conformidad, acc_criterio_conformidad.nombre
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_pauta ON acc_criterio_conformidad.pauta_id=acc_pauta.id and acc_pauta.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where proyecto_id=9 and pro_has_criterio.activo=1;