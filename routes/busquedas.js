/*

rutas: api/todo/:busqueda



*/


const { Router } = require("express");

const { check } = require("express-validator");

const { validarCampos } = require("../middleware/validar-campos");

const {getTodo}= require("../controllers/busquedas")

const { validarJWT } = require("../middleware/validar-jwt");

const router = Router();

router.get("/:busqueda", validarJWT,getTodo);


module.exports=router