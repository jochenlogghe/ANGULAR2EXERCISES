import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {TaskCardComponent} from './task-card.component';
import {TaskService}   from './task.service';

@Component({
  selector: 'task-list',
  template: `
    <task-card *ngFor="let task of tasks" 
               [task]="task"
               (onClicked)="onTaskClicked.emit($event)" >
    </task-card>
`,
  directives: [TaskCardComponent]
})
export class TaskListComponent implements OnInit {
  @Output() onTaskClicked = new EventEmitter<Task>();
  tasks: Task[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  private getTasks() {
    this._taskService.getAllTasks();
  }
}
