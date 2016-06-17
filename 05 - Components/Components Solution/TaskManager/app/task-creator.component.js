System.register(['angular2/core', './priority'], function(exports_1, context_1) {
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
    var core_1, priority_1;
    var TaskCreatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (priority_1_1) {
                priority_1 = priority_1_1;
            }],
        execute: function() {
            TaskCreatorComponent = (function () {
                function TaskCreatorComponent() {
                    this.onCreated = new core_1.EventEmitter();
                    this.priorities = [priority_1.Priority.Low, priority_1.Priority.Normal, priority_1.Priority.High];
                    this.resestTask();
                }
                TaskCreatorComponent.prototype.addTask = function (task, event) {
                    this.onCreated.emit(task);
                    this.resestTask();
                    event.preventDefault();
                };
                TaskCreatorComponent.prototype.resestTask = function () {
                    this.newTask = { id: 0, description: '', completed: false, priority: priority_1.Priority.Normal };
                };
                TaskCreatorComponent.prototype.getNameForPriority = function (priority) {
                    return priority_1.Priority[priority];
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TaskCreatorComponent.prototype, "onCreated", void 0);
                TaskCreatorComponent = __decorate([
                    core_1.Component({
                        selector: 'task-creator',
                        template: "\n<div class=\"w3-container w3-margin-16 w3-border\">\n\n  <p>\n    <label>Description</label>\n    <input [(ngModel)]=\"newTask.description\" class=\"w3-input\" type=\"text\"/>\n  </p>\n\n  <p>\n    <label>Priority</label>\n    <select [(ngModel)]=\"newTask.priority\" class=\"w3-select\">\n      <option *ngFor=\"let priority of priorities\" \n              [value]=\"priority\">\n        {{getNameForPriority(priority)}}\n      </option>\n    </select>\n  </p>\n\n  <p>\n    <a href=\"\" (click)=\"addTask(newTask, $event)\" class=\"w3-right\">add new</a>\n  </p>\n\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskCreatorComponent);
                return TaskCreatorComponent;
            }());
            exports_1("TaskCreatorComponent", TaskCreatorComponent);
        }
    }
});
//# sourceMappingURL=task-creator.component.js.map