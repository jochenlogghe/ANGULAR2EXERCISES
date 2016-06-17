import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RabbitsComponent} from './rabbits/rabbits.component';
import {ContactComponent} from './contact.component';
import {IndexComponent} from './index.component';

@Component({
    selector: 'rabbit-rescue',
    templateUrl: '/partials/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/rabbits/...', name: 'Rabbits', component: RabbitsComponent},
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true },
])
export class AppComponent { }