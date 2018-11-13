// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

const errors = require('@feathersjs/errors');

const GAMEID_LENGTH = 6;

async function is_unique(gameId, context){
  return await context.service.find({ query: { id: gameId, $limit: 1 } }).then(page => (page.total == 0));
}

async function generate_game_id(context, i = 0){
  if(i>40){
    throw new errors.GeneralError('Game ID generation time exceeded.');
  }
  let gameId = Math.random().toString(36).slice(2).substr(0,GAMEID_LENGTH);
  return (await is_unique(gameId, context)) ? gameId : await generate_game_id(context, i+1);
}


module.exports = function (options = {}) {
  return async context => {
    
    let data = context.data;

    data.id = await generate_game_id(context);
    data.name = data.name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
    data.createdBy = context.params.user._id;
    data.createdOn = new Date();
    data.players = [{"id":context.params.user._id}];

    context.data = data;

    return context;
  };
};
