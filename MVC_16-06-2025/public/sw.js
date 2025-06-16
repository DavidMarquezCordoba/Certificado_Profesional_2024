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
    if(e.request.url.includes('video')){
        e.respondWith( null );
    } else {
        e.respondWith( fetch( e.request));
    }
    
});