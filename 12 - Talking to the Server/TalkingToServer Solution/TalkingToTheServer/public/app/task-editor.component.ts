import {Component, Input, OnChanges}     from 'angular2/core';
import {Task}                 from './task';
import {Priority, PRIORITIES} from './priority';
import {TaskService}          from './task.service';
import {FORM_DIRECTIVES}      from 'angular2/common';
import {DateValueAccessor}    from './date-value-accessor.directive';
import {NotBeforeDirective}   from './not-before.directive';


@Component({
  selector: 'task-editor',
  templateUrl: './app/task-editor.component.html',
  styles: [`
.w3-modal { display: block; }
.ng-touched.ng-invalid { border-bottom: 1px solid #f44336 !important;}
.ng-touched.ng-valid { border-bottom: 1px solid #009688 !important;}
`],
  directives: [FORM_DIRECTIVES, DateValueAccessor, NotBeforeDirective]
})
export class TaskEditorComponent implements OnChanges {
  @Input('task') originalTask: Task;
  priorities = PRIORITIES;
  isEditorDisplayed = false;
  updatableTask: Task;

  constructor(private _taskService: TaskService) { }

  ngOnChanges() {
    if (this.originalTask) {
      this.updatableTask = this.originalTask.clone();
    }
  }

  close = () => this.isEditorDisplayed = false;

  onSubmit() {
    this._taskService.updateTask(this.updatableTask)
                     .subscribe(t => this.close());
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }
}
