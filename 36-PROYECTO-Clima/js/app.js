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

    spinner();

    //llamamos a la api
    fetch(url)
        .then(result => result.json())
        .then(datos =>{

            limpiarHTML();

            if(datos.cod === '404'){
                
                mostrarError('Ciudad No encontrada');
                return;
            }
            mostrarClima(datos);
        })
       
        
       
}

//funcion para revelar los datos cargados por la api y convertirlos
function mostrarClima(datos){

    //datos
    const kelvins = 273.15
    const {name, main:{temp, temp_max, temp_min}} = datos;

    //convercion
    let celciusTemp = temp - kelvins;
    let celciusTempMax = temp_max - kelvins;
    let celciusTempMin = temp_min - kelvins; 

    celciusTemp = celciusTemp.toFixed(1);
    celciusTempMax = celciusTempMax.toFixed(1);
    celciusTempMin = celciusTempMin.toFixed(1);

    //insercion en el html

    const actual = document.createElement('P');
    const max = document.createElement('P');
    const min = document.createElement('P');
    const nombreCiudad = document.createElement('P');

    nombreCiudad.textContent  = `El Tiempo en ${name}`;
    nombreCiudad.classList.add('text-center', 'text-white')

    actual.innerHTML = `${celciusTemp} &#8451;`
    max.innerHTML = `Maxima ${celciusTempMax} &#8451;`
    min.innerHTML =`Minima ${celciusTempMin} &#8451;`

    actual.classList.add('font-bold', 'text-5xl', 'text-white');
    max.classList.add('font-bold', 'text-xl', 'text-white');
    min.classList.add('font-bold', 'text-xl', 'text-white');

    const resultadoDiv = document.createElement('DIV')
    resultadoDiv.appendChild(nombreCiudad)
    resultadoDiv.appendChild(actual)
    resultadoDiv.appendChild(max)
    resultadoDiv.appendChild(min)

    resultado.appendChild(resultadoDiv)


}


//funcion para limpiar el html del resultado de los grados
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}


//funcion para generar un spinner mientras se espera respuesta de la api
function spinner(){

    limpiarHTML();

    const divSpinner = document.createElement('div')
    divSpinner.classList.add('sk-fading-circle');


    divSpinner.innerHTML= `
    <div class="sk-circle">
  <div class="sk-circle1 sk-child"></div>
  <div class="sk-circle2 sk-child"></div>
  <div class="sk-circle3 sk-child"></div>
  <div class="sk-circle4 sk-child"></div>
  <div class="sk-circle5 sk-child"></div>
  <div class="sk-circle6 sk-child"></div>
  <div class="sk-circle7 sk-child"></div>
  <div class="sk-circle8 sk-child"></div>
  <div class="sk-circle9 sk-child"></div>
  <div class="sk-circle10 sk-child"></div>
  <div class="sk-circle11 sk-child"></div>
  <div class="sk-circle12 sk-child"></div>
</div>
    `

    resultado.appendChild(divSpinner)
}