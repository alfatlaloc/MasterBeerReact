var Usuario = require('../Model/appModel');

exports.readUser = function(req, res) {
    Usuario.getUserById(req.params.UserId, function(err, UserID) {
      if (err)
        res.send(err);
      res.json(UserID);
    });
  };