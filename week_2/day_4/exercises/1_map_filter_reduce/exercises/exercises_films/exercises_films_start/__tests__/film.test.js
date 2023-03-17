const Film = require('../src/Film.js');

describe('Film', () => {
    let moonlight;

    beforeEach(() => {
        moonlight = new Film('Moonlight', 'drama', 2016, 111);
    });

    it('should have a title', () => {
        expect(moonlight.title).toBe('Moonlight');
    });

    xit('should have a genre', () => {
        expect(moonlight.genre).toBe('drama');
    });

    xit('should have a year', () => {
        expect(moonlight.year).toBe(2016);
    });

    xit('should have a length', () => {
        expect(moonlight.length).toBe(111);
    });
});