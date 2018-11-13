const users = require('./users/users.service.js');

const games = require('./games/games.service.js');

const templates = require('./templates/templates.service.js');

const history = require('./history/history.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);

  app.configure(games);
  app.configure(templates);
  app.configure(history);
};
