const initDB = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const registerUserRoutes = require('./routes/user');
const app = express();

// Express middleware to be able to parse json inside requests.
app.use(bodyParser.json());

// init the database before registering the routes to have a schema object
initDB().then(schema => {

  // register all the routes for the user
  registerUserRoutes(app, schema.User);

  // start the app
  app.listen(3000, () =>  console.log('Start app'));
});
