  const faker = require('Faker');
function _createFakeUser(id){
  return {
    id: `${id}`,
    name: faker.Name.findName(),
    nickName: faker.Internet.userName(),
    email: faker.Internet.email()
  }
}

function _createFakeRoom(id){
  return {
    id: `${id}`,
    name: faker.Name.findName()
  }
}

// populate user table given a number of them
function _populateUser( userSchema /*:Schema*/, nb = 10 /*:number*/){
  return Array.from(Array(nb).keys())
              .forEach(id => userSchema.create(_createFakeUser(id)));
}
function _populateRoom(roomSchema, nb = 3){
  return Array.from(Array(nb).keys())
              .forEach(id =>roomSchema.create(_createFakeRoom(id)));
}

//Populate the whole table
module.exports  =  function populate(schema){
  return schema.User.sync({force: true})
      .then(() => schema.Room.sync({force: true}))
      .then(() => _populateUser(schema.User))
      .then(() => _populateRoom(schema.Room))
}
