const sum = require('./sum.js');

describe('example tests', () => {
    it('should add 2 to 3 to equal 5', () => {
        const result = sum(2, 3);
        expect(result).toBe(5);
    });

    it('check object', () => {
        const obj = {};
        expect(obj).toEqual({});
    });
});

describe('truthy and falsey', () => {
    it('null', () => {
        const n = null;
        expect(n).toBeFalsy();
    });
    it('null another way', () => {
        const n = null;
        expect(n).not.toBeTruthy();
    });
    it('check to be null', () => {
        const n = null;
        expect(n).toBeNull();
    });
});

describe('numbers', () => {
    it('greater', () => {
        const val = sum(4, 5);
        expect(val).toBeGreaterThan(8);
    });
    it('greater or equal', () => {
        const val = sum(4, 5);
        expect(val).toBeGreaterThanOrEqual(9);
    });
    it('less than', () => {
        const val = sum(4, 5);
        expect(val).toBeLessThan(10);
    });
    it('less than or equal', () => {
        const val = sum(4, 5);
        expect(val).toBeLessThanOrEqual(9);
    });
});
