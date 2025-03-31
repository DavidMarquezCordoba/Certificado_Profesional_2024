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




