const btnJson = document.querySelector('#cargarJSON');

btnJson.addEventListener('click', cargarDatos);

function cargarDatos(){
    const url = 'data/empleado.json';

    fetch(url)
        .then(respuesta =>respuesta.json())
        .then(resultado => mostartHTML(resultado))
}

function mostartHTML({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>${id}</p>
        <p>${empresa}</p>
        <p>${nombre}</p>
        <p>${trabajo}</p>
        
    `;


    


}