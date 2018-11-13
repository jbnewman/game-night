// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

const errors = require('@feathersjs/errors');


module.exports = function (options = {}) {
  return async context => {
    if(context.id === null){
      throw new errors.GeneralError('Game ID must be set.');
    }
    //verify user owns game they are deleting.
    

    return context;
  };
};
