// Register all the routes for the room /user
module.exports = function registerRoomRoutes(app /* :ExpessApp*/ , Room /* :RoomSchema*/){
  // GET all the rooms
  app.get('/rooms', (req, res) => {
    Room.findAll().then(rooms => {
      if (!rooms) {
          res.status(404);
          res.json({error: 'No room found'});
      } else {
        res.json(rooms)
      };
    });
  });
  // GET room by ID route
  // This coud be more splited in a file but this is useless for now.
  app.get('/rooms/:id', (req, res) => {
    Room.findById(req.params.id).then(room => {
      if (!room) {
          res.status(404);
          res.json({error: 'No room found'});
      } else {
        res.json(room)
      };
    });
  });
}
