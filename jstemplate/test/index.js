const expect = require('chai').expect;
const peter = require('../index');

describe('test', function() {
  it('should pass', function() {
    expect(peter).to.equal('the best');
  });
});
