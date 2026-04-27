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

// Shortcuts
// Para modificar varias palabras con el mismo identificador
// Selecciono una y luego hago
// Ctrl + D