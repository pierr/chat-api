const initDB = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const registerUserRoutes = require('./routes/user');
const registerRoomRoutes = require('./routes/room');
const app = express();
const port = 3000;
// Express middleware to be able to parse json inside requests.
app.use(bodyParser.json());

// init the database before registering the routes to have a schema object
initDB().then(schema => {

  // register all the routes for the user
  registerUserRoutes(app, schema.User);
  // register all the routes form the room
  registerRoomRoutes(app, schema.Room);
  // start the app
  app.listen(port, () =>  console.log(`
      Application start on localhost:${port}
      Available routes
      GET /users/:id
      GET /rooms
      GET /rooms/:id
    `));
});
