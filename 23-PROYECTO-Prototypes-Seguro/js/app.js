//constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//realiza la cotizacion con los datos
Seguro.prototype.cotizarseguro = function(){
    /**
     * op 1 = americano 1.15
     * op 2 = asiatico 1.05
     * op 3 = europeo 1.35
     */

    let cantidad;
    const base = 2000;

    switch(this.marca){
       case '1':
            cantidad = base*1.15
            break;

       case '2':
            cantidad = base*1.05
            break;
       case '3':
            cantidad = base*1.35
            break;
       default:
            break;
    }

    //leer el año
    const diferencia = new Date().getFullYear() - this.year;

    //cada año la diferencia es mayor, el costo va a reducirse un 3%
    cantidad -= ((diferencia *3) * cantidad)/ 100
    /**
     * si el seguro es basico se multiplica * 30%
     * si el seguro es completo se multiplica por 50%
     */

    if(this.tipo === 'basico'){
        cantidad *= 1.30
    }else{
        cantidad *=1.50
    }

    return cantidad
}

function UI(){}


//llena las opciones de los años
UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear();
    const  min = max -20;


    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i-- ){
        let option = document.createElement('option')
        option.value = i
        option.textContent = i;
        selectYear.appendChild(option)
    }
}

UI.prototype.mostrarMensaje = function(mensaje, tipo){
    const div = document.createElement('div')

    if(tipo === 'error'){
        div.classList.add('error')
    }else{
        div.classList.add('correcto')
    
    }

    div.classList.add('mensaje', 'mt-10')

    div.textContent = mensaje;
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'))

    setTimeout(() =>{
        div.remove();
    }, 3000)
}

UI.prototype.mostrarResultado = ( total, seguro)=>{

    const {marca, year, tipo} = seguro;

    //crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `<p class="header"> Tu Resumen </p>
                    <p class="font-bold">Total:<span class = 'font-normal'>  ${total} </span> </p>
                     <p class="font-bold">Año:<span class = 'font-normal'>  ${year} </span> </p>`


    const resultadoDiv = document.querySelector('#resultado');
   

    //mostrar spinner
    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'block';

    setTimeout(() =>{
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    },3000)

  
    
}

//instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //llena el select con los años
})

eventListeners();

function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarseguro)
}

function cotizarseguro(e){
    e.preventDefault();

    //leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //leer el año seleccionado
    const year = document.querySelector('#year').value;

    //leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    
    if(marca === '' ||year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito')

    //ocultar resultados previos 
    const resultados = document.querySelector('#resultado div')
    if(resultados !== null){
        resultados.remove();
    }

    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarseguro();

    ui.mostrarResultado(total, seguro);
}