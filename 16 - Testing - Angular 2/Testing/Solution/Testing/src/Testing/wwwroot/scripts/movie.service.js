System.register(['./movie', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var movie_1, core_1;
    var MovieService;
    return {
        setters:[
            function (movie_1_1) {
                movie_1 = movie_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieService = (function () {
                function MovieService() {
                    this.movies = [];
                }
                MovieService.prototype.addMovie = function (title) {
                    if (!title || title.trim() === '') {
                        throw new Error('Title should be not null and non-whitespace');
                    }
                    this.movies.push(new movie_1.Movie(title, -1, 0));
                };
                MovieService.prototype.removeMovie = function (title) {
                    var removeIndex = this.movies.findIndex(function (movie) { return movie.title === title; });
                    if (removeIndex !== 0 && !removeIndex) {
                        throw new Error('Title "' + title + '" is not in the movies list');
                    }
                    this.movies = this.movies.slice(0, removeIndex - 1).concat(this.movies.slice(removeIndex + 1));
                };
                MovieService.prototype.addRating = function (title, rating) {
                    var movie = this.movies.find(function (movie) { return movie.title === title; });
                    var tempRating = movie.rating * movie.numberOfVotes;
                    tempRating += rating;
                    movie.rating = tempRating / (++movie.numberOfVotes);
                    return movie.rating;
                };
                MovieService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MovieService);
                return MovieService;
            }());
            exports_1("MovieService", MovieService);
        }
    }
});
