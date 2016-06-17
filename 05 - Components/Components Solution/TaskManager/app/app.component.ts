import {Component, OnInit} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';
import {TaskCreatorComponent} from './task-creator.component';
import {TaskListComponent} from './task-list.component';

@Component({
  selector: 'my-app',
  template: `
<header class="w3-container w3-teal">
  <h1>Task Manager</h1>
</header>
<div class="w3-row">
  <div class="w3-col m4 l3">
    <task-creator (onCreated)="addTaskToList($event)"></task-creator>
    <task-list [tasks]="tasks" (onCancelled)="removeTaskFromList($event)"></task-list>
  </div>
</div>
`,
  directives: [TaskCreatorComponent, TaskListComponent]
})
export class AppComponent implements OnInit {
  tasks: Task[];

  ngOnInit() {
    this.tasks = [
      { id: 1, description: 'fix heisenbug', completed: false, priority: Priority.Normal },
      { id: 2, description: 'set up fear-driven development', completed: false, priority: Priority.High },
      { id: 3, description: 'fix hindenbug', completed: false, priority: Priority.Low }
    ];
  }

  addTaskToList(task: Task): void {
    this.tasks.push(task);
  }

  removeTaskFromList(task: Task): void {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

}
