import './style.css'

console.warn('// ! DOM -> Document Object Model')

console.log(document) /// <---- DOM
console.dir(document) /// <---- DOM

/* const usuario = {
  nombre: 'Maxi',
  apellido: 'Principe'
} */

console.warn('// ! Acceso absolute a un elemento de dom')

console.log(document.children[0].children[1].children[0]) // h1
console.dir(document.children[0].children[1].children[0]) // h1 (node html)

console.warn('// ! Acceso directo a elementos de DOM')

// ! Tradicionales
// * document.getElementByID (ID)
// * document.getElementsByClassName (clases)
// * document.getElementsByTagName (etiquetas)
// ! Modernos
// ? Trabajan con selectores CSS
// ? Selecionar una etiqueta -> nombre de etiqueta
// ? Selecionar una clases -> para selecionar una clase idetificador y antes el . -> titulo -> .titulo
// ? Selecionar una id -> para selecionar un id es el idetificador y antes el # -> principal -> #principal
// * document.querySelector() // solo uno
// * document.querySelectorAll() // todos que puedan existir

const coleccionH1 = document.getElementsByTagName('h1') // pueden existir más de una etiqueta.
// console.log(coleccionH1[0]) // HTMLCollection -> Se trabaja como si fuera un ARRAY
const etiquetaH1 = coleccionH1[0]
console.log(etiquetaH1)
console.dir(etiquetaH1) // dir -> nos muestra radiograficamente el elemento que tenemos
console.log(etiquetaH1.style)
// Trabaja con estilos inline
etiquetaH1.style.border = '3px solid red'
etiquetaH1.style.backgroundColor = 'darkred'
etiquetaH1.style.fontStyle = 'normal'
etiquetaH1.style.color = 'white'
// Trabajar con clases
etiquetaH1.classList.add('texto-grande', 'espaciado-superior')
etiquetaH1.classList.remove('texto-grande')

etiquetaH1.textContent = 'Manipulación DOM'
etiquetaH1.innerText = 'Otra cosa' // Preferible usar textContent
etiquetaH1.innerHTML = 'Manipulación <em>DOM</em>'

console.log(etiquetaH1.firstElementChild)
const em = etiquetaH1.firstElementChild
em.textContent = '(Document Object Model)'

console.warn('// ! Eventos')

const boton = document.querySelector('#btn')
console.log(boton) // Node
console.dir(boton)
/* 
boton.onclick = function() {
  console.log('Me hicieron click! 🌧️')
}

boton.onclick = function() {
  console.log('Me hicieron click 2! 🌧️')
} */

/* boton.addEventListener('tipo-evento', callback) */
/* boton.addEventListener('tipo-evento', function() {}) */
/* boton.addEventListener('tipo-evento', () => {}) */
boton.addEventListener('click', function () {
  console.log('Me hicieron click 🌟')
})

boton.addEventListener('click', function () {
  console.log('Me hicieron click 🌟🌟🌟')
})

boton.addEventListener('click', function () {
  console.log('Me hicieron click 🌟🌟🌟🌟🌟')
})

const elementos = document.getElementsByClassName('texto-verde')
//console.log(elementos)

const parrafo = elementos[1]
//console.log(parrafo)
//console.dir(parrafo)

boton.addEventListener('click', () => {
  console.log('Hicieron click sobre el botón y quiero modificar el p')
  parrafo.style.backgroundColor = 'yellow'
  parrafo.style.padding = '15px'
  etiquetaH1.style.backgroundColor = 'violet'
})

const caja = document.querySelector('#caja')
console.log(caja)
caja.style.backgroundColor = 'crimson'
caja.style.height = '200px'

caja.addEventListener('mouseover', () => {
  caja.style.backgroundColor = 'darkblue'
  caja.textContent = 'Hola que tal'
  caja.style.color = 'white'
})

caja.addEventListener('mouseleave', () => {
  caja.style.backgroundColor = 'crimson'
  caja.textContent = ''
  caja.style.color = 'black'
})

/* https://www.w3schools.com/jsref/obj_mouseevent.asp */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Se dispara cuando el DOM cargado')
  console.log('Garantiza que todo el documento HTML ya esté disponible.')
})

document.addEventListener('load', () => {
  console.log('Se dispara cuando el DOM cargado sino que va esperar a que todos los recurso de la página este cargados.')
})

// Katas y desafios de Javascript
// https://www.codewars.com/collections/javascript-basics-2
// https://exercism.org/tracks/javascript

// ! Es recomendable que todo nuestro código javascript este dentro del evento DOMContentLoaded

const startOld = () => {

  const producto1 = {
    nombre: 'PC',
    categoria: 'Electro',
    destacado: true,
    stock: 20,
    activo: true,
    precio: 2240
  }

  const producto2 = {
    nombre: 'Celular',
    categoria: 'Electro',
    destacado: true,
    stock: 10,
    activo: true,
    precio: 555
  }

  const producto3 = {
    nombre: 'Batidora',
    categoria: 'Electro',
    destacado: true,
    stock: 10,
    activo: true,
    precio: 325
  }

  const producto4 = {
    nombre: 'Auto',
    categoria: 'Transporte',
    destacado: true,
    stock: 15,
    activo: false,
    precio: 16000
  }
//                           0           1          2         3
  const arrayProductos = [producto1, producto2, producto3, producto4]

  console.log(arrayProductos)

  console.warn('--------------for')
  for (let i = 0; i < arrayProductos.length; i++) {
    console.log(i)
    console.log(arrayProductos[i].nombre)
  }
  console.warn('--------------foreach')
  arrayProductos.forEach((producto) => {
    console.log(producto.nombre)
  })
  console.warn('--------------forof')

  let template = ''

  for (const producto of arrayProductos) {
    // console.log(producto.nombre)

    template += `<article class="producto-card">
        <h2 class="nombre-producto">${producto.nombre}</h2>
        <p class="produto-categoria">Categoría: <span>${producto.categoria}</span></p>
        <p class="producto-precio">${producto.precio}</p>
  
        <p class="producto-stock">Stock disponible: ${producto.stock}</p>
        <p class="producto-status">${producto.activo ? 'Activo' : 'Inactivo'}</p>
    </article>`
    //debugger
    //console.log(template)
  }

  //console.log(template)
 
  const contentedorCards = document.querySelector('#contenedor-cards')
  console.log(contentedorCards)

  contentedorCards.innerHTML = template

}

const start = () => {

  const producto1 = {
    nombre: 'PC',
    categoria: 'Electro',
    destacado: true,
    stock: 20,
    activo: true,
    precio: 2240
  }

  const producto2 = {
    nombre: 'Celular',
    categoria: 'Electro',
    destacado: true,
    stock: 10,
    activo: true,
    precio: 555
  }

  const producto3 = {
    nombre: 'Batidora',
    categoria: 'Electro',
    destacado: true,
    stock: 10,
    activo: true,
    precio: 325
  }

  const producto4 = {
    nombre: 'Auto',
    categoria: 'Transporte',
    destacado: true,
    stock: 15,
    activo: false,
    precio: 16000
  }
//                           0           1          2         3
  const arrayProductos = [producto1, producto2, producto3, producto4]

  console.log(arrayProductos)

  console.warn('--------------for')
  for (let i = 0; i < arrayProductos.length; i++) {
    console.log(i)
    console.log(arrayProductos[i].nombre)
  }
  console.warn('--------------foreach')
  arrayProductos.forEach((producto) => {
    console.log(producto.nombre)
  })
  console.warn('--------------forof')

  let template = ''

  for (const producto of arrayProductos) {
    // console.log(producto.nombre)

    template += `<article class="producto-card">
        <h2 class="nombre-producto">${producto.nombre}</h2>
        <p class="produto-categoria">Categoría: <span>${producto.categoria}</span></p>
        <p class="producto-precio">${producto.precio}</p>
  
        <p class="producto-stock">Stock disponible: ${producto.stock}</p>
        <p class="producto-status">${producto.activo ? 'Activo' : 'Inactivo'}</p>
    </article>`
    //debugger
    //console.log(template)
  }

  //console.log(template)
 
  const contentedorCards = document.querySelector('#contenedor-cards')
  console.log(contentedorCards)

  contentedorCards.innerHTML = template

}

// start -> callback -> una función pasada como argumento de otra.
// start <---- referencias
// start() <--- función ejecutada (referencia invocada/ejecutada)
document.addEventListener('DOMContentLoaded', start)
