const Turmas = require('../models/turmas');
 
// Esta sessão está obtendo a tabela inteira
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

// Esta sessão está obtendo a linha por ID
exports.getById = async (req, res) => {
    const idDoParamTur = req.params.id;
    const turmaEncontrada = await  Turmas.findOne({ where: {idTurmas: idDoParamTur}});
    res.json(turmaEncontrada)
};

// Esta sessão está criando uma turma
exports.createTurma = async (req, res) => {
    const Turmacadastrada = await Turmas.findOne({ where: {codigo : req.body.codigo}});
    if (Turmacadastrada) {
        return res.send('Já existe uma turma cadastrada neste código')
    }
    const turmaCriada = await Turmas.create(req.body);
    console.log("turmaCriada", turmaCriada);
    return res.send("Deu certo");
};

exports.updateController = async (req, res) => {
    const codigoTurma = req.params.codigo;
    try{
        const turmaCadastrada = await Turmas.findOne({where: {codigo: codigoTurma}})

        if(turmaCadastrada) {
            delete req.body.codigo;

            const [numRowsUpdate] = await Turmas.update(req.body, {
                where: {codigo: codigoTurma}
            });

            if (numRowsUpdate > 0) {
                const turmaAtualizada = await Turmas.findOne({where: {codigo: codigoTurma}});
                return res.send({message: 'Turma Atualizada com sucesso', turmacomdadosnovos: turmaAtualizada});
            }
            else {
                return res.send('Turma encontrada, porem, sem novos dados para atualizar');
            }
        }
        else{
            return res.status(404).send("Não existe uma turma cadastrada com este código");
        }
    } catch (error){
        consoler.error('Erro ao atualizar turma', error);
        return res.status(500).send('Ocorreu um erro ao atualizar a turma.');
    }
};