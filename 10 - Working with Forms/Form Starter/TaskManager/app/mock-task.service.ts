import {Injectable} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {TaskService} from './task.service';


@Injectable()
export class MockTaskService extends TaskService {
  private mockTasks: Task[] = [
    new Task(1, 'fix heisenbug', false, Priority.Normal, new Date(2016,09,20), new Date(2016, 09, 21)),
    new Task(2, 'set up fear-driven development', false, Priority.High, new Date(2016, 10, 20), new Date(2016, 10, 25)),
    new Task(3, 'fix hindenbug', false, Priority.Low, new Date(2016, 11, 17), new Date(2016, 11, 24))
  ];

  getAllTasks(): Task[] {
    return this.mockTasks;
  }

  addTask(task: Task): void {
    this.mockTasks.push(task);
  }

  removeTask(task: Task): void {
    let index = this.mockTasks.indexOf(task);
    if (index > -1) {
      this.mockTasks.splice(index, 1);
    }
  }

  updateTask(task: Task): void {
    let index = this.mockTasks.findIndex(t => t.id === task.id);
    this.mockTasks[index] = task;
  }

}