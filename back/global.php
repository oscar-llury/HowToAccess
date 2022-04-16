<?php

//header('Access-Control-Allow-Headers: [["Content-Type", "application/json"],["Content-Type", "text/plain"]]');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

$_SERVER['DOCUMENT_ROOT'] = $_SERVER['DOCUMENT_ROOT'].'/tfg/back';
require_once($_SERVER['DOCUMENT_ROOT'].'/vendor/autoload.php');

const ACTIVO = 1;
const NO_ACTIVO = '0';

function descifrarId($id)
{
    return base64_decode($id);
}

function cifrarId($id)
{
    return base64_encode($id);
}