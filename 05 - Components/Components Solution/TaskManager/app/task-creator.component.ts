﻿import {Component, Output, EventEmitter}     from 'angular2/core';
import {Task}          from './task';
import {Priority}      from './priority';

@Component({
  selector: 'task-creator',
  template: `
<div class="w3-container w3-margin-16 w3-border">

  <p>
    <label>Description</label>
    <input [(ngModel)]="newTask.description" class="w3-input" type="text"/>
  </p>

  <p>
    <label>Priority</label>
    <select [(ngModel)]="newTask.priority" class="w3-select">
      <option *ngFor="let priority of priorities" 
              [value]="priority">
        {{getNameForPriority(priority)}}
      </option>
    </select>
  </p>

  <p>
    <a href="" (click)="addTask(newTask, $event)" class="w3-right">add new</a>
  </p>

</div>
`
})
export class TaskCreatorComponent {
  @Output() onCreated = new EventEmitter<Task>();

  newTask: Task;
  priorities = [Priority.Low, Priority.Normal, Priority.High];

  constructor() {
    this.resestTask();
  }

  addTask(task: Task, event: Event): void {
    this.onCreated.emit(task);
    this.resestTask();

    event.preventDefault();
  }

  private resestTask() {
    this.newTask = { id: 0, description: '', completed: false, priority: Priority.Normal };
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }

}