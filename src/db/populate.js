  const faker = require('Faker');
console.log(Object.keys(faker))
function _createFakeUser(){
  return {
    name: faker.Name.findName(),
    nickName: faker.Internet.userName(),
    email: faker.Internet.email()
  }
}

function _populateUser( userSchema, nb = 10 ){
  return Array.from(Array(nb).keys())
              .forEach(() => userSchema.create(_createFakeUser()));
}


module.exports  =  function populate(schema){
  const {User} = schema;
  return User.sync({force: true})
      .then(() => _populateUser(User))
      // log all users
      .then(() => User.findAll())
      .then(user => user.map((u, j) => u.get('name')))
      .then(d => console.log('userName', d))
      .catch(err => console.log(err));
}
