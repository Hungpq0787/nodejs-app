const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'quanghung1997', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;