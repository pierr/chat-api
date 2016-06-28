const initDB = require('./db');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

initDB().then(schema => {
  app.get('/user/:id', (req, res) => {
    schema.User.findById(req.params.id).then(user => {
      if (!user) {
          res.status(404);
          res.json({error: 'No user found'});
      } else {
        res.json(user)
      };
    });

  });
  app.listen(3000, () =>  console.log('Start app'));
});
