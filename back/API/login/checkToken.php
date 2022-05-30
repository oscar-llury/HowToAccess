<?php

include_once('../../global.php');

use back\db\DataBase;

$db =  new DataBase();
$contextDB = $db->context;
$objRespuesta = new StdClass();
$objData = new StdClass();

$token = isset($_REQUEST["token"]) ? $_REQUEST["token"] : "";


if(empty($token)){
    $objRespuesta->status = 0;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ERROR_faltan_datos';
    echo json_encode($objRespuesta);
    exit();
}

$validateToken = validateToken($token);

if($validateToken->status == 1){
    $objRespuesta->status = 1;
    $objRespuesta->data= new stdClass();
    $objRespuesta->data->idUsuario= $validateToken->idUsuario;
    $busquedaUsuario = $contextDB->table('usr_usuario')->where('id = ? AND activo = ?', $validateToken->idUsuario, ACTIVO);
    $usuario = $busquedaUsuario->fetch();
    $objRespuesta->data->username= $usuario['nombre'];
    $objRespuesta->msg = 'OK';
}else{
    $objRespuesta->status = 0;
    $objRespuesta->code = 2;
    $objRespuesta->msg = 'ERROR_token';
}

echo json_encode($objRespuesta);