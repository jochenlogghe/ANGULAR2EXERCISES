System.register(['angular2/core', 'angular2/router', './create.component', './overview.component', './rabbits.service'], function(exports_1, context_1) {
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
    var core_1, router_1, create_component_1, overview_component_1, rabbits_service_1;
    var RabbitsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (overview_component_1_1) {
                overview_component_1 = overview_component_1_1;
            },
            function (rabbits_service_1_1) {
                rabbits_service_1 = rabbits_service_1_1;
            }],
        execute: function() {
            RabbitsComponent = (function () {
                function RabbitsComponent() {
                }
                RabbitsComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Overview', component: overview_component_1.OverviewComponent, useAsDefault: true },
                        { path: '/add', name: 'Create', component: create_component_1.CreateComponent },
                    ]),
                    core_1.Component({
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [rabbits_service_1.RabbitService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RabbitsComponent);
                return RabbitsComponent;
            }());
            exports_1("RabbitsComponent", RabbitsComponent);
        }
    }
});
