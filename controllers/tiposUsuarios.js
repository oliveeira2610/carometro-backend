const tiposUsuarios = require('../models/tiposUsuarios');
exports.getAll = async (req, res) => {
    const Tiposusuarios = await tiposUsuarios.findAll();
    res.json(Tiposusuarios);
};

exports.getById = async (req, res) => {
    const idDoParamTipUrs = req.params.id;
    const turmaEncontrada = await  tiposUsuarios.findOne({ where: {idTipos_Usuarios: idDoParamTipUrs}});
    res.json(turmaEncontrada)
};

exports.createTypeUser = async (req, res) => {
    const tiposUsuarioCriado = await tiposUsuarios.create(req.body);
    console.log("Tipo de usuario crado", tiposUsuarios);
    return res.send("Deu certo")
};