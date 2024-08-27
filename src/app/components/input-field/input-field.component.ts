import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() id!: number | string | null;
  @Input() type!: number | string;
  @Input() fieldName!: string;

  formControlProp!: FormControl;
  isFocused!: boolean;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.type !== 'string' && this.type !== 'number') this.type = 'string';
    if (this.id === undefined) this.id = null;

    if (this.controlContainer && this.fieldName) {
      const formGroup = this.controlContainer.control as FormGroup;
      this.formControlProp = formGroup.get(this.fieldName) as FormControl;
      console.log(this.formControlProp);
      console.log(this.fieldName);
    }
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.formControlProp.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.formControlProp.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.formControlProp.markAsTouched();
  }

  onFocus(): void {
    this.isFocused = true;
    console.log(this.isFocused)
  }

  onBlur():void {
    this.isFocused = false; 
  }
}
