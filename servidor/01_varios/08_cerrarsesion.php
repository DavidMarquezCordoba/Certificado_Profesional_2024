<?php 
session_start();
session_unset(); //Elimina todas las variables de sesión
session_destroy(); //Elimina el identificador del servidor, pero la cookie con el inicio de sesión, no

echo 'Sesión cerrada, recarga tu página';
?>