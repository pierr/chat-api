//const db = require('../db');
//const createSchema = require('../schema');
//const populate = require('../populate');
const initDB =  require('../index');
let schema;
describe('The database', () => {
  before(cb =>  initDB().then(s => (schema = s)).then(() => cb()));
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
