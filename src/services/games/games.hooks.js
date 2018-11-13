const { authenticate } = require('@feathersjs/authentication').hooks;

const newGame = require('../../hooks/new-game');

const deleteGame = require('../../hooks/delete-game');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [newGame()],
    update: [],
    patch: [],
    remove: [deleteGame()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
