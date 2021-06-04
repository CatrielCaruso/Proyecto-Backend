// getTodo

const { response } = require("express");

const Usuario = require("../models/usuarios");
const Medico = require("../models/medico");
const Hospital=require("../models/hospital");





getTodo = async(req, res = response) => {
 
 const busqueda = req.params.busqueda;
 const regex = new RegExp(busqueda,'i');

//  const usuario = await Usuario.find({nombre:regex});
//  const medicos = await Medico.find({nombre:regex});
//  const hospitales= await Hospital.find({nombre:regex});

 const [usuarios,medicos,hospitales]= await Promise.all([


     Usuario.find({nombre:regex}),
     Medico.find({nombre:regex}),
     Hospital.find({nombre:regex}),

 ]);



  res.json({
    ok: true,
    usuarios,
    medicos,
    hospitales
  });
};

module.exports = {
  getTodo,
};
