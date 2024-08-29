import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
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
})
export class InputFieldComponent implements OnInit {
  @Input() id!: number | string | null;
  @Input() type!: number | string;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() maxLength!: string;


  formControlProp!: FormControl;
  isFocused!: boolean;
  validationText!: string;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.type !== 'string' && this.type !== 'number') this.type = 'string';
    if (!this.id) this.id = this.fieldName;

    if (this.controlContainer && this.fieldName) {
      const formGroup: FormGroup = this.controlContainer.control as FormGroup;
      this.formControlProp = formGroup.get(this.fieldName) as FormControl;
    }
  }

  defineValidationMsg(): boolean {
    if (this.formControlProp.errors?.['required'] && !this.isFocused) {
      this.validationText = 'Field is required.';
      return true;
    }
    else if (this.formControlProp?.hasError('minlength')) {
      this.validationText = `Insert at least ${this.formControlProp.errors?.['minlength'].requiredLength} caracteres.`;
      return true;
    }

    return false;
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}
