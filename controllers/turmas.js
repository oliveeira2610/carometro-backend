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