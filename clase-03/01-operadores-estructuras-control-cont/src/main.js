import './style.css'

console.warn('// ! Operadores aritméticos')

const a = 4
const b = 2

const suma = a + b
console.log(suma); // 6
const resta = a - b
console.log(resta); // 2
const  multiplicacion = a * b
console.log(multiplicacion); // 8
const division = a / b
console.log(division); // 2
const modulo = a % b
console.log(modulo); // 0
const potencia = a**b // 4*4 = 16
console.log(potencia);

console.warn('// ! Operadores de comparación')
// Los operadores de comparacióno me devuelven booleanos

const edad = 18

let resultado = edad == 18 // Igualdad no estricta | true
console.log(resultado) // ! NO USAR porque estos solo comparan valores
resultado = edad != 18 // Desigualdad no estricta | false
console.log(resultado); // ! NO USAR porque estos solo comparan valores
resultado = edad > 18 // Mayor que | false
console.log(resultado);
resultado = edad < 18 // Menor que | false
console.log(resultado);
resultado = edad <= 18 // Menor o igual | true
console.log(resultado);
resultado = edad >= 18 // Mayor o igual | true
console.log(resultado);

// ! USAR Comparadores estrictos
resultado = edad == '18'  
console.log(resultado) // true
resultado = edad === '18' 
console.log(resultado) // Comparación estrictica (tipo y valor) // false

resultado = edad != '18' 
console.log(resultado) // false
resultado = edad !== '18' 
console.log(resultado) // Comparación estrictica (tipo y valor) | true

console.log('// ! Condicionales (if-switch-ternario)')

console.log('// ! Condicionales (if-switch-ternario)')

// * Estructura básica
/* if (condicion) {
    Codigo a ejecutar SI la condición es true
} else {
    Código a ejecutar SI la condición es false
} */

/* Si el montó supera 100 vamos a aplicar un descuento. De la otra manera no aplicamos descuento */
const monto = 150
let descuento = 0

if (monto > 100) {
    // Aplico descuento
    descuento = monto * 0.10 // 10% de descuento
} else {
    // No aplico descuento
    descuento = 0 // Sin descuento
}

const totalAPagar = monto - descuento
console.log('Total a pagar: $' + totalAPagar + ' de precio') // * Concatenación
console.log('Total a pagar: $', totalAPagar, 'de precio') // * Esto no es una concatenación

console.warn('// ! -------------------------')
console.warn('// ! Contactenación de cadenas')
console.warn('// ! -------------------------')
//debugger
const nombre =  'Maximiliano'
const apellido = 'Principe'

console.log(nombre + ' ' + apellido) // Contatenación con +
console.warn('Template strings (Templates literales')
console.log(`${nombre} ${apellido}`) // backtick | Alt + 96 


console.warn('// ! MUltiplices condicionales (if, else if, else')

// Calificar examen
// * Es mayor igual a 9 -> Mostrar 'Nota excelente'
// * Es mayor igual 8 -> Mostrar 'Nota muy buena' // 2
// * Es mayor igual 7 -> Mostrar 'Nota buena'
// * Es mayor igual 6 -> Mostrar 'Nota Suficiente'
// * Es menor 6 -> Mostrar 'Nota Insuficiente'

console.warn('// ! --------------------------------------')
console.warn('// ! Depuración de nuestro código (Debugger')
console.warn('// ! --------------------------------------')
// En Javascript cuando quier empezar a debuggear tengo que colocar la palabra 'debugger'
// Al colocar la palabra debugger lo que estoy haciendo es colocando un punto de quiebre o breakpoint.

// debugger
// para comenzar a debuggear coloco la palabras debugger
// Para dejcar de debuggear comento o borro la palabra y actualizo el navegador.

//const nota = 8.9
/* let nota = prompt('Ingese una nota para evaluar', '0')
console.log(nota)
nota = Number(nota) // Parseando (convertir un tipo de dato a otro)
console.log(nota) */
const nota = Number(prompt('Ingese una nota para evaluar', '0'))
console.log(nota)

if ( nota >= 9 ) {
    console.log('Nota excelente')
    alert('Nota excelente')
} else if ( nota >= 8) { // 2
    console.log('Nota muy buena')
    alert('Nota muy buena')
} else if ( nota >= 7) {
    console.log('Nota buena')
    alert('Nota buena')
} else if ( nota >= 6 ) {
    console.log('Nota suficiente')
    alert('Nota suficiente')
} else {
    console.log('Nota insuficiente')
    alert('Nota insuficiente')
}

// Shortcuts
// Para modificar varias palabras con el mismo identificador
// Selecciono una y luego hago
// Ctrl + D

