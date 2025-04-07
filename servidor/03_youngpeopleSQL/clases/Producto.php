<?php 

class Producto {
    private $nombre;
    private $categoria;
    private $precio;
    private $unidadesDisponibles;
    private $tallasDisponibles;
    private $genero;
    private $foto;
    private $codigoBarras;
    private $descripcion;

    public function __construct($producto, $idioma = 'es')
    {
        $this->nombre = $producto['nombre'][$idioma] ?? $producto['nombre']['es']; // ?? significa: si no existe lo primero ponme lo otro
        $this->categoria = $producto['categoria'][$idioma] ?? $producto['categoria']['es'];
        $this->precio = $producto['precio'];
        $this->unidadesDisponibles = $producto['unidades_disponibles'];
        $this->tallasDisponibles = $producto['tallas_disponibles'];
        $this->genero = $producto['genero'][$idioma] ?? $producto['genero']['es'];
        $this->foto = $producto['foto'];
        $this->codigoBarras = $producto['codigo_barras'];
        $this->descripcion = $producto['descripcion'][$idioma] ?? $producto['descripcion']['es'];
    }

    public function reducido(){
        return [
            'nombre' => $this->nombre,
            'foto' => $this->foto,
            'precio' => $this->precio,
            'codigo_barras' => $this->codigoBarras
        ];
    }

    public function obtenerDetalles(){
        return [
            'nombre' => $this->nombre,
            'foto' => $this->foto,
            'precio' => $this->precio,
            'codigo_barras' => $this->codigoBarras,
            'categoria' => $this->categoria,
            'tallas_disponibles' => $this->tallasDisponibles,
            'unidades_disponibles' => $this->unidadesDisponibles,
            'genero' => $this->genero,
            'descripcion' => $this->descripcion
        ];
    }
}

?>