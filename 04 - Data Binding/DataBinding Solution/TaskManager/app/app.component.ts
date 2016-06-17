import {Component} from 'angular2/core';
import {Task} from './task';
import {Priority} from './priority';

@Component({
  selector: 'my-app',
  template: `
<h1>Task Manager</h1>
<div>
  <input [(ngModel)]="newTask.description"/>
  <select [(ngModel)]="newTask.priority">
    <option *ngFor="let priority of priorities" 
            [value]="priority">
      {{getNameForPriority(priority)}}
    </option>
  </select>
  <a href="" (click)="addTask(newTask, $event)">add new</a>
</div>
<ul>
  <li *ngFor="let task of tasks"
      [class.low-priority]="task.priority === 0"
      [class.high-priority]="task.priority === 2">
    {{task.description}}
  </li>
</ul>
`,
  styles: [`
.high-priority {color: rgb(176, 50, 0);}
.low-priority {color: rgb(0, 153, 176);}
`]
})
export class AppComponent {
  newTask: Task = { id: 0, description: '', completed: false, priority: Priority.Normal };
  tasks: Task[];
  priorities = [Priority.Low, Priority.Normal, Priority.High];

  constructor() {
    this.tasks = [
      { id: 1, description: 'fix heisenbug', completed: false, priority: Priority.Normal },
      { id: 2, description: 'set up fear-driven development', completed: false, priority: Priority.High },
      { id: 3, description: 'fix hindenbug', completed: false, priority: Priority.Low }
    ];
  }

  addTask(task: Task, event: Event): void {
    //bugfix, for some reason, it becomes a string
    task.priority = parseInt(task.priority.toString());

    task.id = this.getNextId();
    this.tasks.push(task);
    this.newTask = { id: 0, description: '', completed: false, priority: Priority.Normal };

    event.preventDefault();
  }

  getNextId(): number {
    return this.tasks.length + 1;
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }

}
