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

SELECT clientes.nombre AS cliente, SUM(productos.precio * pedidosProductos.cantidad) AS "Total gastado" FROM clientes
JOIN pedidos ON pedidos.clienteId = clientes.id
JOIN pedidosProductos ON pedidosProductos.pedidoId = pedidos.id
JOIN productos ON productos.id = pedidosProductos.productoId
GROUP BY clientes.id;

- 15. Listar los productos de más vendidos a menos con su cantidad total

SELECT productos.nombre, productos.precio, SUM(pedidosProductos.cantidad) AS masVendidos FROM productos
JOIN pedidosProductos ON productos.id = pedidosProductos.productoId
GROUP BY productos.id
ORDER BY masVendidos DESC;

- 16. Registrar un pedido para el cliente id = 2 con un total de 400 y mostrar sus pedidos

INSERT INTO pedidos (clienteId, total)
VALUES (2, 400);

SELECT clientes.nombre, pedidos.id, pedidos.total FROM clientes
JOIN pedidos ON clientes.id = pedidos.clienteId
WHERE clientes.id = 2;

- 17. Añadir:
        - 2 unidades de los productos con id 8 y 2 al pedido id 2 
        - mostrar los productos del pedido

INSERT INTO pedidosProductos (productoId, pedidoId, cantidad)
VALUES (8, 2, 2), (2, 2, 2)
ON DUPLICATE KEY 
    UPDATE cantidad = cantidad + VALUES(cantidad);

select productos.nombre, pedidosProductos.cantidad from pedidosProductos 
join productos on productos.id = pedidosProductos.productoId
where pedidoId = 2;

- 18. Actualizar la cantidad del producto id 78 en el pedido id 5 a una cantidad de 7 unidades y mostrar los productos de ese pedido

UPDATE pedidosProductos SET cantidad = 7 where productoId = 78 and pedidoId = 5;

select pedidos.id as 'Pedido', 
        productos.nombre, 
        pedidosProductos.cantidad from pedidosProductos
join productos on productos.id = pedidosProductos.productoId
join pedidos on pedidos.id = pedidosProductos.pedidoId
where pedidoId = 5;


- 19. Mostrar el cliente con más pedidos

select clientes.nombre, COUNT(pedidos.id) as cantidadPedidos
from clientes
join pedidos on clientes.id = pedidos.clienteId
group by clientes.id
order by cantidadPedidos desc 
limit 1;

- 20. Mostrar el producto más vendido

select pedidosProductos.productoId, productos.nombre, SUM(pedidosProductos.cantidad) as cantidadVendida
from pedidosProductos
join productos on pedidosProductos.productoId = productos.id
group by pedidosProductos.productoId
order by cantidadVendida desc 
limit 1;


- 21. Insertar un nuevo cliente y listar los id y nombres de los clientes con sus pedidos

INSERT INTO clientes (nombre, usuario, pass) VALUES 
    ("Nuevo Cliente", "nuevocliente@ejemplo.com", "12-34-56-78");

-- IF NULL si el resultado es NULL, sustituye por el parámetro
select cl.id, cl.nombre, IFNULL(p.id, 0) as pedidoNumero from clientes cl
left join pedidos p on cl.id = p.clienteId --El left aparecen todos los resultados, tengan o no coincidencia
order by pedidoNumero asc;



-- *********************************************************************** --
- 22. Registrar un pedido al cliente id 4 con un total de 100 y 
listar todos los pedidos con id, fecha y total con el nombre del cliente

insert into pedidos (clienteId, total) values (4, 100);

select pedidos.id, pedidos.fecha, pedidos.total, clientes.nombre from pedidos
join clientes on clientes.id = pedidos.clienteId;


-- *********************************************************************** --

- 23. Añadir 2 unidades del producto con id 4 
y una unidad del producto id 5 al pedido id 3 
y mostrar los todos los productos vendidos con información del pedido y cliente que lo ha comprado

insert into pedidosProductos (productoId, pedidoId, cantidad)
values (4, 3, 2), (5, 3, 1)
on DUPLICATE KEY -- Duplicate es necesario si 
update cantidad = cantidad + values(cantidad);


select productos.nombre, pedidosProductos.cantidad, clientes.nombre as nombreCliente, pedidos.id as idProducto, pedidos.fecha from pedidos
join pedidosProductos on pedidos.id = pedidosProductos.pedidoId
join productos on productos.id = pedidosProductos.productoId
join clientes on clientes.id = pedidos.clienteId;

- 24. Actualizar a la cantidad = 5 del producto id 4 en el pedido id 3 y mostrar la información completa del pedido con sus productos y cliente

update pedidosProductos set cantidad = 5 where (productoId = 4 and pedidoId = 3);

select productos.id, productos.nombre as "producto", pedidosProductos.cantidad, pedidosProductos.precio, clientes.nombre, pedidos.fecha
from pedidosProductos
join productos on productos.id = pedidosProductos.productoId
join pedidos on pedidos.id = pedidosProductos.pedidoId
join clientes on pedidos.clienteId = clientes.id
where pedidoId = 3;

- 25. Actualizar el nombre del cliente id 4 a "Marta" y listar su nombre con sus pedidos y el total de cada pedido

update clientes set nombre = 'Marta' where id = 4;

select clientes.nombre, pedidos.* from clientes
join pedidos on clientes.id = pedidos.clienteId
where clientes.id = 4;

- 26. Eliminar el pedido id 4 y listar los pedidos restantes con fecha, total y con el nombre del cliente

delete from pedidos where id = 4;

select pedidos.id, clientes.nombre, pedidos.fecha, pedidos.total from pedidos
join clientes on pedidos.clienteId = clientes.id;

- 27. Mostrar el cliente que más dinero ha gastado en pedidos

select clientes.nombre, SUM(total) as totalCliente from clientes
join pedidos on clientes.id = pedidos.clienteId
group by clientes.id
order by totalCliente desc
limit 1;

- 28. Mostrar el producto más vendido con su nombre, los id de pedidos donde se han vendido y los clientes de esos pedidos

SELECT 
    pedidosProductos.productoId, 
    productos.nombre AS producto,
    pedidos.id AS pedidoId,
    clientes.nombre AS cliente,
    pedidosProductos.cantidad
FROM pedidosProductos
JOIN productos ON productos.id = pedidosProductos.productoId
JOIN pedidos ON pedidos.id = pedidosProductos.pedidoId
JOIN clientes ON clientes.id = pedidos.clienteId
WHERE pedidosProductos.productoId = (
    SELECT productoId
    FROM pedidosProductos
    GROUP BY productoId
    ORDER BY SUM(cantidad) DESC
    LIMIT 1
);


- 29. Mostrar todos los productos con su id, nombre, unidades (disponibles), precio y total de unidades vendidas. Ordenados de más vendido a menos




- 30. Mostrar los nombre de los clientes que han comprado más de 3 productos en total, junto al total de productos que han comprado (no de pedidos realiados)


- 31. - 26. Eliminar el pedido id 3 y listar los pedidos restantes con fecha, total y con el nombre del cliente, eliminando los totales de sus productos


- 32. Mostrar el olos clientes con más pedidos.

-- Insertar un nuevo pedido al cliente 3 para que tengamos 2 clientes con el máximo númerop de pedidos.
insert into pedidos (clienteId, total) values (3, 35);

-- Mostrar el o los clientes con más pedidos.
select 
    clientes.nombre,
    count(pedidos.id) as pedidos
from clientes
join pedidos on pedidos.clienteId = clientes.id
group by clientes.id
having pedidos = (select count(pedidos.id) as cantidadPedidos
    from pedidos
    group by clienteId
    order by cantidadPedidos desc
    limit 1);
