const app = require('../../src/app');

describe('\'game\' service', () => {
  it('registered the service', () => {
    const service = app.service('games');
    expect(service).toBeTruthy();
  });
});
