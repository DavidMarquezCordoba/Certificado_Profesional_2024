<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Young People</title>
    <link rel="stylesheet" href="css/style.css">

    <!-- Importamos fuente de Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

    <!-- Importamos el estilo -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/header.css">

    <!-- Importamos el script con el atributo DEFER -->
    <!-- DEFER: importa el script un poco antes de terminar el DOM y se puede poner al principio en el HEAD -->
    <script defer src="../js/index.js"></script>
    




















    <!-- NOTAS -->
    
    <!-- DEFER
    defer:
        Carga: El script con defer se descarga en paralelo al resto del contenido de la página, sin bloquear la renderización de la misma.
        
        Ejecución: La ejecución del script se retrasa hasta que el DOM haya sido completamente cargado y parseado, pero antes de que se ejecute el DOMContentLoaded.
        
        Orden: Si hay múltiples scripts con defer, se ejecutan en el orden en el que aparecen en el HTML.
        
        Uso recomendado: Se utiliza cuando se desea que el script interactúe con el DOM (por ejemplo, manipular elementos HTML), ya que garantiza que el DOM esté listo.
    -->

    <!-- ASYNC
    sync:
        Carga: El script con async se descarga en paralelo al resto del contenido de la página, pero puede ejecutarse tan pronto como se haya descargado, sin esperar a que el DOM esté completamente cargado.
    
        Ejecución: El script se ejecuta tan pronto como se termina de descargar, lo que significa que puede ejecutarse antes de que el DOM esté listo.
    
        Orden: Si hay múltiples scripts con async, se ejecutan en el orden en que se descargan, no en el orden en que aparecen en el HTML. Esto puede causar que se ejecuten en un orden impredecible.
    
        Uso recomendado: Se usa para scripts que no dependen del DOM ni de otros scripts (por ejemplo, análisis de datos, scripts que no interfieren con la estructura de la página).
    -->