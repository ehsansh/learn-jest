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
});
