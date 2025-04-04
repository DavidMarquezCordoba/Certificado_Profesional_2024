-- 04/04/205 - 1º

-- Ver triggers
SHOW TRIGGERS;

-- Eliminar un trigger
DROP TRIGGER nombreDelTrigger;

-- Eliminar un trigger si existe
DROP TRIGGER IF EXISTS nombreDelTrigger;

-- 1º Añadir la columna "precio" a nuestra tabla "pedidosProductos"
ALTER TABLE pedidosProductos ADD COLUMN precio DECIMAL(10,2) NOT NULL DEFAULT 0;

-- creamos un trigger para añadir el precio del producto a la tabla "pedidosProductos"

DELIMITER $$
CREATE TRIGGER pedidosProductos_BEFORE_INSERT
BEFORE INSERT ON pedidosProductos
FOR EACH ROW
BEGIN

    SET NEW.precio = (SELECT precio FROM productos WHERE id = NEW.productoId);

END $$
DELIMITER ;


INSERT INTO pedidosProductos (pedidoId, productoId) VALUES (3,30);

-- Creamos un trigger que al insertar un producto a un pedido en pedidosProductos me calcule
-- el total de los productos y los guarde en la columna total de la tabla "pedidos"

DELIMITER $$
CREATE TRIGGER pedidosProductos_AFTER_INSERT
AFTER INSERT ON pedidosProductos
FOR EACH ROW
BEGIN

    DECLARE totalPedido DECIMAL(10,2);

    -- Calcular el nuevo total del pedido, sumando el precio de todos los productos con ese pedido en la tabla pedidosProductos
    -- y multiplicándolo por la columna "cantidad"
    SELECT COALESCE(SUM(pedidosProductos.precio * pedidosProductos.cantidad), 0)
    INTO totalPedido
    FROM pedidosProductos
    WHERE pedidosProductos.pedidoId = NEW.pedidoId;

    -- Ahora actualizamos el valor de la columna "total" de mi tabla "pedidos" con el id al que se ha insertado el producto
    UPDATE pedidos
    SET total = totalPedido, 
        fecha = CURRENT_TIMESTAMP  -- Actualiza la fecha del pedido a la hora actual
    WHERE id = NEW.pedidoId;


END $$
DELIMITER ;

INSERT INTO pedidosProductos (pedidoId, productoId) VALUES (3,31);
INSERT INTO pedidosProductos (pedidoId, productoId, cantidad) VALUES (3,32, 2);