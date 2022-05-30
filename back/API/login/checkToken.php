<?php

include_once('../../global.php');

use back\db\DataBase;

$db =  new DataBase();
$contextDB = $db->context;
$objRespuesta = new StdClass();
$objData = new StdClass();

$token = isset($_POST["token"]) ? $_POST["token"] : "";

var_dump(validateToken($token));


$objRespuesta->status = 1;
$objRespuesta->code = 1;
$objRespuesta->username = 'ERROR_faltan_datos';
echo json_encode($objRespuesta);
exit;

if(empty($token) || empty($contrasena)){
    $objRespuesta->status = 0;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ERROR_faltan_datos';
    echo json_encode($objRespuesta);
    exit();
}


echo json_encode($objRespuesta);