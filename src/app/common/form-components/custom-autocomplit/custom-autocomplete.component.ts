import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { SelectableItem } from '../../models/core.model';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { ErrorMessages } from '../models/components.model';
import { MaskitoOptions } from '@maskito/common';

@Component({
  selector: 'sbi-custom-autocomplete',
  templateUrl: './custom-autocomplete.component.html',
  styleUrls: ['./custom-autocomplete.component.scss', '../base.styles.scss'],
})
export class CustomAutocompleteComponent implements OnInit, OnChanges {
  @Input() control!: FormControl<any | null>;

  @Input() options: SelectableItem<any>[] | null = [];

  @Input() label: string = '';

  @Input() displayFunc: (arg: any) => string;

  @Input() filterIsNeeded: boolean = false;

  @Input() prefixIconType?: 'search';

  @Input() typeIconButton: 'clear' | 'copy' | 'custom' | 'close' = 'clear';

  @Input() isMultiAutoComplete: boolean = false;

  @Input() placeholder: string = '';

  @Input() maxLength: any = null;

  @Input() inputUppercaseActive: boolean = false;

  @Input() appTitleCaseActive: boolean = false;

  // Todo: Перейти во всех компонентах на маскито
  @Input() maskitoMask: MaskitoOptions = {
    mask: /\.*/,
  };

  /**
   * Сообщения пользователю при ошибке
   */
  @Input() errorMessages?: ErrorMessages;

  @Output() inputChange: EventEmitter<void> = new EventEmitter<void>();

  @Output() selectionChange: EventEmitter<any> = new EventEmitter<string>();

  @Output() clearControl = new EventEmitter<void>();

  @Output() autoCompleteOpened: EventEmitter<void> = new EventEmitter<void>();

  public filteredOptions: BehaviorSubject<SelectableItem<any>[]> = new BehaviorSubject<SelectableItem<any>[]>([]);

  constructor() {
    this.displayFunc = arg => arg;
  }

  ngOnInit(): void {
    this.filterFunc();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.filteredOptions.next(changes['options'].currentValue || []);
      this.filterFunc();
    }
  }

  /**
   * Функция фильтрации
   * Если нужна фильтрация на стороне фронта
   * Фильтруем список опций по вводимому значению
   */
  private filterFunc() {
    if (!this.filterIsNeeded) {
      this.filteredOptions.next(this.options || []);
      return;
    }
    this.control.valueChanges.pipe(debounceTime(50), distinctUntilChanged()).subscribe(value => {
      if (!this.options) {
        this.filteredOptions.next([]);
        return;
      }
      if (!value) {
        this.filteredOptions.next(this.options!);
        return;
      }
      if (typeof value === 'string') {
        this.filteredOptions.next(
          this.options!.filter(option => option.viewValue?.toLowerCase()?.includes(value.toLowerCase()))
        );
      }
    });
  }

  public onInputChange() {
    this.inputChange.emit();
  }

  public onAutoCompleteOpened() {
    this.autoCompleteOpened.emit();
  }

  public onSelectionChange(val: MatAutocompleteSelectedEvent) {
    this.selectionChange.emit(val.option.value);
    // this.control.setValue(val.option.value);
  }

  public onClearControl() {
    this.control.setValue('');
    this.clearControl.emit();
  }

  protected readonly event = event;
  protected readonly Boolean = Boolean;
}
