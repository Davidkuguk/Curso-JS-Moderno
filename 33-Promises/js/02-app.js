const paises = [];

function nuevoPais(pais, callback){

    paises.push(pais)
    console.log(pais);
    callback();

}

function mostrarPaises(){

    console.log(paises);

};


function iniciarCallBackHell(){

    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);

        setTimeout(() =>{
            nuevoPais('Francia', mostrarPaises)

            setTimeout(() => {
                nuevoPais('inglaterra', mostrarPaises)
            }, 3000);
        }, 3000 )

    }, 3000);

};

iniciarCallBackHell();