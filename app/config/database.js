const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.USER_PWD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;