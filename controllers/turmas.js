const Turma = require('../models/turmas');
exports.getAll = async (req, res) => {
    const turmas = await Turma.findAll();
    res.json(turmas)
};

exports.getById = async (req, res) => {
    const idDoParam = req.params.id;
    const turmaEncontrada = await  Turma.findOne({where : {idTurmas: idDoParam}});
    res.json(turmaEncontrada)
};

exports.createTurma = async (req, res) => {
    const turmaCriada = await Turma.create(req.body);
    console.log("turmaCriada", turmaCriada);
    return res.send("certo")
};