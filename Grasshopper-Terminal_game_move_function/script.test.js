// Grasshopper - Terminal game move function

const move = require('./script');

test('Function move should return number according to the task', () => {
  expect(move(3, 6)).toBe(15);
});
