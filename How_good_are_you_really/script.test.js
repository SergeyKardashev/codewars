const { betterThanAverage } = require('./script');

describe('Function should return true or false', () => {
    test('case #1', () => {
        expect(betterThanAverage([2, 3], 5)).toBe(true);
    });

    test('case #2', () => {
        expect(betterThanAverage([100, 90, 57, 88], 5)).toBe(false);
    });
});
