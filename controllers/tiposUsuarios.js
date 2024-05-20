// Importa o modelo 'tiposUsuarios' do arquivo '../models/tiposUsuarios'
const tiposUsuarios = require('../models/tiposUsuarios');

// Exporta uma função assíncrona chamada 'getAll' para lidar com a rota de obtenção de todos os tipos de usuários
exports.getAll = async (req, res) => {
    // Aguarda a execução da função 'findAll()' do modelo 'tiposUsuarios' para obter todos os tipos de usuários do banco de dados
    const Tiposusuarios = await tiposUsuarios.findAll();
    // Envia uma resposta JSON contendo todos os tipos de usuários obtidos
    res.json(Tiposusuarios);
};

// Exporta uma função assíncrona chamada 'getById' para lidar com a rota de obtenção de um tipo de usuário por ID
exports.getById = async (req, res) => {
    // Extrai o ID do tipo de usuário do parâmetro da solicitação
    const idDoParamTipUrs = req.params.id;
    // Busca no banco de dados um tipo de usuário com o ID especificado usando 'findOne()'
    const turmaEncontrada = await tiposUsuarios.findOne({ where: { idTipos_Usuarios: idDoParamTipUrs }});
    // Envia uma resposta JSON contendo o tipo de usuário encontrado
    res.json(turmaEncontrada);
};

// Exporta uma função assíncrona chamada 'createTypeUser' para lidar com a rota de criação de um novo tipo de usuário
exports.createTypeUser = async (req, res) => {
    // Cria um novo tipo de usuário com base nos dados contidos no corpo da solicitação ('req.body')
    const tiposUsuarioCriado = await tiposUsuarios.create(req.body);
    // Registra uma mensagem de log indicando que um tipo de usuário foi criado com sucesso
    console.log("Tipo de usuário criado", tiposUsuarioCriado); // Corrigido para 'tiposUsuarioCriado' para logar a instância criada corretamente
    // Retorna uma resposta indicando que a operação foi bem-sucedida
    return res.send("Deu certo");
};
