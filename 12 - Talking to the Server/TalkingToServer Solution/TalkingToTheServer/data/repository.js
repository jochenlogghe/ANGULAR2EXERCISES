var tasks = [
    { id: 1, description: 'fix heisenbug', completed: false, priority: 1, startDate: new Date(2016, 09, 20), endDate: new Date(2016, 09, 21) },
    { id: 2, description: 'set up fear-driven development', completed: false, priority: 2, startDate: new Date(2016, 10, 20), endDate: new Date(2016, 10, 25) },
    { id: 3, description: 'fix hindenbug', completed: false, priority: 0, startDate: new Date(2016, 11, 17), endDate: new Date(2016, 11, 24) }
];
var idCounter = 3;
function cleanArray(actual) {
    var newArray = [];
    for (var i = 0; i < actual.length; i++) {
        if (actual[i]) {
            newArray.push(actual[i]);
        }
    }
    return newArray;
}
module.exports.getAllTasks = function () {
    return tasks;
};
module.exports.getTaskById = function (id) {
    var index = tasks.findIndex(function (t) { return t.id === id; });
    return tasks[index];
};
module.exports.insertTask = function (task) {
    task.id = ++idCounter;
    tasks.push(task);
    return task;
};
module.exports.updateTask = function (task) {
    var index = tasks.findIndex(function (t) { return t.id === task.id; });
    tasks[index] = task;
    return task;
};
module.exports.deleteTask = function (id) {
    var index = tasks.findIndex(function (t) { return t.id === id; });
    if (index > -1) {
        tasks.splice(index, 1);
    }
};