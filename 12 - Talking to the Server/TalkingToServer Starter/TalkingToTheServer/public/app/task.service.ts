import {Injectable, EventEmitter} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskService {
  dataChanged = new EventEmitter<any>();

  getAllTasks(): Observable<Task[]> { return null; }
  addTask(task: Task): Observable<Task> { return null; }
  removeTask(task: Task): Observable<Task> { return null; }
  updateTask(task: Task): Observable<Task> { return null; }
}