import {Component, provide, ViewChild}   from 'angular2/core';
import {Task}                 from './task';
import {Priority}             from './priority';
import {TaskCreatorComponent} from './task-creator.component';
import {TaskListComponent}    from './task-list.component';
import {TaskEditorComponent}  from './task-editor.component';
import {MockTaskService}      from './mock-task.service';
import {TaskService}          from './task.service';


@Component({
  selector: 'my-app',
  template: `
<header class="w3-container w3-teal">
  <h1>Task Manager</h1>
</header>
<div class="w3-row">
  <div class="w3-col m4 l3">
    <task-creator (onCreated)="addTaskToList($event)"></task-creator>
    <task-list [tasks]="tasks" (onTaskClicked)="onTaskClicked($event)"></task-list>
  </div>
</div>
<task-editor [task]="editableTask"></task-editor>
`,
  directives: [TaskCreatorComponent, TaskListComponent, TaskEditorComponent],
  providers: [provide(TaskService, {useClass: MockTaskService})]
})
export class AppComponent {
  editableTask: Task;
  isEditorDisplayed: boolean = false;

  @ViewChild(TaskEditorComponent)
  private _taskEditorComponent: TaskEditorComponent;

  onTaskClicked(task: Task): void {
    this.editableTask = task;
    this._taskEditorComponent.isEditorDisplayed = true;
  }
}
