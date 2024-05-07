const Usuario = require('../models/usuario');
exports.getAll = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
};

exports.getById = async (req, res) => {
    const idDoParam = req.params.id;ljsfvpo8aorsgbkfjçAEFYHGUIObefiohgA78EGF
    const usuarioEncontrado = await  Usuario.findOne({idUsarios: idDoParam});
    res.json(usuarioEncontrado)
};

exports.createUsuario = async (req, res) => {
    const usuarioCadastrado = await Usuario.findOne({ where: {cpf : req.body.cpf}});
    if (usuarioCadastrado) {
        return res.send('Já existe um usuário cadastrado neste CPF.')
    }

    const usuarioCriado = await Usuario.create(req.body);
    console.log("usuarioCriado", usuarioCriado);
    return res.send("Deu certo")
};

exports.updateUsuario = async (req,res) => {
    const cpfUsuario = req.params.updateUsuario;
    try{
        const Usuariocadastrado = await Usuario.findOne({where: {codigo: cpfUsuario}});
        if(Usuariocadastrado){
            delete req.body.cpf; //medida de segurança

            const [numRowsUpdated] = await Usuarios.update(req.body, { //define um array que faz contagem de numero de linhas que vao ser atualizadas, passadas na aquisiçao do body
                where: {cpf: cpfUsuario}
            })

            if(numRowsUpdated > 0){
                const usuarioAtualizado = await Usuarios.findOne({where:{cpf:cpfUsuario}});
                return res.send({message: 'Usuario Atualizado com sucesso', usuariocomdadosnovos: usuarioAtualizado});
            } else {
                return res.send("Usuario encontrado, mas sem novos dados para atualizar");
            }
        } else{
        return res.status(404).send("Não existe um usuario cadastrado com este codigo");
        }


    }catch (error) {
        console.error("Erro ao atualizar usuario", error);
        return res.status(500).send("Decorreu um erro ao atualizar o usuario");
    }
};