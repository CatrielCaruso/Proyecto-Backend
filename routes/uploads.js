/*

rutas: api/uploads/



*/

const { Router } = require("express");

const { validarJWT } = require("../middleware/validar-jwt");

const ExpressFileUpload = require('express-fileupload');

const {fileUpload,retornaImagen}= require("../controllers/uploads");

const router = Router();

router.use(ExpressFileUpload());

router.put("/:tipo/:id", validarJWT, fileUpload);
router.get("/:tipo/:foto", retornaImagen);


module.exports = router;
