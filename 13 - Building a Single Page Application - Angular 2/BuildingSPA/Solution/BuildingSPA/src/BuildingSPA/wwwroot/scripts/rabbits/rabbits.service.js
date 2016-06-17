System.register(['./rabbit', 'angular2/core'], function(exports_1, context_1) {
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
    var rabbit_1, core_1;
    var RabbitService;
    return {
        setters:[
            function (rabbit_1_1) {
                rabbit_1 = rabbit_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RabbitService = (function () {
                function RabbitService() {
                    this.rabbits = [new rabbit_1.Rabbit('George', 2, 'M', true, true, 50), new rabbit_1.Rabbit('Gretel', 0.5, 'F', true, true, 30)];
                }
                RabbitService.prototype.getRabbits = function () {
                    return this.rabbits;
                };
                RabbitService.prototype.addRabbit = function (rabbit) {
                    this.rabbits.push(rabbit);
                };
                RabbitService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RabbitService);
                return RabbitService;
            }());
            exports_1("RabbitService", RabbitService);
        }
    }
});
