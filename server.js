const express = require('express');
const sequelize = require('./config/sequelize');
const router = require('./routes/router');
require('dotenv').config();

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida');

        return sequelize.query('SHOW TABLES');
    })
    .then (([result, metdata]) => {
        console.log('Tabelas no bando de dados');
        console.log(result);
    })
    .catch(err => {
        console.log('Erro ao conectar  ao banco de dados:', err);
    });

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor Express iniciado na porta ${PORT}`);
});
