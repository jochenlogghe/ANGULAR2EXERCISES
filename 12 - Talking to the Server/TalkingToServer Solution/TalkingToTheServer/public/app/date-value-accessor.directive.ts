import {Directive, ElementRef, Renderer, Self, forwardRef, Provider} from 'angular2/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from 'angular2/common';
import {isBlank, CONST_EXPR, DateWrapper} from 'angular2/src/facade/lang';

const DATE_VALUE_ACCESSOR = CONST_EXPR(new Provider(
  NG_VALUE_ACCESSOR, { useExisting: forwardRef(() => DateValueAccessor), multi: true }));

/**
 * The accessor for writing a number value and listening to changes that is used by the
 * {@link NgModel}, {@link NgFormControl}, and {@link NgControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="date" [(ngModel)]="startdate">
 *  ```
 */
@Directive({
  selector:
  'input[type=date][ngControl],input[type=date][ngFormControl],input[type=date][ngModel]',
  host: {
    '(change)': 'onChange($event.target.value)',
    '(input)': 'onChange($event.target.value)',
    '(blur)': 'onTouched()'
  },
  providers: [DATE_VALUE_ACCESSOR]
})
export class DateValueAccessor implements ControlValueAccessor {
  onChange = (_: any) => { };
  onTouched = () => { };

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) { }

  writeValue(value: Date): void {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', this._formatDate(value));
  }

  registerOnChange(fn: (_: Date) => void): void {
    this.onChange = (value) => { fn(new Date(value)); };
  }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  private _formatDate(date: Date): string {
    if (!date) { return null; }

    let month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}