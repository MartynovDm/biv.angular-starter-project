import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CustomChipsModel } from './models/custom-chips.model';

@Component({
  selector: 'sbi-custom-chips',
  templateUrl: './custom-chips.component.html',
  styleUrls: ['./custom-chips.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CustomChipsComponent, multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomChipsComponent implements ControlValueAccessor {
  @Input() options!: CustomChipsModel<any>[];

  @Input() isDisable?: boolean = false;

  @Output() selectionChange = new EventEmitter<any>();

  public value: BehaviorSubject<any> = new BehaviorSubject(null);

  public changeValue(value: any) {
    if (!value) {
      return;
    }
    this.writeValue(value);
    this._onChange(value);
    this.selectionChange.emit(value);
  }

  public writeValue(value: any): void {
    this.value.next(value);
  }

  private _onChange: (value: any) => void = () => {};

  public registerOnChange(onChange: (value: any) => void): void {
    this._onChange = onChange;
  }

  private _onTouched = () => {};

  public registerOnTouched(onTouched: () => void): void {
    this._onTouched = onTouched;
  }
}
