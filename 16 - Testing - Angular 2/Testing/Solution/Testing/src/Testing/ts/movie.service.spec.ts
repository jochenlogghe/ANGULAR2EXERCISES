import {MovieService} from './movie.service';
import {Movie} from './movie';


describe('adding movies', () => {
    it('should add a movie to the array', () => {
        var movieService = new MovieService();
        var movieTitle = 'Hellboy';

        movieService.addMovie(movieTitle);

        expect(movieService.movies.length).toBe(1);
        expect(movieService.movies[0]).toEqual( new Movie(movieTitle, -1,  0 ));
    });

    it('should throw an error', () => {
        var movieService = new MovieService();
        var movieTitle = '      ';

        var f = movieService.addMovie;
        try {
            f(movieTitle);
        }
        catch (e) { }

        expect(f).toThrow();
        expect(movieService.movies.length).toBe(0);
    });

    it('should remove a movie', () => {
        var movieService = new MovieService();
        let m = new Movie('The Matrix', 5, 10);
        movieService.movies.push(m);
        expect(movieService.movies.length).toBe(1);

        movieService.removeMovie(m.title);

        expect(movieService.movies.length).toBe(0);
    });

    it('should add a rating to the movie', () => {
        var movieService = new MovieService();
        let m = new Movie('The Matrix', 5, 10);
        movieService.movies.push(m);

        expect(movieService.movies.length).toBe(1);

        var newRating = movieService.addRating(m.title, 0);

        expect(newRating).toBeCloseTo(4.55, 2);
        expect(movieService.movies[0].rating).toBeCloseTo(4.55, 2);
    });
});
