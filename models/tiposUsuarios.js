//Models/usuario.js

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const tiposUsuarios = sequelize.define('tiposUsuarios', {
    //Define as informações da tabela colunas

    idTiposUsuarios:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    idTipos_Usuarios: Sequelize.NUMBER,
    descricao: Sequelize.STRING,
},
{
    //Precisa disso pq não tem as colunas createdAt e updatedAt automaticamente
    timestamps: false
});

module.exports = tiposUsuarios;