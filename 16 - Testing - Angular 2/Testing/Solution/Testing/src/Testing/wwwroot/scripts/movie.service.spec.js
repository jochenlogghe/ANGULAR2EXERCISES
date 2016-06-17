System.register(['./movie.service', './movie'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var movie_service_1, movie_1;
    return {
        setters:[
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            },
            function (movie_1_1) {
                movie_1 = movie_1_1;
            }],
        execute: function() {
            describe('adding movies', function () {
                it('should add a movie to the array', function () {
                    var movieService = new movie_service_1.MovieService();
                    var movieTitle = 'Hellboy';
                    movieService.addMovie(movieTitle);
                    expect(movieService.movies.length).toBe(1);
                    expect(movieService.movies[0]).toEqual(new movie_1.Movie(movieTitle, -1, 0));
                });
                it('should throw an error', function () {
                    var movieService = new movie_service_1.MovieService();
                    var movieTitle = '      ';
                    var f = movieService.addMovie;
                    try {
                        f(movieTitle);
                    }
                    catch (e) { }
                    expect(f).toThrow();
                    expect(movieService.movies.length).toBe(0);
                });
                it('should remove a movie', function () {
                    var movieService = new movie_service_1.MovieService();
                    var m = new movie_1.Movie('The Matrix', 5, 10);
                    movieService.movies.push(m);
                    expect(movieService.movies.length).toBe(1);
                    movieService.removeMovie(m.title);
                    expect(movieService.movies.length).toBe(0);
                });
                it('should add a rating to the movie', function () {
                    var movieService = new movie_service_1.MovieService();
                    var m = new movie_1.Movie('The Matrix', 5, 10);
                    movieService.movies.push(m);
                    expect(movieService.movies.length).toBe(1);
                    var newRating = movieService.addRating(m.title, 0);
                    expect(newRating).toBeCloseTo(4.55, 2);
                    expect(movieService.movies[0].rating).toBeCloseTo(4.55, 2);
                });
            });
        }
    }
});
