import './style.css'

console.warn('Operadores lógicos')
// Se usan para combinar condicionales. Los principales son Y (AND) el O (OR) y NO (NOT)

let edadCiudadano = 25
let tieneLicencia = true

// ! Y (AND) -> Ambas condiciones deben ser true 
//                 true           &&      true       =   true
console.log((edadCiudadano >= 18) && (tieneLicencia)) // true

// AND
// true     true  ---> true (Acordarse que tienen que ser ambas verdaderas para que el resutlado verdadero)
// false    true  ---- false
// true     false ---- false
// false    false ---- false

edadCiudadano = 17
tieneLicencia = true

// ! O (OR) -> 
//                false                   true        // true
console.log((edadCiudadano >= 18) || (tieneLicencia)) // Puede conducir pero en realidad la ley no lo deja

// AND
// true     true  ---- true
// false    true  ---- true
// true     false ---- true
// false    false ---> false (Acordarse que tienen que ser ambas falsas para que el resutlado sea falso)


// ! NOT -> Invierte la salida ( o sea cambia el sentido del boolean )

// NOT
// true -> !true -> false
// false -> !false -> true

tieneLicencia = true

console.log((tieneLicencia)) // true
console.log(!(tieneLicencia)) // false

// Shortcuts
// Para modificar varias palabras con el mismo identificador
// Selecciono una y luego hago
// Ctrl + D

// Ternario

const isTeacher = false
//                 Condición   eval    true          false
console.log((isTeacher) ? 'Es profe' : 'No es profe' ) // No es profe

const resultado = (isTeacher) ? 'Es profe' : 'No es profe'
console.log('¿Es profe? ' + resultado) // ¿Es profe? No es profe

// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy


let colores = ['rojo', 'amarillo', 'verde']
console.log(colores)
// debugger
// length -> en un array nos permite saber cuantos elementos hay dentro del array
if ( colores.length ) { // true -> 1,2,3.. | false -> 0
    console.warn('recorriendo el array')
    colores.forEach(color => {
        console.log(color)
    });
} else {
    console.error('No hay elementos dentro array')
}

// ! Switch

/* 
           eval
    switch (key) {
        case value:
            
            break;
        case value:
            
            break;

        default:
            break;
} */

// El switch es una estructura de evalución estrictica. No la voy a poder usar para rango de valores. Si para elementos fijos. Menú de cajero automatico, menú de juego.
// Javascript es case sensitive
let diaSemana = 'miercoles' // Consideramos que el usuario es ideal
/* switch (diaSemana) {
    case 'lunes':
        console.log('Es día de la semana')
        break; // <---- detiene el flujo de ejecución acá
    case 'martes':
        console.log('Es día de la semana')
        break;
    case 'miercoles':
        console.log('Es día de la semana')
        break;
    case 'jueves':
        console.log('Es día de la semana')
        break;
    case 'viernes':
        console.log('Es día de la semana')
        break;
    case 'sabado':
        console.log('Es día de fin de semana')
        break;
    case 'domingo':
        console.log('Es día de fin de semana')
        break;
    default:
        break;
}
 */

diaSemana = 'sabado'
diaSemana = diaSemana.toLowerCase()

switch (diaSemana) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log(`El ${diaSemana} es un día de la semana`)
        break;
    case 'sabado':
    case 'domingo':
        console.log(`El ${diaSemana} es día de fin de semana`)
        break
    default:
        console.log('No es un día de la semana válido')
        break;
}

