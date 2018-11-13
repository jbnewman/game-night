const app = require('../../src/app');

describe('\'games\' service', () => {
  it('registered the service', () => {
    const service = app.service('game');
    expect(service).toBeTruthy();
  });
});
