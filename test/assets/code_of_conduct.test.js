const $ = require('jquery');

test('test example', () => {
  const a = 3;
  const b = 4;

  const result = a * b;

  expect(result).toBe(12);
});