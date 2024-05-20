// Importa o modelo Turmas do arquivo '../models/turmas'
const Turmas = require('../models/turmas');

// Função para obter todas as turmas
exports.getAll = async (req, res) => {
    // Obtém todas as turmas do banco de dados usando o método findAll do Sequelize
    const turmas = await Turmas.findAll();
    // Envia a resposta em formato JSON contendo todas as turmas encontradas
    res.json(turmas);
};

// Função para obter uma turma por ID
exports.getById = async (req, res) => {
    // Obtém o ID da turma dos parâmetros da requisição
    const idDoParamTur = req.params.id;
    // Procura uma turma no banco de dados onde o campo 'idTurmas' é igual ao ID fornecido
    const turmaEncontrada = await Turmas.findOne({ where: { idTurmas: idDoParamTur } });
    // Envia a resposta em formato JSON contendo a turma encontrada
    res.json(turmaEncontrada);
};

// Função para criar uma nova turma
exports.createTurma = async (req, res) => {
    // Verifica se já existe uma turma com o código fornecido no corpo da requisição
    const Turmacadastrada = await Turmas.findOne({ where: { codigo: req.body.codigo } });
    // Se já existir uma turma com o mesmo código, envia uma mensagem de erro
    if (Turmacadastrada) {
        return res.send('Já existe uma turma cadastrada neste código');
    }
    // Cria uma nova turma com os dados fornecidos no corpo da requisição
    const turmaCriada = await Turmas.create(req.body);
    // Loga no console a turma criada
    console.log("turmaCriada", turmaCriada);
    // Envia uma mensagem de sucesso
    return res.send("Deu certo");
};

// Função para atualizar uma turma existente
exports.updateController = async (req, res) => {
    // Obtém o código da turma dos parâmetros da requisição
    const codigoTurma = req.params.codigo;
    try {
        // Procura uma turma no banco de dados onde o campo 'codigo' é igual ao código fornecido
        const turmaCadastrada = await Turmas.findOne({ where: { codigo: codigoTurma } });

        // Se a turma for encontrada
        if (turmaCadastrada) {
            // Remove o campo 'codigo' do corpo da requisição, se existir
            delete req.body.codigo;

            // Atualiza os dados da turma no banco de dados onde o campo 'codigo' é igual ao código fornecido
            const [numRowsUpdate] = await Turmas.update(req.body, {
                where: { codigo: codigoTurma }
            });

            // Se a atualização foi bem-sucedida (numRowsUpdate > 0)
            if (numRowsUpdate > 0) {
                // Procura novamente a turma atualizada para retornar os dados atualizados
                const turmaAtualizada = await Turmas.findOne({ where: { codigo: codigoTurma } });
                // Envia uma mensagem de sucesso juntamente com os dados atualizados da turma
                return res.send({ message: 'Turma Atualizada com sucesso', turmacomdadosnovos: turmaAtualizada });
            } else {
                // Se não houve mudanças nos dados, envia uma mensagem indicando isso
                return res.send('Turma encontrada, porem, sem novos dados para atualizar');
            }
        } else {
            // Se a turma não for encontrada, envia uma mensagem de erro 404
            return res.status(404).send("Não existe uma turma cadastrada com este código");
        }
    } catch (error) {
        // Em caso de erro, loga o erro no console e envia uma mensagem de erro 500
        console.error('Erro ao atualizar turma', error);
        return res.status(500).send('Ocorreu um erro ao atualizar a turma.');
    }
};
