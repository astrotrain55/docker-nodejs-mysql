const mysql = require('mysql');

class DataBaseHandler {
  constructor() {
    this.connection = null;
  }

  createConnection() {
    this.connection = mysql.createConnection({
      host: process.env.DATABASE_HOST,
      database: 'CHIRINOS',
      user: 'users_service',
      password: '1123',
    });

    this.connection.connect(console.log);

    return this.connection;
  }
}

module.exports = DataBaseHandler;
