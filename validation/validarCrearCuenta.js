export default function validarCrearCuenta(value) {

  let error = {}

  if( !value.nombre ) {
    error.nombre = 'El nombre es obligatorio'
  }

  if( !value.email ) {
    error.email = 'El email es obligatorio'
  } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email) ) {
    error.email = 'Email no valido'
  }

  if( !value.contraseña ) {
    error.contraseña = 'La contraseña es obligatoria'
  } else if ( value.contraseña.length < 6 ) {
    error.contraseña = 'La contraseña debe tener al menos 6 caracteres'
  } 

  return error;

}