//Arquivo de configuração BD

module.exports = {
    development: {
        username: process.env.DB_USER || 'root', 
        //username: 'root';
    
        password: 'root',
        database: 'carometro',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false
    },
};
