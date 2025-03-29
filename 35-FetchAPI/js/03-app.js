const btnCargarArray = document.querySelector('#cargarJSONArray')

btnCargarArray.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = ' data/empleados.json'

    fetch(url)
        .then(empleados => empleados.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido')

    let html = '';

    empleados.forEach(empleado =>{
        const {id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>${id}</p>
            <p>${empresa}</p>
            <p>${nombre}</p>
            <p>${trabajo}</p>
        `;
        
    })

    contenido.innerHTML = html
}