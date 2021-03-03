const mysql = require('mysql');// require mysql module

const db = mysql.createConnection({// declare info connect
    host: 'localhost',
    user: 'ducdat',
    password: '1999',
    database: 'dincox'
});

module.exports = db; // export connect