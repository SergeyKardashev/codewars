const { min1: min, max1: max } = require('./script');

describe('Functions min and max should return min and max values', () => {
    test('case #1', () => {
        expect(min([4,6,2,1,9,63,-134,566])).toBe(-134);
        expect(max([4,6,2,1,9,63,-134,566])).toBe(566);
    });

    test('case #2', () => {
        expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
        expect(max([-52, 56, 30, 29, -54, 0, -110])).toBe(56);
    });

    test('case #2', () => {
        expect(min([42, 54, 65, 87, 0])).toBe(0);
        expect(max([42, 54, 65, 87, 0])).toBe(87);
    });

    test('case #2', () => {
        expect(min([5])).toBe(5);
        expect(max([5])).toBe(5);
    });
});
