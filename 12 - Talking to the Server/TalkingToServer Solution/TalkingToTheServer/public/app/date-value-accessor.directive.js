System.register(['angular2/core', 'angular2/common', 'angular2/src/facade/lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, lang_1;
    var DATE_VALUE_ACCESSOR, DateValueAccessor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            DATE_VALUE_ACCESSOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return DateValueAccessor; }), multi: true }));
            /**
             * The accessor for writing a number value and listening to changes that is used by the
             * {@link NgModel}, {@link NgFormControl}, and {@link NgControlName} directives.
             *
             *  ### Example
             *  ```
             *  <input type="date" [(ngModel)]="startdate">
             *  ```
             */
            DateValueAccessor = (function () {
                function DateValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this.onChange = function (_) { };
                    this.onTouched = function () { };
                }
                DateValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', this._formatDate(value));
                };
                DateValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = function (value) { fn(new Date(value)); };
                };
                DateValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                DateValueAccessor.prototype._formatDate = function (date) {
                    if (!date) {
                        return null;
                    }
                    var month = '' + (date.getMonth() + 1), day = '' + date.getDate(), year = date.getFullYear();
                    if (month.length < 2)
                        month = '0' + month;
                    if (day.length < 2)
                        day = '0' + day;
                    return [year, month, day].join('-');
                };
                DateValueAccessor = __decorate([
                    core_1.Directive({
                        selector: 'input[type=date][ngControl],input[type=date][ngFormControl],input[type=date][ngModel]',
                        host: {
                            '(change)': 'onChange($event.target.value)',
                            '(input)': 'onChange($event.target.value)',
                            '(blur)': 'onTouched()'
                        },
                        providers: [DATE_VALUE_ACCESSOR]
                    }), 
                    __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
                ], DateValueAccessor);
                return DateValueAccessor;
            }());
            exports_1("DateValueAccessor", DateValueAccessor);
        }
    }
});
//# sourceMappingURL=date-value-accessor.directive.js.map