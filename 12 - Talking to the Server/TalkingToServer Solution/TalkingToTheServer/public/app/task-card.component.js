System.register(['angular2/core', './task', './task.service'], function(exports_1, context_1) {
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
    var core_1, task_1, task_service_1;
    var TaskCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            TaskCardComponent = (function () {
                function TaskCardComponent(_taskService) {
                    var _this = this;
                    this._taskService = _taskService;
                    this.onClicked = new core_1.EventEmitter();
                    this.setCompleted = function (task, event) {
                        task.completed = true;
                        _this._taskService.updateTask(task)
                            .subscribe(function (t) { });
                        event.stopPropagation();
                    };
                    this.cancelTask = function (task, event) {
                        _this._taskService.removeTask(task)
                            .subscribe(function (t) { });
                        event.stopPropagation();
                    };
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', task_1.Task)
                ], TaskCardComponent.prototype, "task", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TaskCardComponent.prototype, "onClicked", void 0);
                TaskCardComponent = __decorate([
                    core_1.Component({
                        selector: 'task-card',
                        template: "\n  <div class=\"w3-card-4 w3-margin-16 w3-padding-bottom u2u-hand\"\n       [class.w3-light-blue]=\"task.priority === 0\"\n       [class.w3-dark-grey]=\"task.priority === 1\"\n       [class.w3-pink]=\"task.priority === 2\"\n       (click)=\"onClicked.emit(task)\">\n\n      <i *ngIf=\"task.completed\" class=\"material-icons w3-right\" >done</i>\n\n    <div class=\"w3-container w3-center w3-padding\">\n      <h3>{{task.description}}</h3>\n    \n      <button class=\"w3-btn w3-green\" (click)=\"setCompleted(task, $event)\">Completed</button>\n      <button class=\"w3-btn w3-red\" (click)=\"cancelTask(task, $event)\">Cancel</button>\n    </div>\n\n  </div>\n",
                        styles: [".u2u-hand {cursor: pointer;}"]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], TaskCardComponent);
                return TaskCardComponent;
            }());
            exports_1("TaskCardComponent", TaskCardComponent);
        }
    }
});
//# sourceMappingURL=task-card.component.js.map