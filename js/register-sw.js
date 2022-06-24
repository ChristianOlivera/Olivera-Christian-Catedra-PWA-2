// Chequeo si el browser soporta Service Worker

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("../sw.js").then((message)=>{
        console.log('Service Worker funciona correctamente');
    });
} else {
    console.log('El browser no soporta Service worker');
}