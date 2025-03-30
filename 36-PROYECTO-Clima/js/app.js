const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () =>{
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    //validar 
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value

    if(ciudad === '' || pais === ''){
        //lanzar error
        mostrarError('Ambos campos son obligatorios')
    }
    //consultar la API
}

function mostrarError(mensaje){
    const alerta = document.createElement('DIV');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'max-auto', 'mt-6', 'text-center')
    alerta.innerHTML = ``
}