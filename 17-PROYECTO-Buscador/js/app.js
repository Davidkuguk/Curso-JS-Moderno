const max = new Date().getFullYear();
const min = max - 10;

//datos auto
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const precio = document.querySelector('#precio');
const color = document.querySelector('#color');

//generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    precio: '',
    color: '',
}

//contenedor para los resultados
const resultado = document.querySelector('#resultado');

marca.addEventListener('change', (e) =>{
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
    console.log(datosBusqueda);
})

year.addEventListener('change', (e) =>{
    datosBusqueda.year = parseInt( e.target.value);
    filtrarAutos();
    console.log(datosBusqueda);
})

minimo.addEventListener('change', (e) =>{
    datosBusqueda.minimo =parseInt( e.target.value);
    filtrarAutos();
    console.log(datosBusqueda);
})

maximo.addEventListener('change', (e) =>{
    datosBusqueda.maximo = parseInt( e.target.value);
    filtrarAutos();
    console.log(datosBusqueda);
})

puertas.addEventListener('change', (e) =>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAutos();
    console.log(datosBusqueda);
})

transmision.addEventListener('change', (e) =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
    console.log(datosBusqueda);
})

color.addEventListener('change', (e) =>{
    datosBusqueda.color = e.target.value;
    filtrarAutos();
    console.log(datosBusqueda);
})

document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos);

    //llena las opciones de años
    llenarSelect();

    console.log(datosBusqueda);
});

function mostrarAutos(autos){
    limpiarHTML();
    //autos es array
    autos.forEach(auto =>{
        const autoHTML = document.createElement('p');

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}`;

        resultado.appendChild(autoHTML)
    })
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){
    for(let i = max; i>=min; i--){
        const opcion = document.createElement('option')//generamos un option dentro de select
        opcion.value = i; //asignamos el valor de option a la variable iterada
        opcion.textContent = i; //asignamos el texto a el valor de la variable
        year.appendChild(opcion) //asignamos el option al DOM
        
    }
}

function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor).filter(filtrarPrecio);
    // console.log(resultado);
    mostrarAutos(resultado)
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
     return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color
    }
    return auto;
}

function filtrarPrecio(auto){
    const {minimo, maximo} = datosBusqueda;
    if(minimo && maximo){
        return auto.precio >= minimo && auto.precio <= maximo;
    }else if(maximo){
        return auto.precio <= maximo
    }else if(minimo){
        return auto.precio >= minimo
    }
    return true;
}