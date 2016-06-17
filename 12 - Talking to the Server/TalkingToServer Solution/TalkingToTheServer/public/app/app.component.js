System.register(['angular2/core', './task-creator.component', './task-list.component', './task-editor.component', 'angular2/http', './task.service'], function(exports_1, context_1) {
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
    var core_1, task_creator_component_1, task_list_component_1, task_editor_component_1, http_1, task_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_creator_component_1_1) {
                task_creator_component_1 = task_creator_component_1_1;
            },
            function (task_list_component_1_1) {
                task_list_component_1 = task_list_component_1_1;
            },
            function (task_editor_component_1_1) {
                task_editor_component_1 = task_editor_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isEditorDisplayed = false;
                }
                AppComponent.prototype.onTaskClicked = function (task) {
                    this.editableTask = task;
                    this._taskEditorComponent.isEditorDisplayed = true;
                };
                __decorate([
                    core_1.ViewChild(task_editor_component_1.TaskEditorComponent), 
                    __metadata('design:type', task_editor_component_1.TaskEditorComponent)
                ], AppComponent.prototype, "_taskEditorComponent", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<header class=\"w3-container w3-teal\">\n  <h1>Task Manager</h1>\n</header>\n<div class=\"w3-row\">\n  <div class=\"w3-col m4 l3\">\n    <task-creator (onCreated)=\"addTaskToList($event)\"></task-creator>\n    <task-list [tasks]=\"tasks\" (onTaskClicked)=\"onTaskClicked($event)\"></task-list>\n  </div>\n</div>\n<task-editor [task]=\"editableTask\"></task-editor>\n",
                        directives: [task_creator_component_1.TaskCreatorComponent, task_list_component_1.TaskListComponent, task_editor_component_1.TaskEditorComponent],
                        providers: [http_1.HTTP_PROVIDERS, task_service_1.TaskService]
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