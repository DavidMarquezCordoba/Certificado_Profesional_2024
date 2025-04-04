Actividad en clase:

-- 1º LISTAR LAS DIFERENTES CATEGORÍAS QUE TENEMOS EN LA TABLA PRODUCTOS

SELECT DISTINCT categoria FROM productos;

-- 2º CREAR UNA NUEVA TABLA QUE SE LLAME "categorias" CON UN CAMPO ID Y UN CAMPO NOMBRE

CREATE TABLE categorias(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

-- 3º INSERTAR LOS VALORES DE CATEGORÍAS QUE HEMOS LISTADO ANTES.

-- Forma 1: 
            INSERT INTO categorias (id,nombre) VALUES (("Camisetas"),("Sudaderas"),("Pantalones"),("Faldas"),("Chaquetas"),("Calzado"),("Accesorios"));
-- Forma 2:
            INSERT INTO categorias (nombre) SELECT DISTINCT categoria FROM productos;

-- 4º CAMBIAR LOS VALORES EN EL CAMPO categoria DE LA TABLA productos POR LA id DEL VALOR CORRESPONDIENTE EN LA TABLA categorias

UPDATE productos SET categoria = 1 WHERE categoria = "Camisetas";
UPDATE productos SET categoria = 2 WHERE categoria = "Sudaderas";
UPDATE productos SET categoria = 3 WHERE categoria = "Pantalones";
UPDATE productos SET categoria = 4 WHERE categoria = "Faldas";
UPDATE productos SET categoria = 5 WHERE categoria = "Chaquetas";
UPDATE productos SET categoria = 6 WHERE categoria = "Calzado";
UPDATE productos SET categoria = 7 WHERE categoria = "Accesorios";

-- 5º CAMBIAR EL NOMBRE DEL CAMPO categoria DE LA TABLA productos A categoriaId

ALTER TABLE productos RENAME COLUMN categoria TO categoriaId;

-- 6º CAMBIAR EL TIPO DE DATO DEL CAMPO categoriaId A INT

ALTER TABLE productos MODIFY categoriaId INT;


-- 7º LISTAR LOS GÉNEROS QUE TENEMOS EN LA TABLA PRODUCTOS

        -- Lista todos los generos de la tabla productos
                SELECT genero FROM productos; 
        -- Lista todos los generos distintos de la tabla productos
                SELECT DISTINCT genero FROM productos; 

-- 8º CREAR UNA NUEVA TABLA QUE SE LLAME "generos" CON UN CAMPO ID Y UN CAMPO NOMBRE

CREATE TABLE generos(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

-- 9º HAY QUE INSERTAR LOS VALORES DE GÉNEROS QUE HEMOS LISTADO ANTES.

            -- Forma 1: 
            INSERT INTO generos (id,nombre) VALUES (("Hombre"),("Mujer"),("unisex"));
            -- Forma 2:
            INSERT INTO generos (nombre) SELECT DISTINCT genero FROM productos;

-- 10º CAMBIAR LOS VALORES EN EL CAMPO genero DE LA TABLA productos POR LA id DEL VALOR CORRESPONDIENTE EN LA TABLA generos

UPDATE productos SET genero = 1 WHERE genero = "Hombre";
UPDATE productos SET genero = 2 WHERE genero = "Mujer";
UPDATE productos SET genero = 3 WHERE genero = "Unisex";


-- 11º HAY QUE CAMBIAR EL NOMBRE DEL CAMPO genero DE LA TABLA PRODUCTOS A generoId

ALTER TABLE productos RENAME COLUMN genero TO generoId;

-- 12º HAY QUE CAMBIAR EL TIPO DE DATO DEL CAMPO generoId A INT

ALTER TABLE productos MODIFY generoId INT;

-- ********************************************************************* --
-- **            RELACIONAR TABLAS (PRODUCTOS Y CATEGORIAS)           ** --
-- ********************************************************************* --

-- Relacionamos la tabla productos-->categorias

ALTER TABLE productos
ADD CONSTRAINT categoriaFK
FOREIGN KEY (categoriaId)
REFERENCES categorias(id);

-- Relacionamos la tabla productos-->generos

ALTER TABLE productos
ADD CONSTRAINT generoFK
FOREIGN KEY (generoId)
REFERENCES generos(id);


-- ***************************************************** --
                -- TIPOS DE JOIN
-- ***************************************************** --

-- Te dice que tablas están relacionadas y (es un describe avanzado)
SHOW CREATE TABLE productos;

-- Para quitar el NULL, modificar su tipo es con la siguiente
ALTER TABLE productos MODIFY COLUMN categoriaId INT NULL;

-- Cambiar el valor categoriaId del producto con un id= 100 a NULL
UPDATE productos SET categoriaId = NULL WHERE id = 100;

-- Insertamos un nuevo valor a nuestra tabla categorias;
INSERT INTO categorias (id, nombre) VALUES (8, "Varios");

-- Nos muestra todos los productos que tengan alguna relación con la tabla categorias
-- En este caso 99 productos porque el producto con el id=100 tiene como categoriaId=NULL
SELECT productos.nombre, categorias.nombre FROM productos
INNER JOIN categorias ON productos.categoriaId = categorias.id;

-- NOS MUESTRA TODOS LOS PRODUCTOS, TENGAN O NO RELACIÓN CON EL ID DE LA TABLA CATEGORIAS
-- EN LOS PRODUCTOS QUE NO ENCUENTRE SU CORRESPONDENCIA EN LA TABLA CATEGORIAS, NOS PONDRÁ NULL
SELECT productos.nombre, categorias.nombre FROM productos
LEFT JOIN categorias ON productos.categoriaId = categorias.id;

-- NOS MUESTRA TODOS LOS PRODUCTOS QUE TIENEN UNA CORRESPONDENCIA CON LA TABLA CATEGORIAS
-- Y TAMBIÉN TODAS LAS CATEGORIAS QUE NO TIENEN CORRESPONDENCIA EN LA TABLA PRODUCTOS
SELECT productos.nombre, categorias.nombre FROM productos
RIGHT JOIN categorias ON productos.categoriaId = categorias.id;

-- *********** restauramos ************ --
UPDATE productos SET categoriaId = 2 WHERE id = 100;
ALTER TABLE productos MODIFY COLUMN categoriaId INT NOT NULL;
DELETE FROM categorias WHERE id = 8;


-- LEER EL NOMBRE DE UN PRODUCTO
SELECT nombre FROM productos WHERE nombre LIKE "camisa%";


-- LEER EL NOMBRE DE UN PRODUCTO y GENERO
SELECT productos.nombre AS "Nombre de producto", generos.nombre AS "Género" FROM productos
JOIN generos ON productos.generoId = generos.id
WHERE productos.nombre LIKE "camisa%";


-- LEER EL NOMBRE, GENERO Y CATEGORIA DE UN PRODUCTO
SELECT productos.nombre AS "Nombre de producto", categorias.nombre AS "Categorías", generos.nombre AS "Género" FROM productos
JOIN categorias ON productos.categoriaId = categorias.id
JOIN generos ON productos.generoId = generos.id
WHERE productos.nombre LIKE "camisa%";


-- LEER EL NOMBRE, GENERO Y CATEGORIA DE UN PRODUCTO usando pseudónimos
SELECT p.nombre AS "Nombre de producto", c.nombre AS "Categorías", g.nombre AS "Género" FROM productos p
JOIN categorias c ON p.categoriaId = c.id
JOIN generos g ON p.generoId = g.id
WHERE p.nombre LIKE "camisa%";