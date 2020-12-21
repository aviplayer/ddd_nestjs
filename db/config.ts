const config = {
    database: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'changeme',
        database: 'postgres',
    }
};

module.exports = config.database;
