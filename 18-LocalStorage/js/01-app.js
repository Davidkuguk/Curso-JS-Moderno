localStorage.setItem('Nombre', 'Juan');

const producto = {
    nombre: 'monitor 30 pulgadas',
    precio: 300,
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString)
console.log(productoString);

const meses = ['enero', 'febrero', 'marzo']
localStorage.setItem('meses', JSON.stringify(meses))