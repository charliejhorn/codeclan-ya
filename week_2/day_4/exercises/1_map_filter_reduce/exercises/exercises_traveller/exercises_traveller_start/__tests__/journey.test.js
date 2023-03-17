const Journey = require('../src/Journey.js');

describe('Journey', () => {
    let journey1;

    beforeEach(() => {
        journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
    });

    xit('should have a start location', () => {
        const actual = journey1.startLocation;
        expect(actual).toBe('linlithgow');
    });

    xit('should have a end location', () => {
        const actual = journey1.endLocation;
        expect(actual).toBe('stirling');
    });

    xit('should have a mode of transport', () => {
        const actual = journey1.transport;
        expect(actual).toBe('train');
    });

    xit('should have a distance', () => {
        const actual = journey1.distance;
        expect(actual).toBe(30);
    });
});