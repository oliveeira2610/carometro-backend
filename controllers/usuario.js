// Importa o modelo de usuário ('Usuario') do arquivo '../models/usuario'
const Usuario = require('../models/usuario');

// Importa o modelo de associação entre usuários e turmas ('UsuariosTurmas') do arquivo '../models/Usuarios_turmas'
const UsuariosTurmas = require('../models/Usuarios_turmas');

// Exporta uma função assíncrona chamada 'getAll' para lidar com a rota de obtenção de todos os usuários
exports.getAll = async (req, res) => {
    // Aguarda a execução da função 'findAll()' do modelo 'Usuario' para obter todos os usuários do banco de dados
    const usuarios = await Usuario.findAll();
    // Envia uma resposta JSON contendo todos os usuários obtidos
    res.json(usuarios);
};

// Exporta uma função assíncrona chamada 'getById' para lidar com a rota de obtenção de um usuário por ID
exports.getById = async (req, res) => {
    // Extrai o ID do usuário do parâmetro da solicitação
    const idDoParam = req.params.id;
    // Busca no banco de dados um usuário com o ID especificado usando 'findOne()'
    const usuarioEncontrado = await Usuario.findOne({ where: { idUsuarios: idDoParam }});
    // Envia uma resposta JSON contendo o usuário encontrado
    res.json(usuarioEncontrado);
};

// Exporta uma função assíncrona chamada 'createUsuario' para lidar com a rota de criação de um novo usuário
exports.createUsuario = async (req, res) => {
    // Procura um usuário no banco de dados com o CPF fornecido no corpo da solicitação
    const usuarioCadastrado = await Usuario.findOne({ where: { cpf: req.body.cpf }});
    // Verifica se já existe um usuário cadastrado com o CPF fornecido
    if (usuarioCadastrado) {
        // Se já existir, retorna uma resposta indicando que já existe um usuário cadastrado com este CPF
        return res.send('Já existe um usuário cadastrado neste CPF.');
    }
    // Se o usuário ainda não estiver cadastrado, cria um novo usuário com base nos dados fornecidos no corpo da solicitação
    const usuarioCriado = await Usuario.create(req.body);
    // Verifica se o usuário foi criado com sucesso e se o ID do usuário e o ID da turma foram fornecidos no corpo da solicitação
    if (usuarioCriado.idUsuarios && req.body.Turmas_idTurmas){
        // Se sim, associa o usuário à turma correspondente na tabela de associação 'UsuariosTurmas'
        await UsuariosTurmas.create({
            Turmas_idTurmas: req.body.Turmas_idTurmas,
            Usuarios_idUsuarios: usuarioCriado.idUsuarios,
        });
    }
    // Registra uma mensagem de log indicando que o usuário foi criado com sucesso
    console.log("Usuário criado", usuarioCriado);
    // Retorna uma resposta indicando que a operação foi bem-sucedida
    return res.send("Deu certo");
};

// Exporta uma função assíncrona chamada 'updateControllerNome' para lidar com a atualização do nome de um usuário
exports.updateControllerNome = async (req, res) => {
    // Extrai o CPF do usuário a ser atualizado dos parâmetros da solicitação
    const cpfUser = req.params.cpf;
    try {
        // Procura um usuário no banco de dados com o CPF fornecido
        const userMudar = await Usuario.findOne({ where: { cpf: cpfUser }});
        
        // Verifica se o usuário foi encontrado
        if (userMudar) {
            // Remove as propriedades 'cpf', 'Tipos_Usuarios_idTipos_Usuarios' e 'idUsuarios' do corpo da solicitação
            delete req.body.cpf,
            delete req.body.Tipos_Usuarios_idTipos_Usuarios,
            delete req.body.idUsuarios;
            
            // Atualiza as informações do usuário com base nos dados fornecidos no corpo da solicitação
            const [numRowsUpdate] = await Usuario.update(req.body, {
                where: { cpf: cpfUser }
            });
            
            // Verifica se pelo menos uma linha foi atualizada no banco de dados
            if (numRowsUpdate > 0) {
                // Busca novamente o usuário atualizado no banco de dados
                const usuarioMudado = await Usuario.findOne({ where: { cpf: cpfUser }});
                // Retorna uma mensagem de sucesso junto com o usuário atualizado
                return res.send({ message: 'Usuário Atualizado com sucesso', usuarioatualizado: usuarioMudado });
            } else {
                // Retorna uma mensagem indicando que o usuário foi encontrado, mas nenhum dado novo foi fornecido para atualização
                return res.send('Usuário encontrado, porém, sem novos dados para atualizar');
            }
        } else {
            // Retorna uma resposta com status 404 indicando que não foi encontrado um usuário com o CPF fornecido
            return res.status(404).send("Não existe um usuário cadastrado com este CPF");
        }
    } catch (error) {
        // Registra um erro no console
        consoler.error('Erro ao atualizar o usuário', error);
        // Retorna uma resposta com status 500 indicando que ocorreu um erro ao atualizar o usuário
        return res.status(500).send('Ocorreu um erro ao atualizar o usuário.');
    }
};
