(function(){
    let DB;
    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', () =>{
        //nos conectamos a la db
        conectarDB();
        formulario.addEventListener('submit', validarCliente)
    })

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = () => {
            console.log('Hubo un error');
        }

        abrirConexion.onsuccess = () => {
            console.log('Estamos dentro');
            DB = abrirConexion.result;
        }


    }

    function validarCliente(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value
        
        if(nombre === '' || email === '' ||telefono === '' || empresa === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');

            return;
        }

        //crear un objeto con la info
        const cliente = {
            id : Date.now(),
            nombre,
            email,
            telefono,
            empresa
        }

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite')

        const objectStore = transaction.objectStore('crm')

        objectStore.add(cliente)

        transaction.onerror = function(){ 
            imprimirAlerta('Se produjo un error', 'error');
        }

        transaction.oncomplete = function(){ 
            imprimirAlerta('El cliente se agrego correctamente');
        }

       
    }

    function imprimirAlerta(mensaje, tipo){
        //crear alerta
        const alerta = document.querySelector('.alerta');

        if(!alerta){
            const divMensaje = document.createElement('DIV')
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-auto', 'mt-6', 'text-center', 'border', 'alerta');

            if(tipo === 'error'){
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700')
            }else{
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700')
            }

            setTimeout(() => {
                divMensaje.remove();
            }, 3000);

            divMensaje.textContent = mensaje;
            formulario.appendChild(divMensaje)
        }

        
    }
})();
