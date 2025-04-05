const cargarApi = document.querySelector('#cargarAPI')

cargarApi.addEventListener('click', cargarDatos)

function cargarDatos() {
    const url = 'https://picsum.photos/list'

    fetch(url)
        .then(response => response.json())
        .then(result => mostrarHTML(result))
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido')
    
    let html = ''

    datos.forEach(perfil => {
        const { author, post_url } = perfil

        html += `
        <p>Author: ${author}</p>
        <a href='${post_url}' target='_blank'>ir al perfil</a>
        `
    })

    contenido.innerHTML = html
}
