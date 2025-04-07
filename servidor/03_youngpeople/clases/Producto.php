<?php 

class Producto {
    private $nombre;
    private $categoria;
    private $precio;
    private $unidadesDisponibles;

    private $genero;
    private $foto;
    private $codigoBarras;
    private $descripcion;

    public function __construct($producto, $idioma = 'es')
    {
        $this->nombre = $producto['nombre']; // ?? significa: si no existe lo primero ponme lo otro
        $this->categoria = $producto['categoriaId'];
        $this->precio = $producto['precio'];
        $this->unidadesDisponibles = $producto['unidades'];

        $this->genero = $producto['generoId'];
        $this->foto = $producto['foto'];
        $this->codigoBarras = $producto['codigo'];
        $this->descripcion = $producto['descripcion'];
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

            'unidades' => $this->unidadesDisponibles,
            'genero' => $this->genero,
            'descripcion' => $this->descripcion
        ];
    }
}

?>