const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuario")
const turmasController = require("../controllers/turmas")

router.get('/usuario', usuarioController.getAll);
router.get('/usuario/:id', usuarioController.getById);

router.post('/usuario', usuarioController.createUsuario);



router.get('/turmas', turmasController.getAll);
router.get('/turmas/:id', turmasController.getById);

router.post('/turmas', turmasController.createTurma);

module.exports = router;