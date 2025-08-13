// validacion-formulario.js
import { enviarDatos } from './Script/api.js'; //CAMBIE YO
// 1. EVENT LISTENER PARA EL FORMULARIO
// -----------------------------------
// Captura el evento de envío del formulario y previene el comportamiento por defecto (recargar la página)
document.getElementById('contactoForm').addEventListener('submit', async function(e) {  //CAMBIE YO

  e.preventDefault(); // Detiene el envío tradicional del formulario
  
  // 2. LIMPIEZA DE ERRORES ANTERIORES
  // --------------------------------
  // Elimina cualquier mensaje de error previo mostrado al usuario
  const errores = document.querySelectorAll('.error-validacion');
  errores.forEach(error => error.remove());

  // 3. RECOLECCIÓN DE DATOS
  // -----------------------
  // Obtiene y limpia (trim) los valores de cada campo del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // 4. VALIDACIONES
  // ---------------
  let formularioValido = true; // Bandera para rastrear el estado global del formulario

  // Validación del campo Nombre:
  if (!nombre) {
    mostrarError('nombre', 'El nombre es obligatorio');
    formularioValido = false;
  } else if (nombre.length < 2) {
    mostrarError('nombre', 'Mínimo 2 caracteres');
    formularioValido = false;
  }

  // Validación del campo Correo:
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar emails
  if (!correo) {
    mostrarError('correo', 'El correo es obligatorio');
    formularioValido = false;
  } else if (!regexCorreo.test(correo)) {
    mostrarError('correo', 'Correo inválido (ej: usuario@dominio.com)');
    formularioValido = false;
  }

  // Validación del campo Mensaje:
  if (!mensaje) {
    mostrarError('mensaje', 'El mensaje es obligatorio');
    formularioValido = false;
  } else if (mensaje.length < 10) {
    mostrarError('mensaje', 'Mínimo 10 caracteres');
    formularioValido = false;
  }

  // 5. RESPUESTA A FORMULARIO VÁLIDO
  // -------------------------------
  if (formularioValido) {
    const datos = {  //CAMBIE YO
    nombre: this.nombre.value.trim(),
    correo: this.correo.value.trim(),
    mensaje: this.mensaje.value.trim()
  };

  try {
    await enviarDatos(datos); // Enviar datos a la API
    // Muestra mensaje de éxito
    document.getElementById('mensajeConfirmacion').textContent = '¡Formulario enviado!';
    
    // Resetea el formulario
    this.reset();
    
    // PUNTO DE EXTENSIÓN PARA EL BACKEND:
    // Aquí se podría conectar con la API simulada o real
    // Ejemplo: enviarDatos({ nombre, correo, mensaje });
  } catch (error) {
    document.getElementById('mensajeConfirmacion').textContent = 'Error al enviar el formulario. Intenta más tarde.';
    console.error(error);
  }
}


});

// 6. FUNCIÓN AUXILIAR: MOSTRAR ERRORES
// -----------------------------------
/**
 * Muestra un mensaje de error debajo del campo correspondiente
 * @param {string} campoId - ID del campo del formulario
 * @param {string} mensaje - Mensaje de error a mostrar
 */
function mostrarError(campoId, mensaje) {
  const campo = document.getElementById(campoId); // Obtiene el campo
  const errorElement = document.createElement('small'); // Crea elemento para el error
  
  // Configura el elemento de error
  errorElement.className = 'error-validacion'; // Clase para estilizado CSS
  errorElement.textContent = mensaje; // Texto del error
  
  // Inserta el mensaje después del campo (DOM manipulation)
  campo.insertAdjacentElement('afterend', errorElement);
}