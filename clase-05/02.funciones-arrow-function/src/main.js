import './style.css'

console.log('Maxi')
console.log('Ailen')
console.log('Rodrigo')
console.log('Gregorio')
console.log('Carolina')
console.log('Aarón')
console.log('Camila')

console.warn('// ! Funciones')
// Nos permite no repetirnos. Reutilizar nuestro código para optimizar nuestro trabajo

/* 
  * Las funciones pueden retonar o no retornar elementos
  function nombreFuncion(parametros1, parametros2) {
    "No retorna nada"
  }
  function nombreFuncion(parametros1, parametros2) {
    return "retorna algo"
  }

  * A lo que está entre llaves se lo conoce como cuerpo de la función.

  * Para llamar a una función que usar su nombre y ponerle parentesis al final
  * Llamo -> Invoco -> ejecuto una función
  nombreFuncion(argumento1, argumento2)
*/

function mostrarNombre(nombreAImprimir) {
  /* No retorna nada */
  console.log(nombreAImprimir)
} 

mostrarNombre('Maxi')
mostrarNombre('Arnold')
mostrarNombre('Rodrigo')
mostrarNombre('Gregorio')
mostrarNombre('Carolina')
mostrarNombre('Judith')
mostrarNombre('Ailen')

console.log(mostrarNombre('Maximiliano')) // una función que no retorna, retonar 'undefined'

console.warn('// ! arrow funciton - función flecha - funciones lambda')
// para nosotros que estamos aprendiendo funciones en javascript ambas formas de crear funciones son iguales pero más 
// adelante me voy a dar cuenta y aprender que no son del todo iguales.

// Funciones tradicionales
/* const bienvenida = function(nombreADarleBievenida) {
  console.log(`Bienvenido ${nombreADarleBievenida}`)
}  */

console.warn('// ! Funciones arrow completa')
const bienvenida = (nombreADarleBievenida) => {
  console.log(`Bienvenido ${nombreADarleBievenida}`)
} 

bienvenida('Maxi')
bienvenida('Pedro')
bienvenida('Juan')
bienvenida('Roberto')
bienvenida('Alberto')
bienvenida('Diego')

console.warn('// ! Funciones arrow simplificada')
// Cuando yo tengo una única sentencia dentro del bloque {} de la función puedo simplificar

const bienvenidaSimplificada = (nombreADarleBievenida) => console.log(`Bienvenido ${nombreADarleBievenida}`) 
  
bienvenidaSimplificada('Maximiliano')
bienvenidaSimplificada('Anahi')
bienvenidaSimplificada('Carla Benitez')
bienvenidaSimplificada('Carla Galeano')

console.warn('// ! Funciones tradicionales que retornan')

function sumar(num1, num2) {
  return num1 + num2
}

//console.log(sumar(2, 5))

const res = sumar(2, 5) // creo una variable y el valor que me retorna sumar lo guardo en esa variable (res)
console.log(res) // 7
//                                13
//                           7            6
const resultado = sumar(sumar(2, 5), sumar(2, 4))
console.log(resultado) // 13

console.warn('// ! Funciones arrow que retornan')

/* const sumar = function(num1, num2) {
  return num1 + num2
} */

const sumarArrow = (num1, num2) => {
  return num1 + num2
}

console.log(sumarArrow(4, 7)) // 11

console.warn('// ! Funciones arrow simplificada que retornan')
// Si solo tengo una sentencia dentro de la arrow. Puedo quitar la llaves y el return


const sumarArrowSimplificada = (num1, num2) => { 
  const res = num1 + num2 
  console.log(res)
  return res
  // todo lo que este debajo del return no se ejecuta
}

console.log(sumarArrowSimplificada(5, 9)) // 14
console.log(sumarArrowSimplificada(7, 3)) // 10

console.warn('// ! Funciones anonimas')
// Quiere decir que la función no tiene un nombre, o sea no la voy a poder llamar para ejecutarla
// IIFE

;(function() {
  console.log('funcion anonima')
})()

;(() => {
  console.log('funcion anonima')
})()

const noAnonima = () => {
  console.log('funcion no anonima')
}

noAnonima()


