const aplicarDescuento = new Promise((resolve, reject) =>{
    const descuento = false;

    if(descuento){
        resolve('Descuento Aplicado')
    }else{
        reject('No se pudo aplicar el descuento')
    }
})

aplicarDescuento.then(
    resultado =>{
        console.log(resultado);
    }
    

).catch(
    error =>{
        console.log(error);
    }
)
//existen 3 valores posibles

/**
 * fullfiled - el promise se cumplio
 * rejected - el promise no se cumplio
 * pending
 */