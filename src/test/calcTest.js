/* eslint-disable no-undef */
// Need to test all calc operations in calc/ folder
// using mocha and chai
import assert from 'assert';
import {
  divide, plus, sub, times,
} from '../calc';

describe('Testing calc operations (+,/,-,*)', () => {
  describe('#plus', () => {
    it('1 - Should return the value of  9 + 9, that is equals to 18', (done) => {
      plus(9, 9)
        .then((res) => {
          assert.equal(res, 18);
        })
        .then(() => done(), done);
    });
  });
});

describe('#divide', () => {
  it('2 - Should return the value of  9 / 9, that is equals to 1', (done) => {
    divide(9, 9)
      .then((res) => {
        assert.equal(res, 1);
      })
      .then(() => done(), done);
  });
});

describe('#sub', () => {
  it('3 - Should return the value of  9 - 9, that is equals to 0', (done) => {
    sub(9, 9)
      .then((res) => {
        assert.equal(res, 0);
      })
      .then(() => done(), done);
  });
});

describe('#times', () => {
  it('4 - Should return the value of  9 * 9, that is equals to 81', (done) => {
    times(9, 9)
      .then((res) => {
        assert.equal(res, 81);
      })
      .then(() => done(), done);
  });
});
