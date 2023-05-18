const sequelize = require('../config/database');
const User = require('../models/user');

const sync_models = {
    // Sincroniza la base de datos
    sync: () => {
        sequelize.sync()
            .then(() => {
                console.log('Base de datos sincronizada');
            })
            .catch(err => {
                console.error('Error al sincronizar la base de datos', err);
            });
    }
}

module.exports = sync_models;