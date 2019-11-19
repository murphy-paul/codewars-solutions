const expect = require('chai').expect;
const bmi = require('../index');

describe('test', function() {
  it('should return "Underweight"', function() {
    expect(bmi(40, 1.55)).to.equal('Underweight');
  });
  it('should return "Normal"', function() {
    expect(bmi(80, 1.80)).to.equal('Normal');
  });
  it('should return "Overweight"', function() {
    expect(bmi(90, 1.80)).to.equal('Overweight');
  });
  it('should return "Obese"', function() {
    expect(bmi(90, 1.50)).to.equal('Obese');
  });

});
