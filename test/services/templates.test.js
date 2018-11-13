const app = require('../../src/app');

describe('\'templates\' service', () => {
  it('registered the service', () => {
    const service = app.service('template');
    expect(service).toBeTruthy();
  });
});
