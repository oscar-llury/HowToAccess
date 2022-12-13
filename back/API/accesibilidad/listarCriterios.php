<?php

require_once('../../global.php');

use back\db\DataBase;

$db =  new DataBase();
$contextDB = $db->context;
$objRespuesta = new StdClass();

$conformanceLevel = isset($_POST["conformanceLevel"]) ? $_POST["conformanceLevel"] : "";
//$idUsuario = 1;
/*
if(empty($email)){
    $objRespuesta->status = 0;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ERROR_faltan_datos';
    echo json_encode($objRespuesta);
    exit();
}*/

$query = 'SELECT  acc_principio.codigo as cod_principio, acc_principio.nombre as nombre_principio, 
acc_pauta.codigo as cod_pauta, acc_pauta.nombre as nombre_pauta, 
acc_criterio_conformidad.codigo as cod_criterio, acc_criterio_conformidad.nombre as nombre_criterio,
acc_criterio_conformidad.nivel_conformidad as nivel_conformidad_id, acc_nivel_conformidad.codigo as nivel_conformidad_code
FROM acc_criterio_conformidad 
INNER JOIN acc_principio ON acc_criterio_conformidad.principio_id = acc_principio.id AND acc_principio.activo=1
INNER JOIN acc_pauta ON acc_criterio_conformidad.pauta_id = acc_pauta.id AND acc_pauta.activo=1
INNER JOIN acc_nivel_conformidad ON acc_criterio_conformidad.nivel_conformidad = acc_nivel_conformidad.id AND acc_nivel_conformidad.activo=1
where acc_criterio_conformidad.activo=1';
if ($conformanceLevel) {
    $query .= ' and acc_criterio_conformidad.nivel_conformidad IN(1';
    for ($i = 2; ($i <= $conformanceLevel) && ($conformanceLevel > 1) && ($conformanceLevel <= 3); $i++) {
        $query .= ',' . $i;
    }
    $query .= ')';
}
$query .=  ' order by cod_principio';
$allCriterios = $contextDB->query($query)->fetchAll();

if ($allCriterios) {
    $objRespuesta->status = 1;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ok';
    $objRespuesta->data = array();

    $idPrincipio = 0;
    $idPauta = 0;
    foreach ($allCriterios as $record) {
        //var_dump($prj);
        //var_dump($id);
        //var_dump($prj);
        //var_dump($prj);
        //echo '<br><br>';
        if ($record->cod_pauta != $idPauta) {
            //cambiamos de pauta, guardar la anterior
            if ($idPauta > 0) {
                //no es la primera iteracion
                array_push($objPrincipio->pautas, $objPauta);
            }

            $objPauta = new StdClass();
            if ($idPauta == 0) {
                //primera pauta de todas
                $objPauta->key = '1.' . $record->cod_pauta;
            } else if ($record->cod_principio != $idPrincipio) {
                //primera pauta de nuevo principio
                $objPauta->key = $record->cod_principio . '.' . $record->cod_pauta;
            } else {
                $objPauta->key = $objPrincipio->code . '.' . $record->cod_pauta;
            }
            $idPauta = $record->cod_pauta;
            $objPauta->name = $record->nombre_pauta;
            $objPauta->code =  $record->cod_pauta;
            $objPauta->criterios = array();
        }
        if ($record->cod_principio != $idPrincipio) {
            //cambiamos de principio
            if ($idPrincipio > 0) {
                //no es la primera iteracion

                array_push($objRespuesta->data, $objPrincipio);
            }
            $objPrincipio = new StdClass();
            $idPrincipio = $record->cod_principio;
            $objPrincipio->key = $record->cod_principio;
            $objPrincipio->code = $record->cod_principio;
            $objPrincipio->name = $record->nombre_principio;
            $objPrincipio->pautas = array();
        }

        $objCriterio = new stdClass();
        $objCriterio->key = $objPrincipio->code . '.' . $record->cod_pauta . '.' . $record->cod_criterio;
        $objCriterio->code = $record->cod_criterio;
        $objCriterio->name = $record->nombre_criterio;
        $objCriterio->level_code = $record->nivel_conformidad_id;
        $objCriterio->level_name = $record->nivel_conformidad_code;
        array_push($objPauta->criterios, $objCriterio);
    }
    array_push($objPrincipio->pautas, $objPauta);
    array_push($objRespuesta->data, $objPrincipio);
} else {
    $objRespuesta->status = 0;
    $objRespuesta->code = 2;
    $objRespuesta->msg = 'ERROR_USUARIO';
}


echo json_encode($objRespuesta);
