const db = require('./db.js');
const createSchema = require('./schema');
const populate = require('./populate');
// Init DB
module.exports = function initDB(){
  let schema;
  return db.authenticate()
    .then(() => createSchema(db))
    // We save the schema inside a variable to return it
    .then(sch => (schema = sch))
    // Populate the db (usefull here)
    // This could be in a separate npm task...
    .then(() => populate(schema))
    .catch(err => console.log('Error on starting and populating DB', err))
    // The promise always return the schema
    // To be able ton work with it
    .then(() => schema)
}
