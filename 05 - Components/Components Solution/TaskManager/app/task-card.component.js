System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TaskCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TaskCardComponent = (function () {
                function TaskCardComponent() {
                    var _this = this;
                    this.onCompleted = new core_1.EventEmitter();
                    this.onCancelled = new core_1.EventEmitter();
                    this.setCompleted = function (task) {
                        task.completed = true;
                        _this.onCompleted.emit(task);
                    };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TaskCardComponent.prototype, "task", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TaskCardComponent.prototype, "onCompleted", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TaskCardComponent.prototype, "onCancelled", void 0);
                TaskCardComponent = __decorate([
                    core_1.Component({
                        selector: 'task-card',
                        template: "\n<div class=\"w3-card-4 w3-margin-16 w3-padding-bottom\"\n     [class.w3-light-blue]=\"task.priority === 0\"\n     [class.w3-dark-grey]=\"task.priority === 1\"\n     [class.w3-pink]=\"task.priority === 2\">\n\n    <i *ngIf=\"task.completed\" class=\"material-icons w3-right\" >done</i>\n\n  <div class=\"w3-container w3-center w3-padding\">\n    <h3>{{task.description}}</h3>\n    \n    <button class=\"w3-btn w3-green\" (click)=\"setCompleted(task)\">Completed</button>\n    <button class=\"w3-btn w3-red\" (click)=\"onCancelled.emit(task)\">Cancel</button>\n  </div>\n\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskCardComponent);
                return TaskCardComponent;
            }());
            exports_1("TaskCardComponent", TaskCardComponent);
        }
    }
});
//# sourceMappingURL=task-card.component.js.map