let animals = [];

//it runs only once
beforeAll(function () {
    animals = ['tiger', 'monkey', 'cat', 'elephant'];
});

beforeEach(function () {
    animals = ['tiger', 'monkey', 'cat', 'elephant'];
});

afterEach(function () {
    animals = ['tiger', 'monkey', 'cat', 'elephant'];
});

describe('animals array', () => {
    it('should add animal to the end of array', () => {
        animals.push('zebra');
        expect(animals[animals.length - 1]).toBe('zebra');
    });
    it('should add animal to the beginning of array', () => {
        animals.unshift('snake');
        expect(animals[0]).toBe('snake');
    });
    it('check length of array', () => {
        expect(animals.length).toBe(4);
    });
});
