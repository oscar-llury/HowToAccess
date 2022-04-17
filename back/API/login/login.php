<?php

include_once('../../global.php');

use back\db\DataBase;

$db =  new DataBase();
$contextDB = $db->context;
$objRespuesta = new StdClass();
$objData = new StdClass();

$email = isset($_POST["username"]) ? $_POST["username"] : "";
$contrasena = isset($_POST["password"]) ? $_POST["password"] : "";

if(empty($email) || empty($contrasena)){
    $objRespuesta->status = 0;
    $objRespuesta->code = 1;
    $objRespuesta->msg = 'ERROR_faltan_datos';
    echo json_encode($objRespuesta);
    exit();
}

$contrasena = hash('sha256', $contrasena);


$busquedaUsuario = $contextDB->table('usr_usuario')->where('email = ? AND activo = ?', $email, ACTIVO);
$usuario = $busquedaUsuario->fetch();


if ($usuario) {
    if ($usuario->contrasena == $contrasena) {
        $objRespuesta->status = 1;
        $objRespuesta->code = 1;
        $objRespuesta->msg = 'ok';
        
        $objData->idUsuario = $usuario->id;
        $objData->username = $usuario->nombre;

        //TODO GENERACION DEL TOKEN JWT
        $objData->token = generateToken($usuario->id);

        $objRespuesta->data = $objData;
    } else {
        $objRespuesta->status = 0;
        $objRespuesta->code = 3;
        $objRespuesta->msg = 'ERROR_CONTRASENA';
    }
} else {
    $objRespuesta->status = 0;
    $objRespuesta->code = 2;
    $objRespuesta->msg = 'ERROR_USUARIO';
}


echo json_encode($objRespuesta);