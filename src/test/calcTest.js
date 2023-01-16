// Need to test all calc operations in calc/ folder
// using mocha and chai
import assert from 'assert';
import { expect } from 'chai';
import { divide, plus, sub, times } from '../calc';

const sum = () => {
  return plus(9,9).catch(error => {
    return error;
  });
};

const div = () => {
  return divide(9,9).catch(error => {
    return error;
  });
};

const subtract = () => {
  return sub(9,9).catch(error => {
    return error;
  });
};

const timess = () => {
  return times(9,9).catch(error => {
    return error;
  });
};
describe('Testing calc operations (+,/,-,*)', () => {
  describe('#plus', () => {
    it('1 - Should return the value of  9 + 9, that is equals to 18', async () => {
      let res = sum();
      res.then(testRes => {
        assert.equal(testRes, 18);
        done();
      });
    });
  });

  describe('#divide', () => {
    it('2 - Should return the value of  9 / 9, that is equals to 1', async () => {
      let res = div();
      res.then(testRes => {
        assert.equal(testRes, 1);
        done();
      });
    });
  });

  describe('#sub', () => {
    it('3 - Should return the value of  9 - 9, that is equals to 0', async () => {
      let res = subtract();
      res.then(testRes => {
        assert.equal(testRes, 0);
        done();
      });
    });
  });

  describe('#times', () => {
    it('4 - Should return the value of  9 * 9, that is equals to 81', async () => {
      let res = timess();
      res.then(testRes => {
        assert.equal(testRes, 81);
        done();
      });
    });
  });
});
