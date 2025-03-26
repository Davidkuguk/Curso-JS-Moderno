const paises = []

const nuevoPais = pais => new Promise(resolve =>{
    setTimeout(() =>{
        paises.push(pais)
        resolve(`Se añadio el pais ${pais}`)
    }, 3000)
})

nuevoPais('alemania')
    .then( resultado =>{
        console.log(resultado);
        return nuevoPais('Francia')
    })
    .then(resultado =>{
        console.log(resultado);
    })
