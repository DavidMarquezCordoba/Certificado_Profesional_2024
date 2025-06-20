const CACHE_NAME = 'youngpeople-cache-v1.0';

self.addEventListener("install", e => {
    console.log("Instalando el sw");

    const promesaCacheo = caches.open(CACHE_NAME).then( cache => {
        return cache.addAll([
            '/',
            '/css/styles.php',
            '/img/avatares/youngpeople.png',
            '/img/logo.png',
            '/manifest.json',
            '/videos/video.mp4',
            '/js/scripts.php?s=index',
            '/js/scripts.php?s=header',
            '/js/scripts.php?s=popover',
            '/img/icons/ios/144.png',
            '/img/icons/screenshots/screen-wide.png',
            'https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Pacifico&family=Quicksand:wght@300..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap',
            'https://fonts.gstatic.com/s/balsamiqsans/v14/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2',
            'https://fonts.gstatic.com/s/balsamiqsans/v14/P5sZzZiAbNrN8SB3lQQX7PncyWUyNYhsAg.woff2'

        ]);  
    });
   
    e.waitUntil(promesaCacheo);
});


self.addEventListener("activate", e => {
    console.log("Activado el sw");
    
});

self.addEventListener("fetch", e => {

    // Usamos solamente la caché
    e.respondWith( caches.match( e.request ) );

}); 