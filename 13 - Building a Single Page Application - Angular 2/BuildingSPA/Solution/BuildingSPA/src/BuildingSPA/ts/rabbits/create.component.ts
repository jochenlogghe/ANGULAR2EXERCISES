import {Component, OnInit} from 'angular2/core';
import {Rabbit} from './Rabbit';
import {RabbitService} from './rabbits.service';
import {Router} from 'angular2/router';

@Component({
    templateUrl: '/partials/create.component.html',
})
export class CreateComponent implements OnInit {
    rabbit: Rabbit;
    rabbitService: RabbitService;
    router: Router;

    constructor(rabbitService: RabbitService, router: Router) {
        this.rabbitService = rabbitService;
        this.router = router;
    }

    ngOnInit() {
        this.rabbit = new Rabbit("", 0, "F", false, false, 0);
    }


    changeGender(gender: string) {
        this.rabbit.gender = gender;
    }

    save() {
        console.log(this.rabbit);
        this.rabbitService.addRabbit(this.rabbit);
        this.router.navigate(['Overview']);
    }

}