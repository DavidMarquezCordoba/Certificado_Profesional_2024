CREATE TABLE IF NOT EXISTS `youngpeople`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clienteId` INT NOT NULL,
  `fecha` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total` DECIMAL(8,2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `fk_pedidos_clientes1_idx` (`clienteId` ASC) VISIBLE,
  CONSTRAINT `clienteFK`
    FOREIGN KEY (`clienteId`)
    REFERENCES `youngpeople`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


    -- ******************************* --

-- Esto crea 3 pedidos
    INSERT INTO pedidos (clienteId) VALUES (1), (2), (3);

-- Creamos un nuevo pedido
    INSERT INTO pedidos (clienteId) VALUES (1);
