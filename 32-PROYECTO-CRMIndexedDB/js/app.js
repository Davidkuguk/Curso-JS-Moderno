//usamos una IFFIE para no invadir el sistema
(function(){

    let DB;

    document.addEventListener('DOMContentLoaded', () =>{
        crearDB();

        //crear la bbdd
        function crearDB(){
            //Abrimos la conexion
            const crearDB = window.indexedDB.open('crm', 1);

            //en caso de error
            crearDB.oneError = function(){
                console.log('Hubo un error');
            }

            //si todo sale bien
            crearDB.onsuccess = function(){
                console.log('ejecutando bbdd');
                DB = crearDB.result;
            }

            crearDB.onupgradeneeded = function(e){
                //creamos las tablas
                const db = e.target.result;
                const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true})
                objectStore.createIndex('nombre', 'nombre', {unique: false});
                objectStore.createIndex('email', 'email', {unique: true});
                objectStore.createIndex('telefono', 'telefono', {unique: false});
                objectStore.createIndex('Empresa', 'Empresa', {unique: false});
                objectStore.createIndex('id', 'id', {unique: true})

                console.log('DB lista y creada');
            }

        }
    })
})();

