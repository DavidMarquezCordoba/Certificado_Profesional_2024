MVC Examen Práctico Final del curso: 

Sobre el proyecto adjunto realizar las siguientes tareas:


1) Modificar el HTML de las vistas (archivos en la carpeta "views") para adaptarlas lo mejor que sepas a:
  - HTML semantico (1 punto)
  - atributos de accesibilidad que consideres oportunos. (1 punto)

2) Realiza y escribe aquí los pasos en SQL para:

  - crear una tabla llamada "roles" con las columnas "id"(Entero de 11 dígitos, no nulo, autoincremental y que sea primary key) y "nombre" (varchar de 50 carácteres, no nulo)  
  (0.5 puntos)
  
  - Introducirle los siguientes valores los siguientes valores:
      id    nombre
      1     Usuario
      2     Almacén
      3     Recursos Humanos
      4     Atención al público
      9     Administrador
      (0.5 puntos)

  - Generar la relación de la tabla clientes (columna "roleId" de clientes con columna "id" de roles) (1 punto)

3) En el archivo Usuario.php, en la función 
        public static function getUsuarios($orden = "id")
    modificar la consulta y el valor de la variable $orden para que nos entregue el nombre del role en vez de el "id", por lo que al estar logeado como administrador e irnos a la vista de los usuarios, nos saldrá el nombre de los roles en vez del "id" de los mismos.
    (1 punto)

4) En este momento tenemos un modal para visualizar el carrito de nuestros productos:
   (3 puntos)

  - Queremos que nuestro carrito aparezca en el menú cuando estemos logeados, independientemente de la página en la que estemos (el número de elementos en el carrito solamente saldrá en /tienda y en /carrito).
  
  - Crear ruta y función para la vista

  - Crear un archivo en la carpeta "views" llamado "carrito.php" con lo necesario para visualizar el carrito en esta vista. 

  - Modificar el archivo de la carpeta "models" el archivo "Menu.php" para que al pulsar el botón "carrito" este abra la vista correspondiente.

  - Crear en la carpeta "src" un archivo llamado "carrito.css" con el código css necesario para que el "total" tenga un tamaño de 40px y esté centrado.
  
  - Crear en la carpeta "src" un archivo llamado "carrito.js" añadiendo las variables y funciones necesarias de "tienda_detalle.js" y modificandolas para que funcionen en carrito.js, este javascript debe:
    * cargar los productos del carrito
    * eliminar los productos al pulsar sobre la X en el listado
    * actualizar valores de los productos al cambiar el número de unidades de un producto

5) Subir a tu hosting (servidor) todos los archivos que has modificado para que los cambios sean efectivos en producción
(2 puntos)



