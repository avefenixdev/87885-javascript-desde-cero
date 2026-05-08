import './style.css'


const formu = document.querySelector('form')
//console.log(formu)
console.dir(formu)

/* const inputNombre = document.querySelector('#lbl-nombre') */
console.dir(formu[0]) // dentro tengo el input
console.log(formu[0]) // dentro tengo el input


// En el momento que ocurrá el evento dentro dentro de los parentesis del callback voy a recibir si coloco una variable un objeto del evento.
formu.addEventListener('submit', (e) => { // evt, evento, event
  e.preventDefault() // Detenego el comportamiento por defecto del formulario.
  console.log('Se hizo click sobre el botón y se está por enviar el formulario pero lo detuve.')

  console.log(formu[0].name) // el indentificador de la variable donde se va a guarda el dato escrito por el usuario
  console.log(formu[0].value) // dato que escribe el usuario en el campo (input)
  
  console.log(formu[1].name)
  console.log(formu[1].value)
  let nombreName = formu[0].name
  let nombreValue = formu[0].value
  let apellidoName = formu[1].name
  let apellidoValue = formu[1].value

  // * Sacar espacios de adelante y atrás.
  nombreValue = nombreValue.trim() // Método de las cadenas (strings)
  console.log(nombreValue)
  apellidoValue = apellidoValue.trim() // Método de las cadenas (strings)
  console.log(apellidoValue)
  const errorNombre = document.querySelector('#error-nombre')

  if ( nombreValue === '' ) {
    console.error('El nombre es obligatorio')
    errorNombre.textContent = 'El nombre es obligatorio'
    return // break
  } else {
     errorNombre.textContent = ''
  }

  if ( apellidoValue === '' ) {
    console.error('El apellido es obligatorio')
    return // break
  }

  // Envío
  const datosValidados = {
    [nombreName]: nombreValue,
    [apellidoName]: apellidoValue,
  }
  console.log(datosValidados)
})
