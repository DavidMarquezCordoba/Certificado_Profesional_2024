<?php 
namespace Models;


class Producto {
    private $nombre;
    private $categoria;
    private $categoriaId;
    private $precio;
    private $unidadesDisponibles;
    private $genero;
    private $generoId;
    private $foto;
    private $codigoBarras;
    private $descripcion;

    public function __construct($producto, $idioma = 'es')
    {
        $this->nombre = $producto['nombre'];
        $this->categoria = $producto['categoria'];
        $this->categoriaId = $producto['categoriaId'];
        $this->precio = $producto['precio'];
        $this->unidadesDisponibles = $producto['unidades'];
        $this->genero = $producto['genero'];
        $this->generoId = $producto['generoId'];
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
            'categoriaId' => $this->categoriaId,
            'unidades_disponibles' => $this->unidadesDisponibles,
            'genero' => $this->genero,
            'generoId' => $this->generoId,
            'descripcion' => $this->descripcion
        ];
    }
}

?>