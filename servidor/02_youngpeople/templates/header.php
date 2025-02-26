<?php
    $textoMenu = file_get_contents("./json/menu.json");
    $menu = json_decode($textoMenu, true); //TRUE para mantener el array asociativo
?>    
    
    <!-- Logo -->
    <header>
        <img class="logo" src="/img/logo.png" alt="logo">
        
        <!-- Barra búsqueda -->
        <div class="busqueda">
            <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                width="24" height="24" 
                stroke-width="2"> 
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path> 
                <path d="M21 21l-6 -6"></path> 
            </svg>

            <p>buscar...</p>
        </div>
        <!-- Enlaces -->
        <nav>
            <ul>
                <?php foreach ($menu as $enlace) {?>
                    <li><a class="<?php echo($pagina== $enlace['nombre'])?'seleccionado':''?>" href="<?php echo $enlace['href'];?>"><?php echo $enlace['nombre'];?></a></li>
                <?php }?>
            </ul>
        </nav>


    </header>
</head>