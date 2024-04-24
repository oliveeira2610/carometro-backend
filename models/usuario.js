//Models/usuario.js

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const usuario = sequelize.define('Usuarios', {
    //Define as informações da tabela colunas

    idUsuarios:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    cpf: Sequelize.STRING,
    senha: Sequelize.STRING,
    celular: Sequelize.STRING,
    cep: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    bairro: Sequelize.STRING,
    cidade: Sequelize.STRING,
    estado: Sequelize.STRING,
    foto: Sequelize.STRING,
    Tipos_Usuarios_idTipos_Usuarios: Sequelize.NUMBER,
},
{
    //Precisa disso pq não tem as colunas createdAt e updatedAt automaticamente
    timestamps: false
});

module.exports = usuario;