import './style.css'

// ! for
//                0          1          2         3        4
let nombres = ['Arnold', 'Gregorio', 'Melina', 'Kevin', 'Kiara']
console.log(nombres.length) // 5
// (1) -> Inicializa la variable i (solo una vez)
// (2) -> Evaluación
// (3) -> Incremento/Decremento
// -> (1) -> (2) -> ingreso {} -> (3) -> (2) -> ingreso {} -> (3) -> ... la condición no se cumpla
//       (1)  ;       (2)       ; (3)
//debugger
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// Primera iteración
// i = 0
// 0 < 5 -> true
// i < nombres.length 
// Segunda iteración
// i = 0
// 0 < 5 -> true
// i < nombres.length 

console.warn('// ! foreach (método de los array)')
// Callback -> una función como argumento de otra
// function() {} -> función anonima
// function sumar() {} -> función no anonima
//            0          1          2         3
nombres = ['Arnold', 'Gregorio', 'Melina', 'Kevin', 'Kiara']
//debugger
nombres.forEach(function(nombre, indice, array) {
    console.log(nombre) // Arnold -> Gregorio ...
    console.log(indice) // 0 -> 1
    console.log(array) // ['Arnold', 'Gregorio', 'Melina', 'Kevin', 'Kiara']
})
 
// * Arrays Homogeneos // ['Arnold', 'Gregorio', 'Melina', 'Kevin', 'Kiara'] [2, 3, 4, 5]
// Arrays Heterogeneos  // [2, 'Gregorio', true, [2, 3, 4], {x: 1, y: 2}] 

console.warn('// ! for in (Se utiliza para objetos)')
// Me sirve para recorrer objetos, obtener su claves y valores

const persona = {
    nombre: 'Maxi',
    apellido: 'Principe',
    edad: 22,
    altura: 1.70
}

console.log(persona)


for (const clave in persona) {   
    //console.log(clave) // clave
    //console.log(persona.clave) // Notación punto // ! NO FUNCIONA
    //console.log(persona[clave]) // Notación corchete (valor)
    console.log(`${clave}: ${persona[clave]}`)
}

console.warn('// ! for of. Trabaja con estructuras iterables')
// Arrays, Strings, maps, sets (Tienen iteradores dentro)

nombres = ['Arnold', 'Gregorio', 'Melina', 'Kevin', 'Kiara']
let nombreYApellido = 'Maximiliano Principe'
console.log(typeof nombres)

for (const elemento of nombres) {
    console.log(elemento)
}

for (const letra of nombreYApellido) {
    console.log(letra)
}

// ! while
// Uso while cuando desconosco la cantidad iteracciones.

let color = 'verde'

/* while (color != 'rojo') {
    color = prompt('escribi un color en mínusculas (rojo para salir)')
    console.log(color)
} */
console.error('Fin del programa')

console.warn('// ! do while')
// Uso do while cuando desconosco la cantidad iteracciones. Pero aunque sea una vez se va a ejecutar
let h = 0
let corte = 5
//debugger
do {
    console.log(h)
    h++
} while ( h <= corte);

console.warn('---------------------------')

const personas = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 28,
    altura: 1.75
  },
  {
    nombre: "María",
    apellido: "Gómez",
    edad: 34,
    altura: 1.62
  },
  {
    nombre: "Carlos",
    apellido: "López",
    edad: 22,
    altura: 1.80
  },
  {
    nombre: "Ana",
    apellido: "Martínez",
    edad: 30,
    altura: 1.68
  }
];

personas.forEach(function(persona) {
    console.log(persona)
    for (const clave in persona) {        
        console.log(persona[clave]) 
    }
})