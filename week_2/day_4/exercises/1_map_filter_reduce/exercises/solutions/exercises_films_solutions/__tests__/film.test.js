const Film = require('../src/film.js');

describe('Film', () => {
    let moonlight;

    beforeEach(() => {
        moonlight = new Film('Moonlight', 'drama', 2016, 111);
    });

    it('should have a title', () => {
        expect(moonlight.title).toBe('Moonlight');
    });

    it('should have a genre', () => {
        expect(moonlight.genre).toBe('drama');
    });

    it('should have a year', () => {
        expect(moonlight.year).toBe(2016);
    });

    it('should have a length', () => {
        expect(moonlight.length).toBe(111);
    });
});