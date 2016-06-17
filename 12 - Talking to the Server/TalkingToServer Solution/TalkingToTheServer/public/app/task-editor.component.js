System.register(['angular2/core', './task', './priority', './task.service', 'angular2/common', './date-value-accessor.directive', './not-before.directive'], function(exports_1, context_1) {
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
    var core_1, task_1, priority_1, task_service_1, common_1, date_value_accessor_directive_1, not_before_directive_1;
    var TaskEditorComponent;
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
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (date_value_accessor_directive_1_1) {
                date_value_accessor_directive_1 = date_value_accessor_directive_1_1;
            },
            function (not_before_directive_1_1) {
                not_before_directive_1 = not_before_directive_1_1;
            }],
        execute: function() {
            TaskEditorComponent = (function () {
                function TaskEditorComponent(_taskService) {
                    var _this = this;
                    this._taskService = _taskService;
                    this.priorities = priority_1.PRIORITIES;
                    this.isEditorDisplayed = false;
                    this.close = function () { return _this.isEditorDisplayed = false; };
                }
                TaskEditorComponent.prototype.ngOnChanges = function () {
                    if (this.originalTask) {
                        this.updatableTask = this.originalTask.clone();
                    }
                };
                TaskEditorComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._taskService.updateTask(this.updatableTask)
                        .subscribe(function (t) { return _this.close(); });
                };
                TaskEditorComponent.prototype.getNameForPriority = function (priority) {
                    return priority_1.Priority[priority];
                };
                __decorate([
                    core_1.Input('task'), 
                    __metadata('design:type', task_1.Task)
                ], TaskEditorComponent.prototype, "originalTask", void 0);
                TaskEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'task-editor',
                        templateUrl: './app/task-editor.component.html',
                        styles: ["\n.w3-modal { display: block; }\n.ng-touched.ng-invalid { border-bottom: 1px solid #f44336 !important;}\n.ng-touched.ng-valid { border-bottom: 1px solid #009688 !important;}\n"],
                        directives: [common_1.FORM_DIRECTIVES, date_value_accessor_directive_1.DateValueAccessor, not_before_directive_1.NotBeforeDirective]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], TaskEditorComponent);
                return TaskEditorComponent;
            }());
            exports_1("TaskEditorComponent", TaskEditorComponent);
        }
    }
});
//# sourceMappingURL=task-editor.component.js.map