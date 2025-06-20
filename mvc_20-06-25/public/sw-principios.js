self.addEventListener("install", e => {
    console.log("Instalando el service worker...");
    
    const acciones = new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("acciones terminadas");
            self.skipWaiting();
            resolve();
        }, 1500)
    })

    e.waitUntil( acciones );
});

self.addEventListener("activate", e => {
    console.log("Activando el service worker...");
    
});

self.addEventListener("fetch", e => {
    // console.log(e.request.url);
    // if(e.request.url.includes('video')){
    //     e.respondWith( null );
    // } else {
    //     e.respondWith( fetch( e.request));
    // }

    // if(e.request.url.includes('/api/productos')) {
    //     const respuestaApi = new Response('[]');
    //     e.respondWith(respuestaApi);
    // } else {
    //     e.respondWith( fetch( e.request ));
    // }
    
    
    // Respuesta offline con textoplano

    // const respuesta = new Response('En este momento no tienes internet');

    // const resp = fetch( e.request ).catch(() => {
    //     return respuestaOffline;
    // });

    // e.respondWith(resp);
    

    // Respuesta offline con HTML

    const respuestaOffline = new Response(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sin conexión</title>
        </head>
        <body>
            <h1>No tienes internet con HTML</h1>
        </body>
        </html>
        `, {
            headers: { 'Content-Type' : 'text/html'}
        });

    const resp = fetch( e.request ).catch(() => {
        return respuestaOffline;
    });

    e.respondWith(resp);
});