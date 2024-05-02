//Models/usuario.js

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const tiposUsuarios = sequelize.define('tipos_usuarios', {
    //Define as informações da tabela colunas

    idTipos_Usuarios:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: Sequelize.STRING,
},
{
    //Precisa disso pq não tem as colunas createdAt e updatedAt automaticamente
    timestamps: false
});

module.exports = tiposUsuarios;