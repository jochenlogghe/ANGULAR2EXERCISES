System.register(['angular2/core', './task', './priority', './task.service', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_1, priority_1, task_service_1, Observable_1;
    var MockTaskService;
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
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MockTaskService = (function (_super) {
                __extends(MockTaskService, _super);
                function MockTaskService() {
                    _super.apply(this, arguments);
                    this.mockTasks = [
                        new task_1.Task(1, 'fix heisenbug', false, priority_1.Priority.Normal, new Date(2016, 09, 20), new Date(2016, 09, 21)),
                        new task_1.Task(2, 'set up fear-driven development', false, priority_1.Priority.High, new Date(2016, 10, 20), new Date(2016, 10, 25)),
                        new task_1.Task(3, 'fix hindenbug', false, priority_1.Priority.Low, new Date(2016, 11, 17), new Date(2016, 11, 24))
                    ];
                }
                MockTaskService.prototype.getAllTasks = function () {
                    return this.wrapAsObservableWithDelay(this.mockTasks);
                };
                MockTaskService.prototype.addTask = function (task) {
                    this.mockTasks.push(task);
                    this.dataChanged.emit(task);
                    return this.wrapAsObservableWithDelay(task);
                };
                MockTaskService.prototype.removeTask = function (task) {
                    var index = this.mockTasks.indexOf(task);
                    if (index > -1) {
                        this.mockTasks.splice(index, 1);
                    }
                    this.dataChanged.emit(task);
                    return this.wrapAsObservableWithDelay(task);
                };
                MockTaskService.prototype.updateTask = function (task) {
                    var index = this.mockTasks.findIndex(function (t) { return t.id === task.id; });
                    this.mockTasks[index] = task;
                    this.dataChanged.emit(task);
                    return this.wrapAsObservableWithDelay(task);
                };
                MockTaskService.prototype.wrapAsObservableWithDelay = function (value) {
                    var observable = Observable_1.Observable.create(function (observer) {
                        observer.next(value);
                        observer.complete();
                        return function () { };
                    });
                    return observable.delay(1000);
                };
                MockTaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MockTaskService);
                return MockTaskService;
            }(task_service_1.TaskService));
            exports_1("MockTaskService", MockTaskService);
        }
    }
});
//# sourceMappingURL=mock-task.service.js.map