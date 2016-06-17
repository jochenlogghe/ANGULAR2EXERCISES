System.register(['angular2/core', './task-card.component', './task.service'], function(exports_1, context_1) {
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
    var core_1, task_card_component_1, task_service_1;
    var TaskListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_card_component_1_1) {
                task_card_component_1 = task_card_component_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            TaskListComponent = (function () {
                function TaskListComponent(_taskService) {
                    this._taskService = _taskService;
                    this.onTaskClicked = new core_1.EventEmitter();
                }
                TaskListComponent.prototype.ngOnInit = function () {
                    this.subscription = this._taskService.dataChanged.subscribe(this.getTasks.bind(this));
                    this.getTasks();
                };
                TaskListComponent.prototype.ngOnDestroy = function () {
                    this.subscription.dispose();
                };
                TaskListComponent.prototype.getTasks = function () {
                    var _this = this;
                    this._taskService.getAllTasks()
                        .subscribe(function (tasks) { return _this.tasks = tasks; }, function (error) { return console.log(error); });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TaskListComponent.prototype, "onTaskClicked", void 0);
                TaskListComponent = __decorate([
                    core_1.Component({
                        selector: 'task-list',
                        template: "\n    <task-card *ngFor=\"let task of tasks\" \n               [task]=\"task\"\n               (onClicked)=\"onTaskClicked.emit($event)\" >\n    </task-card>\n",
                        directives: [task_card_component_1.TaskCardComponent]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], TaskListComponent);
                return TaskListComponent;
            }());
            exports_1("TaskListComponent", TaskListComponent);
        }
    }
});
//# sourceMappingURL=task-list.component.js.map