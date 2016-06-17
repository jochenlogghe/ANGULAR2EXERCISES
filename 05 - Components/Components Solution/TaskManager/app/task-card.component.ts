import {Component, Input, Output, EventEmitter}     from 'angular2/core';
import {Task}          from './task';
import {Priority}      from './priority';

@Component({
  selector: 'task-card',
  template: `
<div class="w3-card-4 w3-margin-16 w3-padding-bottom"
     [class.w3-light-blue]="task.priority === 0"
     [class.w3-dark-grey]="task.priority === 1"
     [class.w3-pink]="task.priority === 2">

    <i *ngIf="task.completed" class="material-icons w3-right" >done</i>

  <div class="w3-container w3-center w3-padding">
    <h3>{{task.description}}</h3>
    
    <button class="w3-btn w3-green" (click)="setCompleted(task)">Completed</button>
    <button class="w3-btn w3-red" (click)="onCancelled.emit(task)">Cancel</button>
  </div>

</div>
`
})
export class TaskCardComponent {
  @Input() task: Task;
  @Output() onCompleted = new EventEmitter<Task>();
  @Output() onCancelled = new EventEmitter<Task>();

  setCompleted = (task: Task) => {
    task.completed = true;
    this.onCompleted.emit(task);
  };
}
