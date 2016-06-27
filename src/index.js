const Sequelize = require('sequelize');
const db = require('./db.js');

db.define('User', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  nickame: Sequelize.STRING,
  email: Sequelize.STRING
});

db.authenticate().then(d => console.log('connection active'), err => console.log('error'))
