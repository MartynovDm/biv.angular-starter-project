import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sbi-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrl: '../base.styles.scss',
})
export class CustomToggleComponent {
  @Input() control: FormControl<boolean> = new FormControl();

  @Output() valueChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChangeActive(active: boolean) {
    this.control.setValue(active);
    this.valueChanged.emit(active);
  }
}
