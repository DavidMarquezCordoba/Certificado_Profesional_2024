Ejercicio 1: Crea una base de datos llamada gimnasio y escribe la instrucción para usarla:

CREATE DATABASE gimnasio;

USE gimnasio;

Ejercicio 2: Crea una tabla llamada clientes con las siguientes columnas:
    id (entero, clave primaria, autoincremental)
    nombre (texto, no nulo)
    peso (decimal con 4 dígitos y de esos 1 decimal)
    telefono (texto máximo 20 carácteres y no repetible)

CREATE TABLE clientes(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    peso DECIMAL(4,1) NOT NULL,
    telefono VARCHAR (20) UNIQUE,
    PRIMARY KEY (id)
);


Ejercicio 3: Inserta a la vez estos tres clientes en la tabla clientes

nombre: Pepe 
peso: 65.6
telefono: 0034-624-589-658

nombre: María 
peso: 59.9 
telefono: +34-687125984

nombre: Juan 
peso: 79.5
telefono: 0034685325520

INSERT INTO clientes (nombre, peso, telefono) VALUES ("Pepe", 65.6, "0034-624-589-658"),
                                                        ("María", 59.9, "+34-687125984"),
                                                        ("Juan", 79.5, "0034685325520");

Ejercicio 4: Muestra todos los clientes

SELECT * FROM clientes;

Ejercicio 5: Muestra los clientes con un peso mayor a 60

SELECT * FROM clientes WHERE peso > 60;

Ejercicio 6: Actualiza el peso del cliente con id = 2 a 60.5

UPDATE clientes SET peso = 60.5 WHERE id = 2;

Ejercicio 7: Elimina el cliente con id = 3.

DELETE FROM clientes WHERE id = 3;

Ejercicio 8: Agrega una columna llamada email de tipo VARCHAR(50) a la tabla clientes.

ALTER TABLE clientes ADD email VARCHAR(50);

Ejercicio 9: Muestra el peso promedio de todos los clientes.

SELECT AVG(peso) FROM clientes;

Ejercicio 10: Muestra todos los clientes ordenados por peso de manera descendente.

SELECT * FROM clientes ORDER BY peso DESC;

Ejercicio 11: Queremos cambiar la columna "telefono" a entero, pero primero tenemos que cambiar
                los valores a numéricos:
                
    - cambiamos los "+" por "00":

UPDATE clientes SET telefono = (REPLACE(telefono, '+', '00'));

    - cambiamos los "-" por "":

UPDATE clientes SET telefono = REPLACE(telefono, '-', '');

-- Si quisiéramos hacer las dos cosas a la vez
UPDATE clientes SET telefono = (REPLACE(REPLACE(telefono, '+', '00')), "-", "");

    - cambiamos la columna a BIGINT:

ALTER TABLE clientes MODIFY telefono BIGINT NOT NULL;

