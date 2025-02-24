<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Include</title>
</head>
<body>
    <!-- Require: Falla si no se incluye correctamente -->
    <!-- include:  carga el fichero tantas veces como se ponga en el código, no se detiene-->
    <!-- Include_once:  Se carga una sola vez evitando duplicidades-->
    <?php require '06_prueba.php';?>
    <?php include '06_prueba.php';?>
    <?php //include_once '06_prueba.php';?>
    <?php //include_once '06_prueba.php';?>
    
    

</body>
</html>