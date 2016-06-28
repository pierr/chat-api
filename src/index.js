const db = require('./db.js');
const schema = require('./schema');
const populate = require('./populate');
db.authenticate()
  .then(() => schema(db))
  .then(sch => populate(sch))
  //.then(d => console.log(d))
  .catch(err => console.log('error'))
