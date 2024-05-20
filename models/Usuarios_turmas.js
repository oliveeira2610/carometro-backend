const Sequelize = require("sequelize");
// Importa o módulo Sequelize, um ORM (Object-Relational Mapper) para Node.js que facilita a interação com bancos de dados SQL.

const sequelize = require("../config/sequelize");
// Importa uma instância configurada do Sequelize a partir do arquivo de configuração localizado em "../config/sequelize".
// Este arquivo deve exportar uma instância do Sequelize já configurada para se conectar ao banco de dados.

const UsuariosTurmas = sequelize.define("usuarios_turmas",  {
// Define um novo modelo (ou seja, uma tabela no banco de dados) chamado "usuarios_turmas" usando o método define do Sequelize.
// O primeiro argumento é o nome da tabela e o segundo é um objeto que descreve as colunas da tabela.

    Turmas_idTurmas: {
      type: Sequelize.INTEGER,
      primaryKey: false,
    },
    // Define uma coluna chamada "Turmas_idTurmas" do tipo INTEGER. Esta coluna não é uma chave primária (primaryKey: false).

    Usuarios_idUsuarios: {
      type: Sequelize.INTEGER,
      primaryKey: false,
    },
    // Define uma coluna chamada "Usuarios_idUsuarios" do tipo INTEGER. Esta coluna também não é uma chave primária (primaryKey: false).
  },

  {
    timestamps: false,
  });
// O segundo argumento para sequelize.define é um objeto de opções.
// Aqui estamos especificando que não queremos que o Sequelize adicione automaticamente colunas "createdAt" e "updatedAt" (timestamps: false).

UsuariosTurmas.removeAttribute("id");
// Remove qualquer atributo "id" que o Sequelize possa ter adicionado automaticamente ao modelo.
// Isso é necessário porque esta tabela não deve ter uma coluna "id" como chave primária.

module.exports = UsuariosTurmas;
// Exporta o modelo "UsuariosTurmas" para que ele possa ser usado em outras partes da aplicação.
// Isso permite que outros módulos importem e utilizem este modelo para interagir com a tabela "usuarios_turmas".
