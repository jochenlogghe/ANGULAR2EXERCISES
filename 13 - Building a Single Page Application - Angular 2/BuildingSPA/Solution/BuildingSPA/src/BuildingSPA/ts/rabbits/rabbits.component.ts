import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CreateComponent} from './create.component';
import {OverviewComponent} from './overview.component';
import {RabbitService} from './rabbits.service';


@RouteConfig([
    { path: '/', name: 'Overview', component: OverviewComponent, useAsDefault: true  },
    { path: '/add', name: 'Create', component: CreateComponent },
])
@Component({
        template: '<router-outlet></router-outlet>',
        directives: [ROUTER_DIRECTIVES],
        providers: [RabbitService]
})
export class RabbitsComponent { }