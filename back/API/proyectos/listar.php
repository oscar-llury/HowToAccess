<?php

require_once('../../global.php');

use back\db\DataBase;

$db =  new DataBase();
$contextDB = $db->context;
$objRespuesta = new StdClass();

$email = isset($_POST["username"]) ? $_POST["username"] : "";
$idUsuario = 1;
/*
if(empty($email)){
    $objRespuesta->status = 0;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ERROR_faltan_datos';
    echo json_encode($objRespuesta);
    exit();
}*/

$query = 'SELECT pro_proyecto.id, pro_proyecto.nombre, pro_proyecto.tipo_proyecto, completado, count(completado) as suma FROM usr_has_proyecto
INNER JOIN pro_proyecto ON usr_has_proyecto.id_proyecto=pro_proyecto.id AND pro_proyecto.activo=1 AND usr_has_proyecto.activo=1
INNER JOIN pro_has_criterio ON pro_has_criterio.proyecto_id=pro_proyecto.id AND pro_has_criterio.activo=1
WHERE usr_has_proyecto.id_usuario='.$idUsuario.'
group by pro_proyecto.id, completado ;';

$proyectosUsr = $contextDB->query($query)->fetchAll();
//var_dump($proyectosUsr);


if ($proyectosUsr) {
    $objRespuesta->status = 1;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ok';
    $objRespuesta->data = array();

    $id = 0;
    foreach($proyectosUsr as $prj){
        //var_dump($prj);
        //var_dump($id);
        //var_dump($prj);
        //var_dump($prj);
        //echo '<br><br>';
        if($prj->id != $id){
            //cambiamos de proyecto
            if($id > 0){
                //no es la primera iteracion
                $objData->estado = $sumTotalCrT==$sumTotalCrF ? true : false;
                $objData->criteriosT = $sumTotalCrT;
                $objData->criteriosF = $sumTotalCrF;
                array_push($objRespuesta->data ,$objData);
            }
            $objData = new StdClass();
            $sumTotalCrT = 0;
            $sumTotalCrF = 0;

            $id = $prj->id;
            $objData->id = cifrarBA64($prj->id);
            $objData->nombre = $prj->nombre;
            $objData->conformidad = $prj->tipo_proyecto;
        }
        
        if($prj->completado == 1){
            // == 1 finalizados
            $sumTotalCrF = $prj->suma;
        }
        $sumTotalCrT = $prj->suma;
    }
    $objData->estado = $sumTotalCrT==$sumTotalCrF ? true : false;
    $objData->criteriosT = $sumTotalCrT;
    $objData->criteriosF = $sumTotalCrF;
    array_push($objRespuesta->data ,$objData);
} else {
    $objRespuesta->status = 0;
    $objRespuesta->code = 2;
    $objRespuesta->msg = 'ERROR_USUARIO';
}


echo json_encode($objRespuesta);