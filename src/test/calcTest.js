/* eslint-disable no-undef */
// Need to test all calc operations in calc/ folder
// using mocha and chai
import assert from 'assert';
import {
  divide, plus, sub, times,
} from '../calc';

const sum = () => plus(9, 9).catch((error) => error);

const div = () => divide(9, 9).catch((error) => error);

const subtract = () => sub(9, 9).catch((error) => error);

const timess = () => times(9, 9).catch((error) => error);

describe('Testing calc operations (+,/,-,*)', () => {
  describe('#plus', () => {
    it('1 - Should return the value of  9 + 9, that is equals to 18', async () => {
      const res = sum();
      res.then((testRes) => {
        assert.equal(testRes, 18);
        // eslint-disable-next-line no-undef
        done();
      });
    });
  });

  describe('#divide', () => {
    it('2 - Should return the value of  9 / 9, that is equals to 1', async () => {
      const res = div();
      res.then((testRes) => {
        assert.equal(testRes, 1);
        done();
      });
    });
  });

  describe('#sub', () => {
    it('3 - Should return the value of  9 - 9, that is equals to 0', async () => {
      const res = subtract();
      res.then((testRes) => {
        assert.equal(testRes, 0);
        done();
      });
    });
  });

  describe('#times', () => {
    it('4 - Should return the value of  9 * 9, that is equals to 81', async () => {
      const res = timess();
      res.then((testRes) => {
        assert.equal(testRes, 81);
        done();
      });
    });
  });
});
