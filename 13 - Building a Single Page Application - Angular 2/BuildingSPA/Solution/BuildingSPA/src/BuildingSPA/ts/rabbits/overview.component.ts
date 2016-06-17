import {Component} from 'angular2/core';
import {RabbitService} from './rabbits.service';



@Component({
    templateUrl: '/partials/overview.component.html'
})
export class OverviewComponent {
    rabbitService: RabbitService;

    constructor(rabbitService: RabbitService) {
        this.rabbitService = rabbitService;
    }

    getRabbits() {
        return this.rabbitService.getRabbits();
    }

    setClasses(gender: string) {
        let color: string = 'pink';

        if (gender === 'M') {
            color = 'indigo'
        }
        return "card-content "+color+" white-text";
    }
}