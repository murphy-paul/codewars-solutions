const expect = require('chai').expect;
const number = require('../index');

describe('test', function() {
  it('Empty array should return empty array', function() {
    expect(number([])).to.eql([]);
  });
  it('Return the correct line numbers', function() {
    expect(number(["a", "b", "c"])).to.eql(["1: a", "2: b", "3: c"]);
  });
});
