<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

$foo = new stdClass();
$foo->token = 'TOKEN';
$foo->username = 'oscar';
echo json_encode($foo);