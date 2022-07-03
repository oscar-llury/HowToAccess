<?php

require_once('../../global.php');

use back\db\DataBase;

$db =  new DataBase();
$contextDB = $db->context;
$objRespuesta = new StdClass();

$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : "";
$id_cif = isset($_REQUEST["id"]) ? $_REQUEST["id"] : "";
$proyectoId_cif = isset($_REQUEST["proyectoId"]) ? $_REQUEST["proyectoId"] : "";
$idUsuario = 1;

if(empty($id_cif)){
    //no se ha enviado el id de pro_has_criterio
    $objRespuesta->status = 0;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ERROR_faltan_datos';
    echo json_encode($objRespuesta);
    exit();
}

$proyectoId = descifrarBA64($proyectoId_cif);
$id = descifrarBA64($id_cif);

//comprobacion usuario tiene proyecto y activos
$query1 = 'SELECT id_usuario, id_proyecto
FROM usr_has_proyecto
INNER JOIN pro_proyecto ON pro_proyecto.id=usr_has_proyecto.id_proyecto 
AND pro_proyecto.id='.$proyectoId.'
WHERE usr_has_proyecto.activo=1 AND usr_has_proyecto.id_usuario='.$idUsuario;

$comprobacion_usr = $contextDB->query($query1)->fetch();

if($comprobacion_usr) {

    //comprobacion proyecto y criterio
    $query2 = 'SELECT proyecto_id, criterio_id
    FROM pro_has_criterio
    INNER JOIN pro_proyecto ON pro_proyecto.id=pro_has_criterio.proyecto_id AND pro_proyecto.activo=1
    AND pro_proyecto.id='.$proyectoId.'
    WHERE pro_has_criterio.activo=1 AND pro_has_criterio.id='.$id;
    
    $comprobacion_proy = $contextDB->query($query2)->fetch();
    
    if($comprobacion_proy){

        try {
            $result = $contextDB->query('UPDATE pro_has_criterio SET', [
                'completado' => 1,
                'fecha_updated' => time(),
            ], 'WHERE id = ?', $id);

            if($result->getRowCount() == 1){
                $objRespuesta->status = 1;
                $objRespuesta->msg = 'OK';
            }else{
                $objRespuesta->status = 0;
                $objRespuesta->code = 4;
                $objRespuesta->msg = 'ERROR se ha producido un error';
            }
        }catch(Exception $e) {
            $objRespuesta->status = 0;
            $objRespuesta->code = 5;
            $objRespuesta->msg = 'ERROR se ha producido un error';
        }

    }else{
        $objRespuesta->status = 0;
        $objRespuesta->code = 3;
        $objRespuesta->msg = 'ERROR no se puede actualizar ese criterio para dicho proyecto';
    }

}else{
    $objRespuesta->status = 0;
    $objRespuesta->code = 2;
    $objRespuesta->msg = 'ERROR no tienes permisos para actualizar este proyecto';
}

echo json_encode($objRespuesta);