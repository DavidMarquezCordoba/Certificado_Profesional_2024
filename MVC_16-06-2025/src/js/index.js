if (navigator.serviceWorker) {
    console.log("Puedes usar el service worker");
    navigator.serviceWorker.register("/sw.js");
    
} else {
    console.log("No se puede registrar el service worker en este navegador");
    
}