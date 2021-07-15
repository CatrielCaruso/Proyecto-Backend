/* 

 Ruta: /api/usurios


*/

const { Router } = require("express");

const { check } = require("express-validator");

const { validarCampos } = require("../middleware/validar-campos");

const { getUsuarios, crearUsuarios,actualizarUsuario,borrarUsuario } = require("../controllers/usuarios");

const { validarJWT,validarAdmin_Role,validarAdmin_Role_o_MismoUsuario } = require("../middleware/validar-jwt");

const router = Router();

router.get("/",validarJWT, getUsuarios);

router.post(
  "/",
  [
   
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  crearUsuarios
);
router.put(
  "/:id",
  [
    validarJWT,
    validarAdmin_Role_o_MismoUsuario,
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("role", "El role es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  actualizarUsuario
);

router.delete("/:id", [validarJWT,validarCampos,validarAdmin_Role],borrarUsuario);
module.exports = router;
