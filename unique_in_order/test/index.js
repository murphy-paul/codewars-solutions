const expect = require('chai').expect;
const uniqueInOrder = require('../index');

describe('Unique in order', function() {
  describe('when input is a string', function() {
    it('should return empty array', function() {
      expect(uniqueInOrder("")).to.deep.equal([]);
      expect(uniqueInOrder()).to.deep.equal([]);
    });
    it('should maintain order of unique string', function() {
      expect(uniqueInOrder("abcba")).to.deep.equal(['a','b','c','b','a']);
      expect(uniqueInOrder("ABCBA")).to.deep.equal(['A','B','C','B','A']);
      expect(uniqueInOrder("12321")).to.deep.equal(['1', '2', '3', '2', '1']);
    });
    it('should maintain order of and remove duplicates', function() {
      expect(uniqueInOrder("abba")).to.deep.equal(['a','b','a']);
      expect(uniqueInOrder("ABBA")).to.deep.equal(['A','B','A']);
      expect(uniqueInOrder("1221")).to.deep.equal(['1', '2', '1']);
    });
    it('should remove duplicates', function() {
      expect(uniqueInOrder("aaaaaaaaa")).to.deep.equal(['a']);
      expect(uniqueInOrder("AAAAAAAAAAA")).to.deep.equal(['A']);
      expect(uniqueInOrder("111111111")).to.deep.equal(['1']);
    });
    it('should be case sensitive', function() {
      expect(uniqueInOrder("aAaAa")).to.deep.equal(['a', 'A', 'a', 'A', 'a']);
      expect(uniqueInOrder('ABBCcAD')).to.deep.equal(['A', 'B', 'C', 'c', 'A', 'D']);
    });
  });
  describe('when input is an array', function() {
    it('should return empty array', function() {
      expect(uniqueInOrder([])).to.deep.equal([]);
      expect(uniqueInOrder()).to.deep.equal([]);
    });
    it('should maintain order of unique string', function() {
      expect(uniqueInOrder(['a','b','c','b','a'])).to.deep.equal(['a','b','c','b','a']);
      expect(uniqueInOrder(['A','B','C','B','A'])).to.deep.equal(['A','B','C','B','A']);
      expect(uniqueInOrder(['1', '2', '3', '2', '1'])).to.deep.equal(['1', '2', '3', '2', '1']);
    });
    it('should maintain order of and remove duplicates', function() {
      expect(uniqueInOrder(['a','b', 'b', 'a'])).to.deep.equal(['a','b','a']);
      expect(uniqueInOrder(['A', 'B', 'B', 'A'])).to.deep.equal(['A','B','A']);
      expect(uniqueInOrder(['1', '2', '2', '1'])).to.deep.equal(['1', '2', '1']);
    });
    it('should remove duplicates', function() {
      expect(uniqueInOrder(['a','a','a','a','a','a','a','a','a'])).to.deep.equal(['a']);
      expect(uniqueInOrder(['A','A','A','A','A','A','A','A','A','A','A'])).to.deep.equal(['A']);
      expect(uniqueInOrder(['1','1','1','1','1','1','1','1','1'])).to.deep.equal(['1']);
    });
    it('should be case sensitive', function() {
      expect(uniqueInOrder(['a','A','a','A','a'])).to.deep.equal(['a', 'A', 'a', 'A', 'a']);
    });
  });
});
