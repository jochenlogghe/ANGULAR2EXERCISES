System.register(['angular2/core', './Rabbit', './rabbits.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, Rabbit_1, rabbits_service_1, router_1;
    var CreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rabbit_1_1) {
                Rabbit_1 = Rabbit_1_1;
            },
            function (rabbits_service_1_1) {
                rabbits_service_1 = rabbits_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CreateComponent = (function () {
                function CreateComponent(rabbitService, router) {
                    this.rabbitService = rabbitService;
                    this.router = router;
                }
                CreateComponent.prototype.ngOnInit = function () {
                    this.rabbit = new Rabbit_1.Rabbit("", 0, "F", false, false, 0);
                };
                CreateComponent.prototype.changeGender = function (gender) {
                    this.rabbit.gender = gender;
                };
                CreateComponent.prototype.save = function () {
                    console.log(this.rabbit);
                    this.rabbitService.addRabbit(this.rabbit);
                    this.router.navigate(['Overview']);
                };
                CreateComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/partials/create.component.html',
                    }), 
                    __metadata('design:paramtypes', [rabbits_service_1.RabbitService, router_1.Router])
                ], CreateComponent);
                return CreateComponent;
            }());
            exports_1("CreateComponent", CreateComponent);
        }
    }
});
