const { where } = require('sequelize');
const Turmas = require('../models/turmas');
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

exports.getById = async (req, res) => {
    const idDoParamTur = req.params.id;
    const turmaEncontrada = await  Turmas.findOne({ where: {idTurmas: idDoParamTur}});
    res.json(turmaEncontrada)
};

exports.createTurma = async (req, res) => {
    const Turmacadastrada = await Turmas.findOne({ where: {codigo : req.body.codigo}});
    if (Turmacadastrada) {
        return res.send('Já existe uma turma cadastrada neste código')
    }
    const turmaCriada = await Turmas.create(req.body);
    console.log("turmaCriada", turmaCriada);
    return res.send("Deu certo")
};

exports.updateTurma = async (req,res) => {
    const codigoTurma = req.params.updateTurma;
    try{
        const Turmacadastrada = await Turmas.findOne({where: {codigo: codigoTurma}});
        if(Turmacadastrada){
            delete req.body.codigo; //medida de segurança

            const [numRowsUpdated] = await Turmas.update(req.body, { //define um array que faz contagem de numero de linhas que vao ser atualizadas, passadas na aquisiçao do body
                where: {codigo: codigoTurma}
            })

            if(numRowsUpdated > 0){
                const turmaAtualizada = await Turmas.findOne({where:{codigo :codigoTurma}});
                return res.send({message: 'Turma Atualizada com sucesso', turmacomdadosnovos: turmaAtualizada});
            } else {
                return res.send("Turma encontrada, mas sem novos dados para atualizar");
            }
        } else{
        return res.status(404).send("Não existe uma turma cadastrada com este codigo");
        }


    }catch (error) {
        console.error("Erro ao atualizar turma", error);
        return res.status(500).send("Decorreu um erro ao atualizar a turma");
    }
};