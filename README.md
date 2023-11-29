# pruebaPractica
Proyecto que consiste en una agenda de contactos con Node.js, Express y PostgresQL
# Instalación del proyecto
Para poder trabajar en este proyecto de forma local puede clonar el repo des GitHub en el siguiente link
[https://github.com/sckarlet015/pruebaPractica.git]
Una vez descargado o clonado el repositorio se debe acceder a la carpeta raiz del proyecto donde se encuentra el archivo package.json para instalar las dependencias con el comando:
[npm install]
Posteriormente puede iniciarlo con el comando
[npm start]
# Endpoints local
## GET http://localhost:3001/allContacts
Devuelve todos los contactos almacenados en la base de datos
## POST http://localhost:3001/newContact
Crea un nuevo contacto en la base de datos
## GET http://localhost:3001/contacDetails/:id
Devuelve los detalles de un contacto especificado por su id
## PUT http://localhost:3001/updateContact/:id
Actualiza los detalles de un contacto especificado por su id

