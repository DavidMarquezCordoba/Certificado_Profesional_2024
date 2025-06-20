self.addEventListener("install", e => {
    console.log("Instalando el sw");
   
    const acciones = new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("acciones terminadas");
            self.skipWaiting();
            resolve();
        }, 5000);
    });

    e.waitUntil( acciones );
});

self.addEventListener("activate", e => {
    console.log("Activando el sw");
    
});

self.addEventListener("fetch", e => {
    // console.log( "peticiones:", e.request.url ); 

    // if(e.request.url.includes('video')) {
    //     e.respondWith( null );
    // } else {
    //     e.respondWith( fetch( e.request ));
    // }

    // if(e.request.url.includes('youngpeople.png')) {
    //     e.respondWith( fetch( 'img/avatares/almacen.avif' ));
    // } else {
    //     e.respondWith( fetch( e.request ));
    // }

    // if(e.request.url.includes('/api/productos')) {
    //     const respuestaApi = new Response('[]');
    //     e.respondWith(respuestaApi);
        
    // } else {
    //     e.respondWith( fetch( e.request ));
    // }

    // Respuesta Offline con texto plano
    // const respuestaOffline = new Response('En este momento no tienes internet');

    // const resp = fetch( e.request ).catch(() => {
    //     return respuestaOffline;
    // });

    // e.respondWith(resp);

    // Respuesta Offline con HTML
    const respuestaOffline = new Response(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sin conexión</title>
</head>
<body>
    <h1>No tienes conexión</h1>
</body>
</html>
        `, {
            headers:{ 'Content-Type' : 'text/html'}
        });

    const resp = fetch( e.request ).catch(() => {
        return respuestaOffline;
    });

    e.respondWith(resp);

});