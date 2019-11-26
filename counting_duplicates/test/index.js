const expect = require('chai').expect;
const duplicateCount = require('../index');

describe('test', function() {
  it('should return 0 when string is less 1 char in length', function() {
    expect(duplicateCount('')).to.equal(0);
    expect(duplicateCount('a')).to.equal(0);
    expect(duplicateCount(' ')).to.equal(0);
  })
  it('no duplicates', function() {
    expect(duplicateCount("abcd")).to.equal(0);
    expect(duplicateCount("abcde")).to.equal(0);
  });
  it('duplicates', function() {
    expect(duplicateCount("Indivisibility")).to.be.equal(1);
    expect(duplicateCount("Indivisibilities")).to.be.equal(2);
  });
  it('should ignore case', function() {
    expect(duplicateCount("aabBcde")).to.be.equal(2);
  });

});
