<div class="nav-fondo">
    <nav class="nav-cabecera contenedor">
    <?php 
    /////////////////// Menu ////////////////////////////////////////
    $archivoMenu = "./json/menu.json";
    $menu_json = "";
    $menu = [];
    if(file_exists($archivoMenu)){
        $menu_json = file_get_contents($archivoMenu);
    } else {
        echo 'no se encuentra el menu';
    }
    
    if(json_validate($menu_json)){
        $menu = json_decode($menu_json, true); // true es para que use array asociativo cuando sea posible
    }
    foreach($menu as $enlace) {
        if($enlace['href'] != $pagina) {
    ?>
        <a class="<?php echo $enlace['clase']; ?>" href="<?php echo $enlace['href']; ?>"><?php echo $enlace['nombre']; ?></a>
    <?php }} ?>
    </nav>
</div>