const fs = require("fs");

const path = require("path");

const { response } = require("express");

const { v4: uuidv4 } = require("uuid");

const { actualizarImagen } = require("../helpers/actualizar-imagen");

const fileUpload = (req, res = response) => {
  const tipo = req.params.tipo;
  const id = req.params.id;

  // Validar tipo
  const tiposValidos = ["hospitales", "medicos", "usuarios"];

  if (!tiposValidos.includes(tipo)) {
    return res.status(400).json({
      ok: false,
      msg: "No es médico, usuario u hospital(tipo)",
    });
  }

  // Validar que exista un archivo
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      ok: false,
      msg: "No hay ningún archivo",
    });
  }

  //Procesar la imagen

  const file = req.files.imagen;
  // console.log(file);

  const nombreCortado = file.name.split(".");
  const extensionArchivo = nombreCortado[nombreCortado.length - 1];

  //Validar extension
  const extensionesValidas = ["jpg", "png", "jpeg", "gif"];

  if (!extensionesValidas.includes(extensionArchivo)) {
    return res.status(400).json({
      ok: false,
      msg: "No es una extension permitida",
    });
  }

  // Generar el nombre del archivo

  const nombreArchivos = `${uuidv4()}.${extensionArchivo}`;

  //Path para guardar la imagen

  const path = `./uploads/${tipo}/${nombreArchivos}`;

  // Mover la imagen
  file.mv(path, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        ok: false,
        msg: "Error al mover la imagen",
      });
    }

    // Actualizar base de datos

    actualizarImagen(tipo, id, nombreArchivos);

    res.json({
      ok: true,
      msg: "Archivo subido",
      nombreArchivos,
    });
  });
};

const retornaImagen = (req, res = response) => {
  const tipo = req.params.tipo;
  const foto = req.params.foto;

  const pathImg = path.join(__dirname, `../uploads/${tipo}/${foto}`);

  // Imagen por defecto

  if (fs.existsSync(pathImg)) {
    res.sendFile(pathImg);
  } else {
    const pathImg = path.join(__dirname, `../uploads/no-img.jpg`);

    res.sendFile(pathImg);
  }
};

module.exports = { fileUpload, retornaImagen };
