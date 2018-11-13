const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ (context) => {context.data.createdOn = new Date()}, hashPassword() ],
    update: [],
    patch: [ (context) => {context.data.patchedOn = new Date()}, hashPassword(),  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
