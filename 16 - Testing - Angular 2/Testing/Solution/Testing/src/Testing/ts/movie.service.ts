import {Movie} from './movie';
import {Injectable} from 'angular2/core';

@Injectable()
export class MovieService {
    movies: Movie[];

    constructor() {
        this.movies = [];
    }

    addMovie(title: string) {
        if (!title || title.trim() === '') {
            throw new Error('Title should be not null and non-whitespace');
        }
        this.movies.push(new Movie(title, -1, 0));
    }

    removeMovie(title: string) {
        let removeIndex = this.movies.findIndex((movie) => { return movie.title === title; });
        if (removeIndex!== 0 && !removeIndex) {
            throw new Error('Title "'+ title +'" is not in the movies list');
        }

        this.movies = this.movies.slice(0, removeIndex - 1).concat(this.movies.slice(removeIndex + 1));
    }

    addRating(title: string, rating: number) : number {
        let movie = this.movies.find((movie) => { return movie.title === title; });
        let tempRating = movie.rating * movie.numberOfVotes;
        tempRating += rating;
        movie.rating = tempRating / (++movie.numberOfVotes);
        return movie.rating;
    }
}