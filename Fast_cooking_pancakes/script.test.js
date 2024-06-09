const cookPancakes = require('./script');

// 3 cakes and 2 slots, result 3, 
// 4 cakes and 3 slots, result 3

describe('Function cookPancakes: ', () => {
    test('should return correct number of minutes', () => {
        expect(cookPancakes(1, 2)).toBe(2);
        expect(cookPancakes(2, 2)).toBe(2);
        expect(cookPancakes(3, 2)).toBe(3);
        expect(cookPancakes(4, 2)).toBe(4);
        expect(cookPancakes(4, 3)).toBe(3);
    });

    test('should be a function', () => {
        expect(cookPancakes).toBeInstanceOf(Function);
    })
});