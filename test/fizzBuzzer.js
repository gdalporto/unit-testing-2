// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('determine if a number is divisible by 15, 5 or 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 15, expected: "fizz-buzz"},
      {a: 30, expected: "fizz-buzz"},
      {a: 5, expected: "buzz"},
      {a: 10, expected: "buzz"},
      {a: 3, expected: "fizz"},
      {a: 6, expected: "fizz"},
      {a: 9, expected: "fizz"},
      {a: -3, expected: "fizz"},
      {a: 2, expected: 2},
    ];
    // for each set of inputs (a), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg not number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});