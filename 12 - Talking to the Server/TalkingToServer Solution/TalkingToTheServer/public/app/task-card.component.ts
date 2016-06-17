import {Component, Input, Output, EventEmitter, ViewChild}     from 'angular2/core';
import {Task}                            from './task';
import {Priority}                        from './priority';
import {TaskService}                     from './task.service';


@Component({
  selector: 'task-card',
  template: `
  <div class="w3-card-4 w3-margin-16 w3-padding-bottom u2u-hand"
       [class.w3-light-blue]="task.priority === 0"
       [class.w3-dark-grey]="task.priority === 1"
       [class.w3-pink]="task.priority === 2"
       (click)="onClicked.emit(task)">

      <i *ngIf="task.completed" class="material-icons w3-right" >done</i>

    <div class="w3-container w3-center w3-padding">
      <h3>{{task.description}}</h3>
    
      <button class="w3-btn w3-green" (click)="setCompleted(task, $event)">Completed</button>
      <button class="w3-btn w3-red" (click)="cancelTask(task, $event)">Cancel</button>
    </div>

  </div>
`,
  styles: [`.u2u-hand {cursor: pointer;}`]
})
export class TaskCardComponent {
  @Input() task: Task;
  @Output() onClicked = new EventEmitter<Task>();

  constructor(private _taskService: TaskService) { }

  setCompleted = (task: Task, event: Event) => {
    task.completed = true;
    this._taskService.updateTask(task)
                     .subscribe(t => { });
    event.stopPropagation();
  };

  cancelTask = (task: Task, event: Event) => {
    this._taskService.removeTask(task)
                     .subscribe(t => { });
    event.stopPropagation();
  };

}
