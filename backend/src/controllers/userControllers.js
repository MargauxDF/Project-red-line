const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur interne");
    });
};

module.exports = {
  browse,
};
