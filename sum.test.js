const sum = require('./sum.js');

it('should add 2 to 3 to equal 5', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
});
