  const faker = require('Faker');
console.log(Object.keys(faker))
function _createFakeUser(){
  return {
    name: faker.Name.findName(),
    nickName: faker.Internet.userName(),
    email: faker.Internet.email()
  }
}

// populate user table given a number of them
function _populateUser( userSchema /*:Schema*/, nb = 10 /*:number*/){
  return Array.from(Array(nb).keys())
              .forEach(() => userSchema.create(_createFakeUser()));
}

//Populate the whole table
module.exports  =  function populate(schema){
  return schema.User.sync({force: true})
      .then(() => _populateUser(schema.User))
}
