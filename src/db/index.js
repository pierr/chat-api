const db = require('./db.js');
const createSchema = require('./schema');
const populate = require('./populate');
// Init DB
module.exports = function initDB(){
  let schema;
  return db.authenticate()
    .then(() => createSchema(db))
    .then(sch => (schema = sch))
    .then(() => populate(schema))
    .catch(err => console.log('Error on starting and populating DB', err))
    .then(() => schema)
}
