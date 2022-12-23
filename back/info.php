<?php

var_dump($_SERVER);

var_dump($_SERVER['DOCUMENT_ROOT']);

$link = mysqli_connect('localhost', 'oscar', 'oscar', 'tfg');
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

phpinfo();
exit;
