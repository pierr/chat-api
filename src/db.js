'use strict';
const Sequelize = require('sequelize');
const {join} = require('path');
const sequelizeInstance = new Sequelize('chatX', null, null, {
        dialect: 'sqlite',
        storage: join(__dirname, './db.sqlite'),
        port: 3306,
        logging: true
});

module.exports = sequelizeInstance;
