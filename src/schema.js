const Sequelize = require('sequelize');

// Creates all the app schema for a given instance.
module.exports = function createSchema(db){
  // Define the user table
  const UserSchema = db.define('User', {
    name: Sequelize.STRING,
    nickame: Sequelize.STRING,
    email: Sequelize.STRING
  });
  return {User: UserSchema};
}
