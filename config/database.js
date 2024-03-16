const Sequelize = require('sequelize');
module.exports = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Change to your database type
});
