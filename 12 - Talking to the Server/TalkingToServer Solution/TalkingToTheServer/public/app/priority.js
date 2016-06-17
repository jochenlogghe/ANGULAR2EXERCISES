System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Priority, PRIORITIES;
    return {
        setters:[],
        execute: function() {
            (function (Priority) {
                Priority[Priority["Low"] = 0] = "Low";
                Priority[Priority["Normal"] = 1] = "Normal";
                Priority[Priority["High"] = 2] = "High";
            })(Priority || (Priority = {}));
            exports_1("Priority", Priority);
            exports_1("PRIORITIES", PRIORITIES = [Priority.Low, Priority.Normal, Priority.High]);
        }
    }
});
//# sourceMappingURL=priority.js.map