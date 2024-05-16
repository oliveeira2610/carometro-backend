// Importa o Sequelize, que é uma biblioteca ORM para Node.js, utilizada para interagir com bancos de dados relacionais
const Sequelize = require('sequelize');

// Importa a instância do Sequelize configurada para a aplicação a partir do arquivo '../config/sequelize.js'
const sequelize = require('../config/sequelize');

// Define o modelo 'usuario' que representa a tabela 'Usuarios' no banco de dados
const usuario = sequelize.define('Usuarios', {
    // Define as colunas da tabela 'Usuarios' com seus respectivos tipos de dados
    idUsuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Define 'idUsuarios' como a chave primária da tabela
        autoIncrement: true // Define 'idUsuarios' como uma chave autoincrementada
    },
    nome: Sequelize.STRING, // Define a coluna 'nome' como do tipo STRING
    email: Sequelize.STRING, // Define a coluna 'email' como do tipo STRING
    cpf: Sequelize.STRING, // Define a coluna 'cpf' como do tipo STRING
    senha: Sequelize.STRING, // Define a coluna 'senha' como do tipo STRING
    celular: Sequelize.STRING, // Define a coluna 'celular' como do tipo STRING
    cep: Sequelize.STRING, // Define a coluna 'cep' como do tipo STRING
    logradouro: Sequelize.STRING, // Define a coluna 'logradouro' como do tipo STRING
    bairro: Sequelize.STRING, // Define a coluna 'bairro' como do tipo STRING
    cidade: Sequelize.STRING, // Define a coluna 'cidade' como do tipo STRING
    estado: Sequelize.STRING, // Define a coluna 'estado' como do tipo STRING
    foto: Sequelize.STRING, // Define a coluna 'foto' como do tipo STRING
    Tipos_Usuarios_idTipos_Usuarios: Sequelize.NUMBER, // Define a coluna 'Tipos_Usuarios_idTipos_Usuarios' como do tipo NUMBER
}, {
    // Configurações adicionais do modelo
    timestamps: false // Desativa a criação automática das colunas 'createdAt' e 'updatedAt'
});

// Exporta o modelo 'usuario' para que possa ser utilizado em outras partes da aplicação
module.exports = usuario;
