if(navigator.serviceWorker) {
    console.log("Puedes usar el service worker");
    navigator.serviceWorker.register("/sw.js");
    
} else {
    console.log("no puedes registrar el service worker en este navegador");
    
}
