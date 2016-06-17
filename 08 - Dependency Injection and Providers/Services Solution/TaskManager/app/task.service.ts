import {Injectable} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {Observable} from 'rxjs';

@Injectable()
export class TaskService {
  getAllTasks(): Task[] { return null; }
  addTask(task: Task): void { }
  removeTask(task: Task): void { }
}