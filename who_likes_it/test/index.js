const expect = require('chai').expect;
const likes = require('../index');

describe('who likes it', function() {
  it('should return correct text', function() {
    expect(likes([])).to.equal('no one likes this');

    expect(likes(['Peter'])).to.equal('Peter likes this');
    // expect(likes(['Peter'])).to.deep.equal(['Peter']);

    expect(likes(['Jacob', 'Alex'])).to.equal('Jacob and Alex like this');
    // expect(likes(['Jacob', 'Alex'])).to.deep.equal(['Jacob', 'Alex']);

    expect(likes(['Max', 'John', 'Mark'])).to.equal('Max, John and Mark like this');
    // expect(likes(['Max', 'John', 'Mark'])).to.deep.equal(['Max', 'John', 'Mark']);

    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).to.equal('Alex, Jacob and 2 others like this');
    // expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).to.deep.equal(['Alex', 'Jacob', '2 others']);

    // expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Tom', 'Mike'])).to.deep.equal(['Alex', 'Jacob', '4 others']);
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Tom', 'Mike'])).to.equal('Alex, Jacob and 4 others like this');
  });
});
