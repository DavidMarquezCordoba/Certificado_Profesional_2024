    -- COALESCE(valor1, valor2, valor3, ...) EL PRIMER VALOR NO NULL SERÁ EL DEVUELTO 
    -- IFNULL(valor, valor si el primero es NULL) DEVUELVE valor SI NO ES NULL, SINO DEVUELVE EL SEGUNDO ARGUMENTO


-- PRACTICAS DE CRUD Y JOIN
- 11. Añadir:
        1 pedido al cliente 3
        2 pedidos al 1, 
    Añadir:
        el producto id 12 al pedido 2, 
        id 78 al pedido 5
        id 45 al pedido 7 

    y Listar todos los pedidos con el nombre del cliente

INSERT INTO pedidos (clienteId) VALUES (3), (1), (1);

INSERT INTO pedidosProductos (productoId, pedidoId) VALUE (12, 2), (78, 5), (45, 7);

SELECT pedidos.id AS "Número pedido", clientes.nombre AS "Cliente", pedidos.fecha, pedidos.total FROM pedidos 
JOIN clientes ON clientes.id = pedidos.clienteId;

- 12. Obtener los detalles del pedido id 1, mostrando el nombre del producto y su cantidad

SELECT productos.nombre, pedidosProductos.cantidad FROM pedidosProductos
JOIN productos ON productos.id = pedidosProductos.productoId
WHERE pedidosProductos.pedidoId = 1;

-- Si quisiéramos saber el nombre del cliente de este pedido
SELECT clientes.nombre AS "Cliente", productos.nombre AS "Producto", pedidosProductos.cantidad FROM pedidosProductos
JOIN productos ON productos.id = pedidosProductos.productoId
JOIN pedidos ON pedidos.id = pedidosProductos.pedidoId
JOIN clientes ON clientes.id = pedidos.clienteId
WHERE pedidosProductos.pedidoId = 1;

- 14. Mostrar el total gastado por cada cliente



- 15. Listar los productos de más vendidos a menos con su cantidad total



- 16. Registrar un pedido para el cliente id = 2 con un total de 400 y mostrar sus pedidos



- 17. Añadir 2 unidades de los productos con id 8 y 2 al pedido id 2 y mostrar los productos del pedido



- 18. Actualizar la cantidad del producto id 78 en el pedido id 5 a una cantidad de 7 unidades y mostrar los productos de ese pedido



- 19. Mostrar el cliente con más pedidos



- 20. Mostrar el producto más vendido




- 21. Insertar un nuevo cliente y listar los id y nombres de los clientes con sus pedidos



- 22. Registrar un pedido al cliente id 4 con un total de 100 y listar todos los pedidos con id, fecha y total con el nombre del cliente



- 23. Añadir 2 unidades del producto con id 4 y una unidad del producto id 5 al pedido id 3 y mostrar los todos los productos vendidos con información del pedido y cliente que lo ha comprado



- 24. Actualizar a la cantidad = 5 del producto id 4 en el pedido id 3 y mostrar la información completa del pedido con sus productos y cliente



- 25. Actualizar el nombre del cliente id 4 a "Marta" y listar su nombre con sus pedidos y el total de cada pedido



- 26. Eliminar el pedido id 3 y listar los pedidos restantes con fecha, total y con el nombre del cliente



- 27. Mostrar el cliente que más dinero ha gastado en pedidos



- 28. Mostrar el producto más vendido con su nombre, los id de pedidos donde se han vendido y los clientes de esos pedidos



- 29. Mostrar todos los productos con su id, nombre, unidades (disponibles), precio y total de unidades vendidas. Ordenados de más vendido a menos



- 30. Mostrar los nombre de los clientes que han comprado más de 3 productos en total, junto al total de productos que han comprado (no de pedidos realiados)


