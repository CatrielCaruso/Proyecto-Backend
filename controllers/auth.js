const { response } = require("express");

const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuarios");

const {generarToken} = require('../helpers/jwt')

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {

    // Verificar emails
    const usuarioDB = await Usuario.findOne({ email });
    
    
    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: "Email no encontrado",
      });
    }

    //verificar contraseña

    const validPassword = bcrypt.compareSync(password,usuarioDB.password);
    if(!validPassword){
      
        res.status(400).json({
            ok: false,
            msg: "Contraseña incorrecta",
          });
        }


    //Generar el TOKEN - JWT
     
    const token = await generarToken(usuarioDB.id);



    res.json({
      ok: true,
     token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = { login };
