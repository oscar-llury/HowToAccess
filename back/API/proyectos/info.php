<?php

require_once('../../global.php');

use back\db\DataBase;

$db =  new DataBase();
$contextDB = $db->context;
$objRespuesta = new StdClass();

$proyectoId_cif = isset($_REQUEST["proyectoId"]) ? $_REQUEST["proyectoId"] : "";
$idUsuario = 1;

if(empty($proyectoId_cif)){
    //no se ha enviado el id de proyecto
    $objRespuesta->status = 0;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ERROR_faltan_datos';
    echo json_encode($objRespuesta);
    exit();
}

$proyectoId = descifrarBA64($proyectoId_cif);

//comprobar que proyecto pertenece al usuario
$query1 = 'SELECT nombre, tipo_proyecto
FROM usr_has_proyecto
INNER JOIN pro_proyecto ON usr_has_proyecto.id_proyecto=pro_proyecto.id AND pro_proyecto.activo=1 AND usr_has_proyecto.activo=1
WHERE pro_proyecto.activo=1 and usr_has_proyecto.id_usuario='.$idUsuario.'
 and pro_proyecto.id='. $proyectoId;
$info_proyecto = $contextDB->query($query1)->fetch();

$proyecto = new stdClass();
$proyecto->id = cifrarBA64($proyectoId);
$proyecto->nombre = $info_proyecto['nombre'];
$proyecto->conformidad = $info_proyecto['tipo_proyecto'];
$proyecto->criterios_totales = 0;
$proyecto->criterios_cumplidos = 0;
$proyecto->principios = array();
$proyecto->criterios = array();

// contar criterios totales por principio
$query2 = 'SELECT acc_principio.codigo, acc_principio.nombre, count(completado) as total
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where pro_has_criterio.activo=1 and proyecto_id='.$proyectoId .'
group by acc_principio.codigo';
$principios_totales = $contextDB->query($query2)->fetchAll();

// contar criterios cumplidos por principio
$query3 = 'SELECT acc_principio.codigo, acc_principio.nombre, count(completado) as cumplidos
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where pro_has_criterio.completado=1 and pro_has_criterio.activo=1 and proyecto_id='.$proyectoId .'
group by acc_principio.codigo';
$principios_cumplidos = $contextDB->query($query3)->fetchAll();

//recorrer los 4 principios
for($i = 0; $i <4; $i++) {
    $principio = new stdClass();
    //controlar que no está fuera de limites
    $total = $principios_totales[$i] ?? null;
    $cumplido = $principios_cumplidos[$i] ?? null;
    
    $principio->codigo = $total['codigo'];
    $principio->nombre = $total['nombre'];
    $principio->total = $total['total'];

    if($cumplido){
        $principio->cumplidos = $cumplido['cumplidos'];
    }else{
        $principio->cumplidos = 0;
    }

    $proyecto->criterios_totales = $proyecto->criterios_totales + $principio->total;
    $proyecto->criterios_cumplidos = $proyecto->criterios_cumplidos + $principio->cumplidos;
    
    array_push($proyecto->principios,$principio);
}

// seleccionar criterios de un proyecto
$query4 = 'SELECT pro_has_criterio.id, completado, acc_principio.id as id_principio, acc_principio.codigo as principio, acc_pauta.codigo as pauta, acc_criterio_conformidad.codigo as criterio, nivel_conformidad, acc_criterio_conformidad.nombre
FROM pro_has_criterio
INNER JOIN acc_criterio_conformidad ON pro_has_criterio.criterio_id=acc_criterio_conformidad.id and acc_criterio_conformidad.activo=1
INNER JOIN acc_pauta ON acc_criterio_conformidad.pauta_id=acc_pauta.id and acc_pauta.activo=1
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id and acc_principio.activo=1
where proyecto_id='.$proyectoId .' and pro_has_criterio.activo=1';
$criterios = $contextDB->query($query4)->fetchAll();

foreach($criterios as $criterio){
    $foo = new stdClass();
    $foo->completado = $criterio['completado'];
    $foo->indice = $criterio['principio'].'.'.$criterio['pauta'].'.'.$criterio['criterio'];
    $foo->conformidad = $criterio['nivel_conformidad'];
    $foo->principio = $criterio['id_principio'];
    $foo->nombre = $criterio['nombre'];
    $foo->id = cifrarBA64($criterio['id']);
    array_push($proyecto->criterios,$foo);
}

$objRespuesta->status = 1;
$objRespuesta->msg = 'OK';
$objRespuesta->data = $proyecto;

echo json_encode($objRespuesta);