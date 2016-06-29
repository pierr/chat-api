// Register all the routes for the user /user
module.exports = function registerUserRoutes(app /* :ExpessApp*/ , User /* :UserSchema*/){
  // GET user by ID route
  // This coud be more splited in a file but this is useless for now.
  app.get('/users/:id', (req, res) => {
    User.findById(req.params.id).then(user => {
      if (!user) {
          res.status(404);
          res.json({error: 'No user found'});
      } else {
        res.json(user)
      };
    });
  });
}
