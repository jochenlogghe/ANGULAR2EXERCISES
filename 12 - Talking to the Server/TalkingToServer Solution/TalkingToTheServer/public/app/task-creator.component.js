System.register(['angular2/core', './task', './priority', './task.service'], function(exports_1, context_1) {
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
    var core_1, task_1, priority_1, task_service_1;
    var TaskCreatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (priority_1_1) {
                priority_1 = priority_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            TaskCreatorComponent = (function () {
                function TaskCreatorComponent(_taskService) {
                    this._taskService = _taskService;
                    this.priorities = priority_1.PRIORITIES;
                    this.resetTask();
                }
                TaskCreatorComponent.prototype.addTask = function (task, event) {
                    var _this = this;
                    this._taskService.addTask(task)
                        .subscribe(function (t) { _this.resetTask(); });
                    event.preventDefault();
                };
                TaskCreatorComponent.prototype.resetTask = function () {
                    this.newTask = new task_1.Task();
                };
                TaskCreatorComponent.prototype.getNameForPriority = function (priority) {
                    return priority_1.Priority[priority];
                };
                TaskCreatorComponent = __decorate([
                    core_1.Component({
                        selector: 'task-creator',
                        template: "\n<div class=\"w3-container w3-margin-16 w3-border\">\n\n  <p>\n    <label>Description</label>\n    <input [(ngModel)]=\"newTask.description\" class=\"w3-input\" type=\"text\"/>\n  </p>\n\n  <p>\n    <label>Priority</label>\n    <select [(ngModel)]=\"newTask.priority\" class=\"w3-select\">\n      <option *ngFor=\"let priority of priorities\" \n              [value]=\"priority\">\n        {{getNameForPriority(priority)}}\n      </option>\n    </select>\n  </p>\n\n  <p>\n    <a href=\"\" (click)=\"addTask(newTask, $event)\" class=\"w3-right\">add new</a>\n  </p>\n\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], TaskCreatorComponent);
                return TaskCreatorComponent;
            }());
            exports_1("TaskCreatorComponent", TaskCreatorComponent);
        }
    }
});
//# sourceMappingURL=task-creator.component.js.map