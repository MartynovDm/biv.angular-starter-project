import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'sbi-custom-radio-button',
  templateUrl: './custom-radio-button.component.html',
  styleUrls: ['./custom-radio-button.component.scss'],
})
export class CustomRadioButtonComponent {
  @Input() control!: FormControl<any | null>;

  @Input() options: any[] = [];

  @Output() radioButtonChanged: EventEmitter<any> = new EventEmitter<string>();

  public radioButtonChangedFunc(val: MatRadioChange) {
    this.radioButtonChanged.emit(val.value);
  }
}
