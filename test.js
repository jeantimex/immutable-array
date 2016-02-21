import 'babel-polyfill';
import assert from 'assert';
import { impush } from './lib/immutable-array';

/**
 * Tests
 */

describe('immutable array', () => {
    it('should create a new array with new data pushed to the original array', () => {
        const arr = [];
        const actual = impush(arr, 0);
        assert.deepEqual(actual, [0]);
    });
});