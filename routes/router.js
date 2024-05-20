const express = require('express');
// Importa o módulo Express, que é um framework para Node.js usado para construir aplicativos web e APIs.

const router = express.Router();
// Cria uma instância do Router do Express, que é usada para definir rotas em um módulo separado.

const usuarioController = require("../controllers/usuario");
// Importa o controlador de usuários, que contém a lógica para manipular as operações relacionadas a usuários.

const turmasController = require("../controllers/turmas");
// Importa o controlador de turmas, que contém a lógica para manipular as operações relacionadas a turmas.

const TypeUser = require('../controllers/tiposUsuarios');
// Importa o controlador de tipos de usuários, que contém a lógica para manipular as operações relacionadas aos tipos de usuários.

router.get('/usuario', usuarioController.getAll);
// Define uma rota GET para "/usuario" que chama o método getAll do usuarioController.
// Esta rota é usada para obter todos os usuários.

router.get('/usuario/:id', usuarioController.getById);
// Define uma rota GET para "/usuario/:id" que chama o método getById do usuarioController.
// Esta rota é usada para obter um usuário específico pelo ID.

router.post('/usuario', usuarioController.createUsuario);
// Define uma rota POST para "/usuario" que chama o método createUsuario do usuarioController.
// Esta rota é usada para criar um novo usuário.

router.put('/usuario/:cpf', usuarioController.updateControllerNome);
// Define uma rota PUT para "/usuario/:cpf" que chama o método updateControllerNome do usuarioController.
// Esta rota é usada para atualizar o nome de um usuário específico pelo CPF.

router.get('/turmas', turmasController.getAll);
// Define uma rota GET para "/turmas" que chama o método getAll do turmasController.
// Esta rota é usada para obter todas as turmas.

router.get('/turmas/:id', turmasController.getById);
// Define uma rota GET para "/turmas/:id" que chama o método getById do turmasController.
// Esta rota é usada para obter uma turma específica pelo ID.

router.post('/turmas', turmasController.createTurma);
// Define uma rota POST para "/turmas" que chama o método createTurma do turmasController.
// Esta rota é usada para criar uma nova turma.

router.get('/typesuser', TypeUser.getAll);
// Define uma rota GET para "/typesuser" que chama o método getAll do TypeUser.
// Esta rota é usada para obter todos os tipos de usuários.

router.get('/typesuser/:id', TypeUser.getById);
// Define uma rota GET para "/typesuser/:id" que chama o método getById do TypeUser.
// Esta rota é usada para obter um tipo de usuário específico pelo ID.

router.post('/typesuser', TypeUser.createTypeUser);
// Define uma rota POST para "/typesuser" que chama o método createTypeUser do TypeUser.
// Esta rota é usada para criar um novo tipo de usuário.

router.put('/turmas/:codigo', turmasController.updateController);
// Define uma rota PUT para "/turmas/:codigo" que chama o método updateController do turmasController.
// Esta rota é usada para atualizar uma turma específica pelo código.

module.exports = router;
// Exporta o objeto router para que ele possa ser utilizado em outras partes da aplicação.
// Isso permite que as rotas definidas aqui sejam incluídas no aplicativo principal.
