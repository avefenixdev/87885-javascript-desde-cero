import './style.css'

console.log('// Javascript - Vanilla (Como un juego sin mods)')

console.warn('// ! Formas de mostrar información en la consola')

console.log('Me muestra el texto o variable en color estandar (blanco o azul)') // clg
console.warn('Me muestra el texto o variable en color amarillo (alerta)') // cwa
console.error('Me muestra el texto o variable en color rojo (error)') // cer

// Shortcut para duplicar línea (Siempre seleccionado las líneas o línea)
// Shift + Alt + ⬇️⬆️ || Ctrl + C & Ctrl + V

console.log('// ! Extensiones de Visual Studio Code')

// * JavaScript (ES6) code snippets (xabikos.JavaScriptSnippets)
// * Template String Converter (meganrogge.template-string-converter)

console.warn('// ! Variable') 

console.error('// ! IMPORTANTE: NO USAR VAR PARA CONSTRUIR VARIABLES')

console.warn('// ! Constructores de variables (let y const)')

// ASIGNACIÓN
let nombre = 'Maxi' // Cadena de caracteres (strings)
console.log(nombre)
let numero = 22 // Un número entero (number)
console.log(numero)
let precio = 99.99 // Un número decimal (number)
console.log(precio)
let cumple = true // Booleano (admite 2 valores -> true o false) | verdadero o falso
console.log(cumple)

let noDefinida // No le asigno nada
console.log(noDefinida) // undefined

console.warn('// ! Averiguar el tipo de dato de una variable')

console.log(typeof nombre) // string
console.log(typeof numero) // number
console.log(typeof precio) // number
console.log(typeof cumple) // boolean
console.log(typeof noDefinida) // undefined

// A los anteriores tipos de datos se los conocen como primitivos.
// A continuación vamos a ver los tipos de dato objeto

console.warn('// ! Tipos de datos objetos (arrays|objetos|funciones)')
// Arreglo | Vector | Array
// Es una estructura de datos indexada (Que tiene indices)
// Los elementos posicionados y tienen un orden
//               0       1       2        3        4         5          6
let colores = ['rojo', 'rosa', 'lila', 'indigo', 'azul', 'amarillo', 'magenta']
//               1        2       3        4       5         6           7
// 7-1=6
console.warn('// ! Acceso a los elementos del array');

console.log(colores[0]) // accedo al primer elemento
console.log(colores[4]) // accedo al color azul del arreglo
console.log(colores[6]) // accedo al color magenta del arreglo

console.warn('Muestro el arreglo completo')

console.log(colores)

console.warn('Muestro la cantidad de elementos del arreglo')

console.log(colores.length)

console.warn('Mostrar el último elemento del arreglo')

console.log(colores[colores.length-1]) // Último elemento

console.warn('Reasignación de valores')

colores[0] = 'verde'
colores[colores.length-1] = 'turquesa'
console.log(colores)

console.warn('// ! Tipo de dato objetos')
/* 
let nombre = 'Julieta'
let apellido = 'Gomez'
let altura = 1.7
let edad = 22 */

console.warn('// ! Tipo de dato objeto literal')

let persona = {
  /* keys: values */
  /* clave: valores */
  nombre: 'Julieta',
  apellido: 'Gomez',
  altura: 1.7,
  edad: 22,
  direccion: 'Siempre viva 123',
}

console.log(persona)

console.warn('// ! Acceder a los valores por medio de las keys (Claves)')

console.warn('// ! Notación punto (dot notation)')

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.direccion)

console.warn('// ! Notación corchete (bracket notation)')

console.log(persona['nombre'])
console.log(persona['edad'])
console.log(persona['direccion'])

// let key = 'apellido'
// console.log(persona.key) // { nombre: }
// console.log(persona[key])

console.warn('// ! Reasignar un valor en una key del objeto')

persona.nombre = 'Julia'
console.log(persona)
persona['nombre'] = 'Pedro'
console.log(persona)

console.warn('// ! Constructor de variable "const"')

// * let que nos permite crear variables que pueden cambiar (mutar)

let apellido = 'Principe'
console.log(apellido)
apellido = 'Lopez'
console.log(apellido)

// * const, es un constructor de varible inmutable. Construyo la variable, le tengo que asignar si o si un valor y se valo no va a poder cambiar

const PI = 3.1415
console.log(PI)
// reasignación
// PI = 22222 // ! No se puede cambiar el valor una vez inicializa la constante

// ! NOTA: SIEMPRE VOY A CREAR CONSTANTES EN JAVASCRIPT SALVO LAS PRIMITIVAS QUE EN UN FUTURO PUEDAN CAMBIAR

const producto = {
  nombre: 'TV',
  categoria: 'Electro',
  precio: 2999.99,
  stock: 10
}

console.log(producto)
console.log(typeof producto) // object
//producto = 'PC'
console.log(producto) // object
console.log(producto.nombre) // nombre = 'TV'

/* let numero1 = 20
let numero2 = 4

numero2 = 2
numero1 = 10 */

producto.nombre = 'TV 8k'
console.log(producto)

console.warn('// Estructuras (integración)')

const cafetera1 = {
  nombre: 'Cafetera 1',
  precio: 222.99,
  imagenes: [
    { id: 1, url: 'http://dominio.com/imagen-1-c1'},
    { id: 2, url: 'http://dominio.com/imagen-2-c1'},
    { id: 3, url: 'http://dominio.com/imagen-3-c1'},
  ]
}

const cafetera2 = {
  nombre: 'Cafetera 2',
  precio: 333.87,
  imagenes: [
    { id: 1, url: 'http://dominio.com/imagen-1-c2'}, // 0
    { id: 2, url: 'http://dominio.com/imagen-2-c2'}, // 1
    { id: 3, url: 'http://dominio.com/imagen-3-c2'}, // 2
  ]
}

const cafetera3 = {
  nombre: 'Cafetera 4',
  precio: 999.30,
  imagenes: [
    { id: 1, url: 'http://dominio.com/imagen-1-c3'},
    { id: 2, url: 'http://dominio.com/imagen-2-c3'},
    { id: 3, url: 'http://dominio.com/imagen-3-c3'},
  ]
}
//                      0          1          2
const cafeteras = [ cafetera1, cafetera2, cafetera3 ]
console.log(cafeteras)

console.log(cafeteras[1].imagenes[1].url)
console.log(cafeteras[0].precio)
console.log(cafeteras[2].imagenes[2].url)

const array = [2, 3, 4, 5]
const obj = {x: '1', y: '2'}

console.log(array)
console.log(obj)
console.log(typeof array)
console.log(typeof obj)

console.log(Array.isArray(array)) // true
console.log(Array.isArray(array) ? 'Es un array':'Es un objeto') // true
console.log(Array.isArray(obj)) // false
console.log(Array.isArray(obj) ? 'Es un array':'Es un objeto') // false
