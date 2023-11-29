const bcrypt = require("bcrypt")
const { Usuario } = require("../db.js")
const crypto = require("crypto");

/*
Funcion para evitar registro duplicado
*/
const verificarDuplicado = async (  correo  ) => {
    let duplicado = await Usuario.findOne({
        where: {
            correo: correo
        }
    })
    if(duplicado){
        return true
    } else {
        return false
    }
}
/*
Funcion para validar password valida, por lo menos 1 numero, 1 letra mayuscula, no se aceptan caracteres especiales, resive la contraseña por parametro
*/
const verificarContrasenaValida = (  contrasena  ) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if (!regex.test(contrasena)) {
        return false
    }
    return true
}

/*
Funcion para hashear la contraseña, resive la contraseña por parametro
*/
const crearContrasenaHash =  async (  contrasena  ) =>   {
    const rounds = 8;
    const passwordHash = await bcrypt.hash( contrasena, rounds  );

    return passwordHash
}
/*
Funcion para comparar la contraseña hasheada, resive la contraseña ingresada y la contraseña guardada en la DB por parametro
*/
const verificarContrasenaHash = async (  contrasena , contrasenaHash  ) =>   {

    const passwordHash = await bcrypt.compare(  contrasena, contrasenaHash)

    return passwordHash
}
/*
Funcion para validar que sea correo valido
*/
const verificarCorreo = (  correo  ) => {

    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  
    var esValido = expReg.test(correo)
    
    return esValido  
}


module.exports= {
    crearContrasenaHash,
    verificarContrasenaHash,
    verificarCorreo,
    verificarDuplicado,
    verificarContrasenaValida,
}