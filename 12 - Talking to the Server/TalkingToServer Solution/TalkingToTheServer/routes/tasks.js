var express = require('express');
var repository = require('../data/repository');
var router = express.Router();
function findAll(req, res) {
    res.json(repository.getAllTasks());
}
function findById(req, res) {
    var id = parseInt(req.params.id);
    var task = repository.getTaskById(id);
    if (task === undefined || task === null)
        res.status(404).json({ 'error': 'not found: task with id ' + id });
    else
        res.status(200).json(task);
}
function addTask(req, res) {
    var task = req.body;
    var insertedTask = repository.insertTask(task);
    res.location('/tasks/' + insertedTask.id);
    res.status(201).json(insertedTask);
}
function updateTask(req, res) {
    var id = parseInt(req.params.id);
    var newTask = req.body;
    var oldTask = repository.getTaskById(id);
    if (newTask.id !== id) {
      res.status(400).json({ 'error': 'inconsistent ids:' + id + ' and '+ newTask.id});
    }
    else if (oldTask === undefined || oldTask === null)
        res.status(404).json({ 'error': 'not found: task with id ' + id });
    else {
        var updatedTask = repository.updateTask(newTask);
        res.location('/tasks/' + updatedTask.id);
        res.status(200).json(updatedTask);
    }
}
function deleteTask(req, res) {
    var id = parseInt(req.params.id);
    var task = repository.getTaskById(id);
    if (task === undefined || task === null)
        res.status(404).json({ 'error': 'not found: task with id ' + req.params.id });
    else {
        repository.deleteTask(task.id);
        res.status(200).json(task);
    }
}
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
module.exports = router;
//# sourceMappingURL=tasks.js.map