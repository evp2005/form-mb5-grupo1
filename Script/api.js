const URL = 'http://localhost:3005/mensajes';

export async function enviarDatos(datos) {
  const respuesta = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  if (!respuesta.ok) {
    throw new Error('Error al enviar los datos');
  }

  return await respuesta.json();
}