
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
    -- Modify cambia el tipo
    -- Change cambia nombre y tipo
ALTER TABLE clientes MODIFY telefono INT;
ALTER TABLE clientes CHANGE telefono telefono INT;


-- 13º Eliminar una columna

ALTER TABLE productos DROP COLUMN categorias;

-- Eliminar una tabla
DROP TABLE productos;