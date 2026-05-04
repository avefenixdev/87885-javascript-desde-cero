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

// ! for in
// ! for of
// ! while
// ! do while