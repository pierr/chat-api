  const faker = require('Faker');
function _createFakeUser(id){
  return {
    id: `${id}`,
    name: faker.Name.findName(),
    nickName: faker.Internet.userName(),
    email: faker.Internet.email()
  }
}

// populate user table given a number of them
function _populateUser( userSchema /*:Schema*/, nb = 10 /*:number*/){
  return Array.from(Array(nb).keys())
              .forEach(id => userSchema.create(_createFakeUser(id)));
}

//Populate the whole table
module.exports  =  function populate(schema){
  return schema.User.sync({force: true})
      .then(() => _populateUser(schema.User))
}
