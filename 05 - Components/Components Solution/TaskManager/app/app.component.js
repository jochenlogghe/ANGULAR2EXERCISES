System.register(['angular2/core', './priority', './task-creator.component', './task-list.component'], function(exports_1, context_1) {
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
    var core_1, priority_1, task_creator_component_1, task_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (priority_1_1) {
                priority_1 = priority_1_1;
            },
            function (task_creator_component_1_1) {
                task_creator_component_1 = task_creator_component_1_1;
            },
            function (task_list_component_1_1) {
                task_list_component_1 = task_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.tasks = [
                        { id: 1, description: 'fix heisenbug', completed: false, priority: priority_1.Priority.Normal },
                        { id: 2, description: 'set up fear-driven development', completed: false, priority: priority_1.Priority.High },
                        { id: 3, description: 'fix hindenbug', completed: false, priority: priority_1.Priority.Low }
                    ];
                };
                AppComponent.prototype.addTaskToList = function (task) {
                    this.tasks.push(task);
                };
                AppComponent.prototype.removeTaskFromList = function (task) {
                    var index = this.tasks.indexOf(task);
                    if (index > -1) {
                        this.tasks.splice(index, 1);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<header class=\"w3-container w3-teal\">\n  <h1>Task Manager</h1>\n</header>\n<div class=\"w3-row\">\n  <div class=\"w3-col m4 l3\">\n    <task-creator (onCreated)=\"addTaskToList($event)\"></task-creator>\n    <task-list [tasks]=\"tasks\" (onCancelled)=\"removeTaskFromList($event)\"></task-list>\n  </div>\n</div>\n",
                        directives: [task_creator_component_1.TaskCreatorComponent, task_list_component_1.TaskListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map