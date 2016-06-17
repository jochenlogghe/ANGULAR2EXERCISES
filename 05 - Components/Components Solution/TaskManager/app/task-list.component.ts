import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {TaskCardComponent} from './task-card.component';

@Component({
  selector: 'task-list',
  template: `
    <task-card *ngFor="let task of tasks" 
               [task]="task" 
               (onCancelled)="onCancelled.emit($event)">
    </task-card>
`,
  directives: [TaskCardComponent]
})
export class TaskListComponent {
  @Input() tasks: Task[];
  @Output() onCancelled = new EventEmitter<Task>();
}
