//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []

//event listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet)

    //cuando el documento este listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        crearHTML();
    })
}

//funciones
function agregarTweet(e){
    e.preventDefault();
    
    //textarea de ui
    const tweet = document.querySelector('#tweet').value;
    
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //añadir tweets
    tweets = [...tweets, tweetObj]

    //una vez agregado creamos el html
    crearHTML();

    limpiarTextArea()
}

function limpiarTextArea(){
    document.querySelector('#formulario').reset()
}

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertando en el contenido
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout(()=> {
        mensajeError.remove();
    }, 3000)
}

function crearHTML(){
    limpiarHTML()
    if(tweets.length>0){
        tweets.forEach(tweet => {

            //crear boton eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'x';

            //funcion eliminar tweet
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            //crear html
            const li = document.createElement('li');

            //añadir texto
            li.innerText = tweet.tweet

            //asignar boton
            li.appendChild(btnEliminar)

            //insertar en el html
            listaTweets.appendChild(li)
            
            
        })
    }

    sincronizarStorage();
}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id)
    crearHTML();
}