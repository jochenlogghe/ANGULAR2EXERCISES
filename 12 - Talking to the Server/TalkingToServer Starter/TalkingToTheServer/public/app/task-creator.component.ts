import {Component}             from 'angular2/core';
import {Task}                  from './task';
import {Priority, PRIORITIES}  from './priority';
import {TaskService}           from './task.service';


@Component({
  selector: 'task-creator',
  template: `
<div class="w3-container w3-margin-16 w3-border">

  <p>
    <label>Description</label>
    <input [(ngModel)]="newTask.description" class="w3-input" type="text"/>
  </p>

  <p>
    <label>Priority</label>
    <select [(ngModel)]="newTask.priority" class="w3-select">
      <option *ngFor="let priority of priorities" 
              [value]="priority">
        {{getNameForPriority(priority)}}
      </option>
    </select>
  </p>

  <p>
    <a href="" (click)="addTask(newTask, $event)" class="w3-right">add new</a>
  </p>

</div>
`
})
export class TaskCreatorComponent {
  newTask: Task;
  priorities = PRIORITIES;

  constructor(private _taskService: TaskService) {
    this.resetTask();
  }

  addTask(task: Task, event: Event): void {
    this._taskService.addTask(task)
    this.resetTask();

    event.preventDefault();
  }

  private resetTask() {
    this.newTask = new Task();
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }

}
