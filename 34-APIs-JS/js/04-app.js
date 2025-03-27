const btnAbrir = document.querySelector('#abrir-pantalla-completa');
const btnSalir = document.querySelector('#salir-pantalla-completa');

btnAbrir.addEventListener('click', pantallaComplete);
btnSalir.addEventListener('click', salirPantallaCompleta);

function pantallaComplete(){
    document.documentElement.requestFullscreen()
}

function salirPantallaCompleta(){
    document.exitFullscreen();
}