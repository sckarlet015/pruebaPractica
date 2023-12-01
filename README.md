# Prueba Practica
Este proyecto consiste en una agenda de contactos desarrollada con Node.js, Express y PostgreSQL.

## Instalación del Proyecto
Para trabajar localmente con este proyecto, puedes clonar el repositorio desde GitHub usando el siguiente enlace:
pruebaPractica GitHub Repo

Una vez descargado o clonado el repositorio, navega a la carpeta raíz del proyecto (donde se encuentra el archivo package.json) y ejecuta el siguiente comando para instalar las dependencias:
`npm install`
Asegúrate de cambiar la URL de conexión a la base de datos PostgreSQL en Sequelize con la siguiente línea:

`postgres://agenda_e5su_user:IaYhXvVi3ztXn70eFWKOg9BJb6irqbxt@dpg-clkgdr4jtl8s73e4hh40-a.oregon-postgres.render.com/agenda_e5su`

Posteriormente, puedes iniciar el servidor con el siguiente comando:
`npm start`

## Deploy
El servidor estará disponible en https://backend-31q5.onrender.com/.

### Endpoints Disponibles para Pruebas:
#### Registro de Usuario
POST https://backend-31q5.onrender.com/usuario/newUser

Envía un body con los campos obligatorios del usuario:

`{
	"nombre": "test",
	"correo": "test@test.com",
	"contrasena": "Test1234"
}`

#### Iniciar Sesión
POST https://backend-31q5.onrender.com/usuario/usuario/login

Envía un cuerpo con los campos obligatorios del usuario:

`{
	"correo": "test@test.com",
	"contrasena": "Test1234"
}`

#### Editar Datos del Usuario

PUT https://backend-31q5.onrender.com/usuario/edit/:idUsuario

Envía un cuerpo con los campos a editar del usuario:

`{
    "apellidos": "testEditado",
    "celular": "5512345678",
    "telefono": "555555555",
    "foto": "URL de la foto"
}`

#### Obtener Todos los Contactos
GET https://backend-31q5.onrender.com/contacto/allContacts/:idUsuario

Devuelve todos los contactos almacenados en la base de datos.

#### Crear Nuevo Contacto

POST https://backend-31q5.onrender.com/contacto/newContact

Crea un nuevo contacto en la base de datos.

`{
	"usuarioId": "500f8d98-2c37-4afd-8544-ed5b45642af5",
	"nombre": "Contacto-Nuevo",
	"correo": "testContacto@test.com.com",
	"celular": "5535115656",
    "demás atributos": "..."
}`

#### Obtener Detalles de un Contacto

GET https://backend-31q5.onrender.com/contacto/contacDetails/:id

Devuelve los detalles de un contacto especificado por su id.

#### Actualizar Detalles de un Contacto

PUT https://backend-31q5.onrender.com/contacto/updateContact/:id

Actualiza los detalles de un contacto especificado por su id.

`{
	"nombre": "Contacto-Actualizado",
	"correo": "testContactoActualizado@test.com.com",
	"celular": "5535115656",
    "demás atributos": "..."
}`

#### Eliminar un Contacto

DELETE https://backend-31q5.onrender.com/contacto/deleteContact/:id

Elimina un contacto especificado por su id.