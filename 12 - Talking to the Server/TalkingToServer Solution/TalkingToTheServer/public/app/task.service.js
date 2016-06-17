System.register(['angular2/core', 'angular2/http', './task', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, task_1, Observable_1;
    var TaskService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TaskService = (function () {
                function TaskService(http) {
                    this.http = http;
                    this._tasksUrl = 'tasks'; // URL to web api
                    this.dataChanged = new core_1.EventEmitter();
                }
                TaskService.prototype.getAllTasks = function () {
                    var _this = this;
                    return this.http.get(this._tasksUrl)
                        .map(function (res) { return _this.mapResponseToTaskCollection(res.json()); })
                        .catch(this.handleError);
                };
                TaskService.prototype.addTask = function (task) {
                    var _this = this;
                    var body = JSON.stringify(task);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._tasksUrl, body, options)
                        .map(function (res) { return _this.mapResponseToTask(res.json()); })
                        .do(function (task) { return _this.dataChanged.emit(task); })
                        .catch(this.handleError);
                };
                TaskService.prototype.removeTask = function (task) {
                    var _this = this;
                    return this.http.delete(this._tasksUrl + "/" + task.id)
                        .map(function (res) { return _this.mapResponseToTask(res.json()); })
                        .do(function (task) { return _this.dataChanged.emit(task); })
                        .catch(this.handleError);
                };
                TaskService.prototype.updateTask = function (task) {
                    var _this = this;
                    var body = JSON.stringify(task);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(this._tasksUrl + "/" + task.id, body, options)
                        .map(function (res) { return _this.mapResponseToTask(res.json()); })
                        .do(function (task) { return _this.dataChanged.emit(task); })
                        .catch(this.handleError);
                };
                TaskService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json() || 'Server error');
                };
                TaskService.prototype.mapResponseToTask = function (task) {
                    return new task_1.Task(task.id, task.description, task.completed, task.priority, new Date(task.startDate), new Date(task.endDate));
                };
                TaskService.prototype.mapResponseToTaskCollection = function (tasks) {
                    var _this = this;
                    var output = [];
                    tasks.forEach(function (value, index, collection) { return output.push(_this.mapResponseToTask(value)); });
                    return output;
                };
                TaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TaskService);
                return TaskService;
            }());
            exports_1("TaskService", TaskService);
        }
    }
});
//# sourceMappingURL=task.service.js.map