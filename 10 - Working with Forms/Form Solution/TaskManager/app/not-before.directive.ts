import { Directive, provide, Input, OnChanges, SimpleChange } from 'angular2/core';
import {NG_VALIDATORS, Validator, Control}                    from 'angular2/common';

@Directive({
  selector: '[not-before]',
  providers: [provide(NG_VALIDATORS, { useExisting: NotBeforeDirective, multi: true })]
})
export class NotBeforeDirective implements Validator, OnChanges {
  @Input('not-before') notBeforeDate: Date;
  private control: Control;
  
  validate(control: Control): { [key: string]: any } {
    this.control = control;
    let currentDate = new Date(control.value);

    if (currentDate < this.notBeforeDate) {
      return { notBefore: true };
    }
    return null;
  }

  ngOnChanges(changes: { [key: string]: SimpleChange; }): any {
    setTimeout(() => {
      this.control && this.control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    });
  }

}
