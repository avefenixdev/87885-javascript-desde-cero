import './style.css'

console.warn('// Objeto DATE')

// Creamos un objeto de fecha

const fechaActual = new Date() // Crea un objeto (instancia la clase Date)

// console.log(fechaActual)
console.dir(fechaActual)

// Obtener diferentes partes de la fecha
let anio = fechaActual.getFullYear() // 2026
console.log(anio)
let mes = fechaActual.getMonth() // 0-11 (0 = enero)
console.log(mes)
let dia = fechaActual.getDate() // 1-31
console.log(dia)
let diaSemana = fechaActual.getDay() // 0-6 (0 = domingo)
console.log(diaSemana)
let hora = fechaActual.getHours() // 0-23
console.log(hora)
let minutos = fechaActual.getMinutes() // 0-59
console.log(minutos)
let segundos = fechaActual.getSeconds() // 0-59
console.log(segundos)

console.warn('// ! Intl.DateTimeFormat ')

const fecha = new Date()

const formato = new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
})


console.log(formato.format(fecha))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat




