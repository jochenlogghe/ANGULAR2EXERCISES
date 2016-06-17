import {Injectable} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {TaskService} from './task.service';


@Injectable()
export class MockTaskService extends TaskService {
  private mockTasks: Task[] = [
    { id: 1, description: 'fix heisenbug', completed: false, priority: Priority.Normal },
    { id: 2, description: 'set up fear-driven development', completed: false, priority: Priority.High },
    { id: 3, description: 'fix hindenbug', completed: false, priority: Priority.Low }
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
}