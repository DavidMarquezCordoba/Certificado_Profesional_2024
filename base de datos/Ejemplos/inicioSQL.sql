
-- Ver las bases de datos diferentes que tenemos en servicio MySQL80
SHOW DATABASES;

-- 1º Crear una nueva base de datos
CREATE DATABASE youngpeople;

-- 2º Seleccionar (usar) una base de datos
USE youngpeople;

-- 3º Ver las tablas de la base de datos actual
SHOW tables;

-- 4º Crear una tabla
    -- DECIMAL indica nº total de dígitos y el nº de decimales que cogerá
CREATE TABLE productos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    precio DECIMAL(6,2) NOT NULL,
    PRIMARY KEY (id)
);

-- 5º Eliminar una tabla

DROP TABLE productos;

-- Ver las propiedades o columnas de una tabla

DESCRIBE productos;



/*
*
*/

-- ------------------------------------ --
--      C    R    E   A    T    E       --
-- ------------------------------------ --

-- 6º Añadir 1 registros o filas
INSERT INTO productos (nombre, precio) VALUES ("Camisa", 26.12);
--    Añadir 2 registros o filas
INSERT INTO productos (nombre, precio) VALUES ("Pantalón", 20.48), ("Falda", 18.45);

-- ------------------------------------ --
--          R    E    A    D            --
-- ------------------------------------ --

-- 7º Ver todos los registros (filas y columnas) de la tabla

SELECT * FROM productos;

-- Leer una sola columna de la tabla
SELECT nombre FROM productos;

-- Leer dos o más columnas de una tabla
SELECT id, nombre FROM productos;

-- Ordenar de forma DESCENDENTE los "id"
SELECT id, nombre FROM productos ORDER BY id DESC;

-- Lee columnas de id y nombre de una tabla, pero solo muestra dos resultados
SELECT id, nombre FROM productos ORDER BY id DESC LIMIT 2;

-- Lee columnas de id y nombre de una tabla, con un rango
    -- LIMIT 1 (indica cuantos registros salta, 2 los resultados que quieres que se muestre)
SELECT id, nombre FROM productos LIMIT 1,2;


-- 8º Búsquedas:

    -- Nombre de un producto en sí
    SELECT * FROM productos WHERE nombre="falda";

    -- Productos mayores de 20€
    SELECT * FROM productos WHERE precio > 20;

    -- Productos mayores de 20€ y menor de 25€
    SELECT * FROM productos WHERE precio BETWEEN 20 AND 25;

-- ------------------------------------ --
--         U   P   D   A   T   E        --
-- ------------------------------------ --

-- 9º Actualizar

-- Actualizamos el precio de un producto
UPDATE productos SET precio = 19.99 WHERE nombre = "pantalon";

-- Actualizamos el precio de un producto
UPDATE productos SET precio = 29.99, nombre = "Jeans" WHERE nombre = "pantalon";

-- ------------------------------------ --
--       D   E   L   E   T   E          --
-- ------------------------------------ --

-- 10º Borrar productos

-- Borrar un producto, que tenga la id = 2
DELETE FROM productos WHERE id = 2;

/*
*
*     FIN DEL CRUD
*
*/

-- ------------MODIFICAR COLUMNAS DE MI TABLA----------------- --

-- 11º Añadir una columna llamada categoria

ALTER TABLE productos ADD categoria VARCHAR(15) NOT NULL;

-- 12º Cambiamos configuración de la tabla
-- Change o Modify

ALTER TABLE productos CHANGE categoria categorias VARCHAR(20) NOT NULL;

-- Diferencias:
    -- Change cambia nombre y tipo
ALTER TABLE clientes CHANGE telefono telefono INT;
    -- Cambiamos solamente el nombre de una columna con RENAME
ALTER TABLE productos RENAME COLUMN codigo TO codigos;
    -- Modify cambia el tipo
ALTER TABLE clientes MODIFY telefono INT;


-- 13º Eliminar una columna

ALTER TABLE productos DROP COLUMN categorias;

-- Eliminar una tabla
DROP TABLE productos;

-- --------- --
-- FUNCIONES --
-- --------- --

-- ALIAS --
AS loquequieras

-- 1º Contar
SELECT COUNT(nombre) FROM productos WHERE genero = "Mujer";
SELECT COUNT(nombre) AS "Productos para mujeres" FROM productos WHERE genero = "Mujer";

-- 2º Contar productos agrupados por género
SELECT genero, COUNT(nombre) FROM productos GROUP BY genero;

-- 3º Contar productos agrupados por categoria
SELECT categoria, COUNT(nombre) FROM productos GROUP BY categoria;

-- 4º Contar los productos agrupados por género que tengan más de 30 prodcutos
SELECT genero , COUNT(nombre) AS cantidad FROM productos GROUP BY genero HAVING cantidad > 30;

-- 5º Muestra todos los géneros que son distintos de productos
SELECT DISTINCT genero FROM productos;

-- 6º Muestra los 10 primeros productos después de saltarnos los 20 primeros
SELECT id, nombre, precio FROM productos LIMIT 20,10;

-- 7º Lee los 10 primeros productos pero que añada Euro al precio
SELECT id, nombre, CONCAT(precio, " Euro") AS Precio FROM productos LIMIT 20,10;

-- 8º Sumar los valores de una columna
SELECT SUM(precio) AS "Precio total" FROM productos;

-- 9º Sumar los precios de productos de hombre
SELECT SUM(precio) AS "Precio total" FROM productos WHERE genero= "Hombre";

-- 10º Promedio del precio de los productos
SELECT CONCAT(AVG(precio), " Euros") AS "Precio promedio" FROM productos;

-- 11º Prodcutos con el precio por encima del precio promedio
SELECT id, nombre, precio FROM productos WHERE precio > (SELECT AVG(precio) FROM productos);

-- 12º Producto más barato/Caro de mis productos
SELECT MIN(precio) AS "Más barato" FROM productos;
SELECT MAX(precio) AS "Más caro" FROM productos;

-- 13º Primer producto con el precio más barato
SELECT id, nombre, precio FROM productos ORDER BY precio LIMIT 1;

-- 14º Producto con el precio más barato y CARO
SELECT id, nombre, precio FROM productos WHERE precio = (SELECT MIN(precio) FROM productos);
SELECT id, nombre, precio FROM productos WHERE precio = (SELECT MAX(precio) FROM productos);

-- 15º Productos con el nombre "Blazer Casual Moderno"
SELECT id, nombre, precio FROM productos WHERE nombre = "Blazer Casual Moderno";

-- El like se usa cuando se utiliza el comodín %

-- 16º Productos con el nombre que comience por Blazer
SELECT id, nombre, precio FROM productos WHERE nombre LIKE "Blazer%";

-- 17º Productos con el nombre que termine por "Moderno"
SELECT id, nombre, precio FROM productos WHERE nombre LIKE "%Moderno";

-- 18º Productos con el nombre que contiene "Cuero"
SELECT id, nombre, precio FROM productos WHERE nombre LIKE "%Cuero%";

-- 19º Productos con el nombre que contiene "Cuero" y "Moderno"
SELECT id, nombre, precio FROM productos WHERE nombre LIKE "%Cuero%Moderno%";

-- 20º Productos con el nombre que contiene "Cuero" y "Moderno sin importar el orden"
SELECT id, nombre, precio FROM productos WHERE (nombre LIKE "%Cuero%") AND (nombre LIKE "%Moderno%");

-- 21º Productos con el nombre que contiene "Cuero" O "Moderno sin importar el orden"
SELECT id, nombre, precio FROM productos WHERE (nombre LIKE "%Cuero%") OR (nombre LIKE "%Moderno%");

-- 22º Productos con el nombre que contiene "Cuero" O "Moderno pero no los dos"
SELECT id, nombre, precio FROM productos WHERE (nombre LIKE "%Cuero%") XOR (nombre LIKE "%Moderno%");

-- Búsqueda de un código con códigos numéricos
SELECT id, nombre, precio, codigos FROM productos WHERE codigos REGEXP '[0-9]';
-- Búsqueda de un código con códigos NO numéricos
SELECT id, nombre, precio, codigos FROM productos WHERE codigos REGEXP '[^0-9]';

-- ***************** --
-- Vamos a cambiar un código para ver si funciona
UPDATE productos SET codigos = "111-222" WHERE id = 99;
UPDATE productos SET codigos = "9137937270952" WHERE id = 99;