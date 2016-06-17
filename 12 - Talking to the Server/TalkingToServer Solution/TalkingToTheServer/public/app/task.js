System.register(['./priority'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var priority_1;
    var Task;
    return {
        setters:[
            function (priority_1_1) {
                priority_1 = priority_1_1;
            }],
        execute: function() {
            //export interface Task {
            //  id: number,
            //  description: string,
            //  completed: boolean,
            //  priority: Priority
            //}
            Task = (function () {
                function Task(id, description, completed, priority, startDate, endDate) {
                    if (id === void 0) { id = 0; }
                    if (description === void 0) { description = ''; }
                    if (completed === void 0) { completed = false; }
                    if (priority === void 0) { priority = priority_1.Priority.Normal; }
                    this.id = id;
                    this.description = description;
                    this.completed = completed;
                    this.priority = priority;
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                Task.prototype.clone = function () {
                    return new Task(this.id, this.description, this.completed, this.priority, this.startDate, this.endDate);
                };
                return Task;
            }());
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=task.js.map