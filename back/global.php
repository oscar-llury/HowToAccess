<?php

//header('Access-Control-Allow-Headers: [["Content-Type", "application/json"],["Content-Type", "text/plain"]]');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

if($_SERVER['SERVER_NAME'] == 'localhost'){
    $_SERVER['DOCUMENT_ROOT'] = $_SERVER['DOCUMENT_ROOT'].'/tfg/back';
}

require_once($_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php');

//const LOGIN_API = '/API/login/login';