//app de gestion de notificaciones

const notificar = document.querySelector('#notificar')

//solicitamos permisos para las notificaciones
notificar.addEventListener('click', () =>{
    Notification
        .requestPermission()
        .then(resultado =>{
            console.log(`el resultado es ${resultado}`);
        })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () =>{
    if(Notification.permission === 'granted'){

        //tratar datos de la notificacion
       const notificacion = new Notification('Esta es mi notificacion',{
            icon: 'img/ccj.png',
            body: 'Abreme!'
        } );

        //abrir nueva ventana si le dan click
        notificacion.onclick = function(){
                window.open('https://www.google.com')
            }

    }

})

