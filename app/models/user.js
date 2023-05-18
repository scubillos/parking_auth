const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        length: 255
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    },
    birth_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    }
});

module.exports = User;
