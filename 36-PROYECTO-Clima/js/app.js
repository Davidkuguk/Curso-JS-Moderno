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
        return
    }
    //consultar la API
    consultarAPI(ciudad,pais)

}

function mostrarError(mensaje){
    const alerta = document.querySelector('.alerta');

    if(!alerta){
        const alerta = document.createElement('DIV');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'alerta')
        alerta.innerHTML = `
            <strong class='font-bold'>Error!</strong>
            <span class='block'>${mensaje}</span>
        `;
        container.appendChild(alerta);

        setTimeout(()=>{
             alerta.remove()
        },3000)
    }

    

}

function consultarAPI(ciudad, pais){
    //api key
    const appID = 'c6fa89e16ae43b683b34fbbec05b7917';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    fetch(url)
        .then(result => result.json())
        .then(datos =>{
            if(datos.cod === '404'){
                mostrarError('Ciudad No encontrada')
                return
            }
            mostrarClima(datos)
        })
       
        //mostrar en la pagina
       
}

function mostrarClima(datos){
    //datos
    const kelvins = 273.15
    const {main:{temp, temp_max, temp_min}} = datos;

    //convercion
    let celciusTemp = temp - kelvins;
    let celciusTempMax = temp_max - kelvins;
    let celciusTempMin = temp_min - kelvins; 

    celciusTemp = celciusTemp.toFixed(1);
    celciusTempMax = celciusTempMax.toFixed(1);
    celciusTempMin = celciusTempMin.toFixed(1);

    console.log(celciusTemp.toFixed(1));
    console.log(celciusTempMax.toFixed(1));
    console.log(celciusTempMin.toFixed(1));


}