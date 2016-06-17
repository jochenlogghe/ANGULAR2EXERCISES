import {Injectable, EventEmitter} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Task} from './task';
import {Priority} from './priority';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TaskService {
  private _tasksUrl = 'tasks';  // URL to web api
  dataChanged = new EventEmitter<any>();

  constructor(private http: Http) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get(this._tasksUrl)
      .map(res => this.mapResponseToTaskCollection(res.json()))
      .catch(this.handleError);
  }

  addTask(task: Task): Observable<Task> {
    let body = JSON.stringify(task);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._tasksUrl, body, options)
      .map(res => this.mapResponseToTask(res.json()))
      .do(task => this.dataChanged.emit(task))
      .catch(this.handleError);
  }

  removeTask(task: Task): Observable<Task> {
    return this.http.delete(`${this._tasksUrl}/${task.id}`)
      .map(res => this.mapResponseToTask(res.json()))
      .do(task => this.dataChanged.emit(task))
      .catch(this.handleError);
  }

  updateTask(task: Task): Observable<Task> {
    let body = JSON.stringify(task);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this._tasksUrl}/${task.id}`, body, options)
      .map(res => this.mapResponseToTask(res.json()))
      .do(task => this.dataChanged.emit(task))
      .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }

  private mapResponseToTask(task: any): Task {
    return new Task(task.id, task.description, task.completed, task.priority,
                    new Date(task.startDate), new Date(task.endDate));
  }

  private mapResponseToTaskCollection(tasks: any[]): Task[] {
    let output: Task[] = [];
    tasks.forEach((value, index, collection) => output.push(this.mapResponseToTask(value)));
    return output;
  }
}