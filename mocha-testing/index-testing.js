const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup 
      const expected = 'cock-a-doodle-do'
      // Excercise
      const result = Rooster.announceDawn();
      // Verify
      assert.strictEqual(result, expected);
    })
  })

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Setup 
      const hour = 5;
      // Exercise
      const result = Rooster.timeAtDawn(hour);
      // Verify
      assert.strictEqual(typeof result , 'string');
    });

    it('throw an error if passed a number less than 0', () => {
      // Setup 
      const hour = -1 ;
      // Exercise
      // Verify
      assert.throws(() => {Rooster.timeAtDawn(hour);} , RangeError);
    });

    it('throws error if passed a number greater than 23', () =>{
      // Setup 
      const hour = 25 ;
      // Verify
      assert.throws(() => {Rooster.timeAtDawn(hour);}, RangeError);
    });
  });
});