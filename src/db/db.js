'use strict';
const Sequelize = require('sequelize');
const {join} = require('path');
const sequelizeInstance = new Sequelize('chatX', null, null, {
        dialect: 'sqlite',
        storage: process.env.DB_ENV !== 'test' ? join(__dirname, './db.sqlite') : ':memory:',
        port: 3306,
        logging: false
});

module.exports = sequelizeInstance;
