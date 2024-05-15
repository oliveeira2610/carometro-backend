const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuario")
const turmasController = require("../controllers/turmas")
const TypeUser = require('../controllers/tiposUsuarios')

router.get('/usuario', usuarioController.getAll);
router.get('/usuario/:id', usuarioController.getById);

router.post('/usuario', usuarioController.createUsuario);

router.put('/usuario/:cpf', usuarioController.updateControllerNome);


router.get('/turmas', turmasController.getAll);
router.get('/turmas/:id', turmasController.getById);

router.post('/turmas', turmasController.createTurma);


router.get('/typesuser', TypeUser.getAll);
router.get('/typesuser/:id', TypeUser.getById);

router.post('/typesuser', TypeUser.createTypeUser);

router.put('/turmas/:codigo', turmasController.updateController);

module.exports = router;
