localStorage.setItem('Nombre', 'Juan');

const producto = {
    nombre: 'monitor 30 pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto)
console.log(productoString);
console.log(typeof productoString);