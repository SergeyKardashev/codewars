const { min1, max1 } = require('./script');

describe('Functions min and max should return min and max values', () => {
    test('case #1', () => {
        expect(min1([4,6,2,1,9,63,-134,566])).toBe(-134);
        expect(max1([4,6,2,1,9,63,-134,566])).toBe(566);
    });

    test('case #2', () => {
        expect(min1([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
        expect(max1([-52, 56, 30, 29, -54, 0, -110])).toBe(56);
    });
});

// Examples(Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]   