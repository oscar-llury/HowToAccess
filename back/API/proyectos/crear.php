<?php

require_once('../../global.php');

use back\db\DataBase;

$db =  new DataBase();
$contextDB = $db->context;
$objRespuesta = new StdClass();
$time = time();

$name = isset($_POST["name"]) ? $_POST["name"] : "";
$tipoCriterios = isset($_POST["tipoCriterios"]) ? $_POST["tipoCriterios"] : "";
$conformanceLevel = isset($_POST["conformanceLevel"]) ? $_POST["conformanceLevel"] : "";
$criterios_list = isset($_POST["criterios_list"]) ? $_POST["criterios_list"] : "";
$idUsuario = 1;

$criterios_list = json_decode($criterios_list);

if(!$criterios_list){
    //ERROR CRITERIOS PROYECTO
    $objRespuesta->status = 0;
    $objRespuesta->code = 2;
    $objRespuesta->msg = 'ERROR CRITERIOS PROYECTO';
    echo json_encode($objRespuesta);
    exit;
}

/*
if(empty($email)){
    $objRespuesta->status = 0;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ERROR_faltan_datos';
    echo json_encode($objRespuesta);
    exit();
}*/

$tipo_proyecto = 0;
if($tipoCriterios == 1){
    if($conformanceLevel == 1){
        $tipo_proyecto = 1;
    } else if($conformanceLevel == 2){
        $tipo_proyecto = 2;
    } else if($conformanceLevel == 3){
        $tipo_proyecto = 3;
    }else{
        //ERROR TIPO PROYECTO
        $objRespuesta->status = 0;
        $objRespuesta->code = 2;
        $objRespuesta->msg = 'ERROR TIPO PROYECTO';
        echo json_encode($objRespuesta);
        exit;
    }
} else if($tipoCriterios == 2){
    $tipo_proyecto = 4;
} else{
    //ERROR TIPO PROYECTO
    $objRespuesta->status = 0;
    $objRespuesta->code = 2;
    $objRespuesta->msg = 'ERROR TIPO PROYECTO';
    echo json_encode($objRespuesta);
    exit;
}

$result = $contextDB->query('INSERT INTO pro_proyecto ?', [ 
	'nombre' => $name,
	'fecha_created' => $time,
    'tipo_proyecto' => $tipo_proyecto,
]);

$id_proyecto = $contextDB->getInsertId();

$contextDB->query('INSERT INTO usr_has_proyecto ?', [ 
	'id_usuario' => $idUsuario,
	'id_proyecto' => $id_proyecto,
    'fecha_created' => $time,
]);

foreach($criterios_list as $criterio){
    $query = 'SELECT acc_criterio_conformidad.id, acc_criterio_conformidad.nombre
    FROM acc_criterio_conformidad
    INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id=acc_principio.id AND acc_principio.activo=1
    INNER JOIN acc_pauta ON acc_criterio_conformidad.pauta_id=acc_pauta.id AND acc_pauta.activo=1
    WHERE acc_criterio_conformidad.activo=1
    AND acc_principio.codigo='.$criterio->principio
    .' AND acc_pauta.codigo='.$criterio->pauta
    .' AND acc_criterio_conformidad.codigo='.$criterio->criterio;

    $criterio_id = $contextDB->query($query)->fetch();

    if($criterio_id && $criterio_id['id']){
        $contextDB->query('INSERT INTO pro_has_criterio ?', [ 
            'proyecto_id' => $id_proyecto,
            'criterio_id' => $criterio_id['id'],
            'fecha_created' => $time,
        ]);
    }
}

$objRespuesta->status = 1;
$objRespuesta->msg = 'OK';
echo json_encode($objRespuesta);