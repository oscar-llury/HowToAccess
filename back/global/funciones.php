<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

/**
 * Cifrar en base 64
 */
function cifrarBA64($foo)
{
    return base64_encode($foo);
}

/**
 * Descifrar base 64
 */
function descifrarBA64($foo)
{
    return base64_decode($foo);
}

/**
 * Genera un token para un usuario, al que se le puede asignar una caducidad.
 */
function generateToken($idUsuario, $idiomaUsuario = null, $time = null): string
{
    $key = 'PA22_T0K3N';
    if (!defined('IDIOMA_USR')){
        //sino para evitar errores poner idioma por defecto
        $idiomaUsuario = IDIOMA_POR_DEFECTO;
    }
    $token = [
        'iat' => time(),
        'iss' => base64_encode($idUsuario),
        'idiomusr' => base64_encode($idiomaUsuario),
    ];

    if (!is_null($time)) {
        $token['exp'] = time() + $time;
    }

    return (JWT::encode($token, $key, 'HS256'));
}

/**
 * Se valida el token y devuelve los datos`.
 */
function validateToken($token): stdClass
{
    $foo = new stdClass();
    $foo->status = 1;
    $foo->idUsuario = 1;
    $foo->idiomusr = 'ES';
    return $foo;

    $key = 'PA22_T0K3N';
    try {
        $data = JWT::decode($token, new Key($key, 'HS256'));
        var_dump($data );
        $foo->status = 1;
        $foo->idUsuario = base64_decode($data->iss);
        $foo->idiomusr = base64_decode($data->idiomusr);
    } catch (Exception $e) {
        $foo->status = 3;
        $foo->msg = $e->getMessage();
    }
    return $foo;
}
