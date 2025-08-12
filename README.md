
# 📩 Formulario de Contacto con Validación y JSON Server

Este proyecto es un **formulario web** con validación en el lado del cliente usando **JavaScript** y envío de datos a un **backend simulado** con **JSON Server**.

## 🚀 Características
- Validación de campos en tiempo real antes de enviar:
  - **Nombre**: obligatorio y mínimo 2 caracteres.
  - **Correo**: obligatorio y formato válido.
  - **Mensaje**: obligatorio y mínimo 10 caracteres.
- Mensajes de error dinámicos debajo de cada campo.
- Envío de datos a una API simulada (`JSON Server`).
- Base de datos simulada con `db.json`.

---

## 📂 Estructura del proyecto
📦 proyecto
-indice.html # Página principal con el formulario

-validacion-formulario.js # Lógica de validación

-api.js # Función para enviar datos al backend

-db.json # Base de datos simulada para JSON Server



---

## 🛠 Tecnologías usadas
- **HTML5** para la estructura.
- **CSS** para el estilo
- **JavaScript** para la validación y conexión con la API.
- **JSON Server** para simular el backend.

---

## 📦 Instalación y uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/evp2005/form-mb5-grupo1.git
   cd form-mb5-grupo1.git
Instala JSON Server:


npm install -g json-server
Inicia el servidor:


json-server --watch db.json --port 3001
Abre indice.html en tu navegador.

📌 Notas
El archivo api.js está preparado para enviar los datos usando fetch.

Puedes conectar el formulario con cualquier backend real cambiando la URL en api.js.

Si usas JSON Server, los mensajes enviados se guardarán en db.json.
