CREATE TABLE IF NOT EXISTS `youngpeople`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `usuario` VARCHAR(100) NOT NULL,
  `pass` VARCHAR(45) NOT NULL,
  `roleId` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`));


-- ************************************ --

INSERT INTO clientes (nombre, usuario, pass) VALUES 
    ("Pepe", "pepe@pepe.com", "12345678"), 
    ("María", "maria@pepe.com", "12345678"), 
    ("Juan", "juan@pepe.com", "12345678");
