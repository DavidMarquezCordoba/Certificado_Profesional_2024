CREATE TABLE IF NOT EXISTS `youngpeople`.`pedidosProductos` (
  `productoId` INT NOT NULL,
  `pedidoId` INT NOT NULL,
  `cantidad` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`productoId`, `pedidoId`),
  INDEX `fk_productos_has_pedidos_pedidos1_idx` (`pedidoId` ASC) VISIBLE,
  INDEX `fk_productos_has_pedidos_productos1_idx` (`productoId` ASC) VISIBLE,
  CONSTRAINT `productoFK`
    FOREIGN KEY (`productoId`)
    REFERENCES `youngpeople`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pedidoFK`
    FOREIGN KEY (`pedidoId`)
    REFERENCES `youngpeople`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    -- ****************************** --
    ALTER TABLE pedidosProductos RENAME COLUMN productosId TO productoId;
    ALTER TABLE pedidosProductos RENAME COLUMN pedidosId TO pedidoId;
    -- ****************************** --
    

    INSERT INTO pedidosProductos (productoId, pedidoId) VALUES (1,1), (5, 2), (100, 1);
    INSERT INTO pedidosProductos (productoId, pedidoId, cantidad) VALUES (3,1, 3), (78, 2, 5), (45, 1, 2);


    -- Insertar productos en un pedido con una cantidad 

    -- Si ya existe una fila con el mismo producto y pedido, se sumará la cantidad
    -- Si al sumar las cantidades da 0 o negativo, se elimina la fila
    -- Si no existe, se crea una fila nueva

-- Añado alproducto 5, 3 productos al pedido 2
    INSERT INTO pedidosProductos (productoId, pedidoId, cantidad)
    VALUES (5, 2, 3)
    ON DUPLICATE KEY 
        UPDATE cantidad = cantidad + VALUES(cantidad);

-- Añado al producto 5, -2 productos al pedido 2
    INSERT INTO pedidosProductos (productoId, pedidoId, cantidad)
    VALUES (5, 2, -2)
    ON DUPLICATE KEY 
        UPDATE cantidad = cantidad + VALUES(cantidad);

-- Añado al producto 5, -2 productos al pedido 2, pero esta vez, dará 0 y eliminará la fila
    INSERT INTO pedidosProductos (productoId, pedidoId, cantidad)
    VALUES (5, 2, -2)
    ON DUPLICATE KEY 
        UPDATE cantidad = cantidad + VALUES(cantidad);

    DELETE FROM pedidosProductos
    WHERE cantidad <= 0;

