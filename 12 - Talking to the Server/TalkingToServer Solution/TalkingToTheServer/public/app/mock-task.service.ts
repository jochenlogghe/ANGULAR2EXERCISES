import {Injectable} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {TaskService} from './task.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MockTaskService extends TaskService {
  private mockTasks: Task[] = [
    new Task(1, 'fix heisenbug', false, Priority.Normal, new Date(2016,09,20), new Date(2016, 09, 21)),
    new Task(2, 'set up fear-driven development', false, Priority.High, new Date(2016, 10, 20), new Date(2016, 10, 25)),
    new Task(3, 'fix hindenbug', false, Priority.Low, new Date(2016, 11, 17), new Date(2016, 11, 24))
  ];

  getAllTasks(): Observable<Task[]> {
    return this.wrapAsObservableWithDelay(this.mockTasks);
  }

  addTask(task: Task): Observable<Task> {
    this.mockTasks.push(task);
    this.dataChanged.emit(task);
    return this.wrapAsObservableWithDelay(task);
  }

  removeTask(task: Task): Observable<Task> {
    let index = this.mockTasks.indexOf(task);
    if (index > -1) {
      this.mockTasks.splice(index, 1);
    }
    this.dataChanged.emit(task);
    return this.wrapAsObservableWithDelay(task);
  }

  updateTask(task: Task): Observable<Task> {
    let index = this.mockTasks.findIndex(t => t.id === task.id);
    this.mockTasks[index] = task;
    this.dataChanged.emit(task);
    return this.wrapAsObservableWithDelay(task);
  }

  private wrapAsObservableWithDelay<T>(value: T) {
    var observable = Observable.create(observer => {
      observer.next(value);
      observer.complete();
      return () => { };
    });

    return observable.delay(1000);
  }

}