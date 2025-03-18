let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() =>{
        crearCliente()
    },5000)
})

function crmDB(){
    //creamos la bbdd
    let crmDB = window.indexedDB.open('crm', 1);

    //si hay un error
    crmDB.onerror  = function(){
        console.log('Hay un error en la bbdd');
    }

    //si se creo bien
    crmDB.onsuccess = function(){
        console.log('bbdd creada');

        DB = crmDB.result;
    }

    //configuracion de la bbdd
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        })

        //definir columnas
        objectStore.createIndex('nombre', 'nombre', {unique: false})
        objectStore.createIndex('email', 'email', {unique: true})
        objectStore.createIndex('telefono', 'telefono', {unique: false})
        console.log('Columnas creadas');
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }

    transaction.onerror = function(){
        console.log('hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm')

    const nuevoCliente ={
        telefono: 131231312,
        nombre: 'david',
        apellido: 'kuguk'
    }

    const peticion = objectStore.add(nuevoCliente)
    console.log(peticion);
}