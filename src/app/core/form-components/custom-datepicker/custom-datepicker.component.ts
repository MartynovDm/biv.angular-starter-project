import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessages } from '../models/components.model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'sbi-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss', '../base.styles.scss'],
})
export class CustomDatepickerComponent {
  @Input() control!: FormControl;

  @Input() label: string = '';

  @Input() min?: string;
  @Input() max?: string;

  @Input() errorMessages?: ErrorMessages;

  @Output() onDateChange: EventEmitter<any> = new EventEmitter<string>();

  constructor(private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('ru');
  }

  dateInputChange(event: MatDatepickerInputEvent<Date>) {
    this.onDateChange.emit(event.value);
  }

  dateSelectChange(event: MatDatepickerInputEvent<Date>) {
    this.onDateChange.emit(event.value);
  }
}
