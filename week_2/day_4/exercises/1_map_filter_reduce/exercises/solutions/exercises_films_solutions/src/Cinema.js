class Cinema {
    constructor(films) {
        this.films = films;
    }

    filmTitles() {
        return this.films.map(film => film.title);
    }

    filmByTitle(title) {
        return this.films.find(film => film.title === title);
    }

    filmsByGenre(genre) {
        return this.films.filter(film => film.genre === genre);
    }

    hasFilmsFromYear(year) {
        return this.films.some(film => film.year === year);
    }

    areAllFilmsOfMinLength(length) {
        return this.films.every(film => film.length >= length);
    }

    totalRunningTime() {
        return this.films.reduce((total, film) => total += film.length, 0);
    }

    filmsByProperty(property, value) {
        return this.films.filter(film => film[property] === value);
    }
}

module.exports = Cinema;
