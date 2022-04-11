<?php

include_once('./global.php');

use back\db\DataBase;

$db =  new DataBase();

$email = isset($_REQUEST["user"]) ? $_REQUEST["user"] : "";
$contrasena = isset($_REQUEST["passw"]) ? $_REQUEST["passw"] : "";

$contrasena = hash('sha256', $contrasena);

var_dump($contrasena);

$foo = new stdClass();
$foo->token = 'TOKEN';
$foo->username = 'oscar';
echo json_encode($foo);