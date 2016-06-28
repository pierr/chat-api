const db = require('./db.js');
const schema = require('./schema');
const populate = require('./populate');
// Init DB
module.exports = function initDB(){
  db.authenticate()
    .then(() => schema(db))
    .then(sch => populate(sch))
    .catch(err => console.log('error'))
}
