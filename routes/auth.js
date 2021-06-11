/*

PATH: '/api/login'

*/

const { Router } = require("express");

const { check } = require("express-validator");

const { login,googleSinIn,renewToken } = require("../controllers/auth");

const { validarCampos } = require("../middleware/validar-campos");

const {validarJWT} = require("../middleware/validar-jwt");

const router = Router();

router.post(
  "/",
  [
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos
  ],
  login
);

router.post(
  "/google",
  [
    check("token", "El token de google es obligatorio").not().isEmpty(),
   
    validarCampos
  ],
  googleSinIn
);

router.get(
  "/renew",
  validarJWT,
  renewToken
);

module.exports = router;
