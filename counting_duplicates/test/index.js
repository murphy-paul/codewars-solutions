const expect = require('chai').expect;
const duplicateCount = require('../index');

describe('test', function() {
  it('no duplicates', function() {
    expect(duplicateCount("abcd")).to.equal(0);
    expect(duplicateCount("abcde")).to.equal(0);
  });
  it('duplicates', function() {
    expect(duplicateCount("aabbcde")).to.be.equal(2);
    expect(duplicateCount("Indivisibility")).to.be.equal(1);
    expect(duplicateCount("Indivisibilities")).to.be.equal(2);
  });
  it('should ignore case', function() {
    expect(duplicateCount("aabBcde")).to.be.equal(2);
  });

});
