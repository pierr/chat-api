const db = require('../db');
const createSchema = require('../schema');
const populate = require('../populate');
let schema;
describe('The database', () => {
  before(cb => {
     db.authenticate()
        .then(() => createSchema(db))
        .then(s => (schema = s))
        .then(s => populate(schema))
        .then(() => cb())
  });
  describe('The user schema', () => {
    it('should send a user when findOne is called', cb => {
      schema.User.findOne().then(u => {
        expect(u.get('name')).to.be.a.string;
        expect(u.get('nickName')).to.be.a.string;
        expect(u.get('email')).to.be.a.string;
        cb();
      })
    })
  })

})
