import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessages } from '../models/components.model';

@Component({
  selector: 'sbi-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss', '../base.styles.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent implements OnInit {
  @Input() value: any;

  @Input() control!: any;

  @Input() placeholder: string = '';

  @Input() label: string = '';

  @Input() readonly: boolean = false;

  @Input() maxLength: number | string | null = null;

  @Input() prefixIconType?: 'search';

  @Input() suffixIconType: 'clear' | 'copy' | 'custom' | 'close' = 'clear';

  @Input() inputUppercaseActive: boolean = false;

  @Input() ngxMask: string | null = null;

  @Input() ngxSuffix: string = '';

  @Input() ngxPrefix: string = '';

  @Input() ngxPattern: any = null;

  @Input() ngxSeparatorLimit: string = '';

  @Input() dropSpecialCharacters: boolean = true;

  /**
   * Сообщения пользователю при ошибке
   */
  @Input() errorMessages?: ErrorMessages;

  @Output() inputChange: EventEmitter<void> = new EventEmitter<void>();

  @Output() deleteValue = new EventEmitter<void>();

  @Output() clearControl = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.value || this.value === '') {
      this.control = new FormControl(this.value);
    }
  }

  public copyValue(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  public onInputChange() {
    this.inputChange.emit();
  }

  public onDeleteValue() {
    this.deleteValue.emit();
  }

  public onClearControl() {
    this.control.setValue('');
    this.clearControl.emit();
  }
}
