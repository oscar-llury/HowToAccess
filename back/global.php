<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');


include_once('./vendor/autoload.php');


function descifrarId($id)
{
    return base64_decode($id);
}

function cifrarId($id)
{
    return base64_encode($id);
}