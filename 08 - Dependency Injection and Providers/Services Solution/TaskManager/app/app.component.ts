import {Component, provide}   from 'angular2/core';
import {Task}                 from './task';
import {Priority}             from './priority';
import {TaskCreatorComponent} from './task-creator.component';
import {TaskListComponent}    from './task-list.component';
import {TaskService}          from './task.service';
import {MockTaskService}      from './mock-task.service';

@Component({
  selector: 'my-app',
  template: `
<header class="w3-container w3-teal">
  <h1>Task Manager</h1>
</header>
<div class="w3-row">
  <div class="w3-col m4 l3">
    <task-creator (onCreated)="addTaskToList($event)"></task-creator>
    <task-list [tasks]="tasks"></task-list>
  </div>
</div>
`,
  directives: [TaskCreatorComponent, TaskListComponent],
  providers: [provide(TaskService, { useClass: MockTaskService})]
})
export class AppComponent { }
