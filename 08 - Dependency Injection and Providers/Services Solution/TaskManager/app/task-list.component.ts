import {Component, OnInit} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {TaskCardComponent} from './task-card.component';
import {TaskService}   from './task.service';

@Component({
  selector: 'task-list',
  template: `
    <task-card *ngFor="let task of tasks" 
               [task]="task">
    </task-card>
`,
  directives: [TaskCardComponent]
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this._taskService.getAllTasks();
  }
}
