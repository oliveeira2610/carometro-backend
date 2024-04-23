//Arquivo de configuração BD

module.export = {
    development: {
        username: process.env.DB_USER || 'root', 
        //username: 'root';
    
        password: 'senaisp',
        database: 'carometro',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false
    },
};
