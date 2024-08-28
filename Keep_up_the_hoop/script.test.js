// Keep_up_the_hoop

const hoopCount = require('./script.js');

test('function hoopCount should return correct string', () => {
    expect(hoopCount(5)).toBe("Keep at it until you get it");
    expect(hoopCount(10)).toBe('Great, now move on to tricks');
});