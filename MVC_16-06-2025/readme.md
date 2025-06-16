MVC Examen Práctico Módulo Formativo 2: 

Sobre el proyecto adjunto realizar las siguientes tareas:

1) En el archivo Productos.php, realizar la función "nuevoProducto" para que inserte un producto nuevo en la base de datos:

   - comprobando que no existe un producto con ese código de barras en la tabla productos (1 punto)

   - En el caso de que exista un producto con ese código de barras, en el mensaje de error al usuario hay que decirle que no puede crear el producto porque ese código de barras está dado de alta en el sistema con el producto ...(decir el nombre del producto)..  (1 punto)

   - Consulta SQL de introducir el producto en la base de datos (1 punto)

   (Para conseguir los 3 puntos debe funcionar completamente la función)

2) En el archivo Productos.php, en la función "eliminarProducto", modificar el interior del "if" siguiente para que nos diga el "id" del pedido en el que está y el nombre del cliente que tiene ese pedido. Para ello tendrás que crear una función estática en Pedido.php llamada  "getPedidoProducto($producto)" que nos devuelva el primer pedido que contenga ese producto incluido el nombre de usuario del pedido (1.5 puntos)

            if($productoEliminado[1] == 1451) {
                $pedido = Pedido::getPedidoProducto($datosRecibidos['codigo']);
                if(empty($pedido)){
                  return ['ok' => false,'error' => 'El producto no se ha eliminado porque está incluido en algún pedido pero no se cual'];
                }
                return ['ok' => false,'error' => 'El producto no se ha eliminado porque está incluido en el pedido ' . $pedido['id'] . ' del cliente ' . $pedido['nombre'] ];
            }

 
3) Escribe aquí y ejecuta en el terminal una consulta para modificar el roleId de un usuario que tengas creado a roleId = 9  (0.5 puntos)
  UPDATE clientes SET roleId = 9 WHERE id=1;

4) Crear en el menú un link "/usuarios" llamado "Usuarios" que solamente aparezca cuando el usuario logeado tenga roleId = 9 en la base de datos. (1 punto)

5) En el proyecto existe una vista llamada usuarios.php y en src/js/ un usuarios.js:
    

    - Crear una ruta "/usuarios" y su correspondiente función en el VistaController.php llamada "usuarios" que muestre la vista "views/usuarios.php" y su archivo javascript correspondiente (1 puntos)

    - Observando el archivo usuarios.js, en la función "cargaUsuarios":
    
       - Crear una ruta a la API a la que hace la petición "cargaUsuarios" y su correspondiente función en UserController.php llamada "usuarios" (0.5 puntos) 
       
       - Que esa función entregue el listado de usuarios que hay en la tabla "clientes" de forma que pueda usarlos la función "cargaUsuarios" de usuarios.js para pintar todos los usuarios y que tenga en cuenta el argumento "orden". Para conseguir los usuarios tendrá que llamar a una función estática que se llamará "getUsuarios" que debes crear en Usuario.php
            public static function getUsuarios($orden = "id"){ ... }
       , como ves, recibe un parametro opcional "$orden", usuario.js envía el nombre de la columna por la cual queremos que se ordene, nuestra función "getUsuarios" debe tener en cuenta este valor para entregar el listado en ese orden y si no hay orden, se entregará el orden por "id". (2.5 puntos)
