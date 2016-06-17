import {Component, Input}     from 'angular2/core';
import {Task}                 from './task';
import {Priority, PRIORITIES} from './priority';
import {TaskService}          from './task.service';


@Component({
  selector: 'task-editor',
  templateUrl: './app/task-editor.component.html',
  styles: [`
.w3-modal { display: block; }
`]
})
export class TaskEditorComponent {
  @Input('task') originalTask: Task;
  priorities = PRIORITIES;
  isEditorDisplayed = false;

  constructor(private _taskService: TaskService) { }

  close = () => this.isEditorDisplayed = false;

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }
}
