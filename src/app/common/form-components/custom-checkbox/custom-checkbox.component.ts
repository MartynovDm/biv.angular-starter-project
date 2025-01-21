import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sbi-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
})
export class CustomCheckboxComponent implements OnChanges {
  @Input() label: string = '';

  @Input() note?: string = '';

  @Input() control: FormControl<boolean> = new FormControl();

  @Input() checkBoxValue?: boolean | null = null;

  @Input() isLink: boolean = false;

  @Input() isDisabled: boolean = false;

  @Output() clickToLink = new EventEmitter();

  @Output() valueChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['checkBoxValue']?.currentValue) {
      this.control.setValue(changes?.['checkBoxValue']?.currentValue);
    }
    if (changes?.['isDisabled']?.currentValue) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  onCheckBoxValueChanged() {
    this.valueChanged.emit(this.control.value);
  }

  onClickToLink() {
    if (this.isLink) {
      this.clickToLink.emit();
    }
  }
}
