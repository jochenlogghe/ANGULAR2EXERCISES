import {Rabbit} from './rabbit';
import {Injectable} from 'angular2/core';

@Injectable()
export class RabbitService {
    rabbits: Rabbit[];

    constructor() {
        this.rabbits = [new Rabbit('George', 2, 'M', true, true, 50), new Rabbit('Gretel', 0.5, 'F', true, true, 30)];
    }

    public getRabbits() {
        return this.rabbits;
    }

    public addRabbit(rabbit: Rabbit) {
        this.rabbits.push(rabbit);
    }

}