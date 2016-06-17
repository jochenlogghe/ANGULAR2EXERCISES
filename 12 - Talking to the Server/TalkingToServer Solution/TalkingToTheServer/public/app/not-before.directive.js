System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var NotBeforeDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NotBeforeDirective = (function () {
                function NotBeforeDirective() {
                }
                NotBeforeDirective.prototype.validate = function (control) {
                    this.control = control;
                    var currentDate = new Date(control.value);
                    if (currentDate < this.notBeforeDate) {
                        return { notBefore: true };
                    }
                    return null;
                };
                NotBeforeDirective.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    setTimeout(function () {
                        _this.control && _this.control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    });
                };
                __decorate([
                    core_1.Input('not-before'), 
                    __metadata('design:type', Date)
                ], NotBeforeDirective.prototype, "notBeforeDate", void 0);
                NotBeforeDirective = __decorate([
                    core_1.Directive({
                        selector: '[not-before]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useExisting: NotBeforeDirective, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NotBeforeDirective);
                return NotBeforeDirective;
            }());
            exports_1("NotBeforeDirective", NotBeforeDirective);
        }
    }
});
//# sourceMappingURL=not-before.directive.js.map