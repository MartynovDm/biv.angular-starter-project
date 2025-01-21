import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessages } from '../models/components.model';
import { MatSelectChange } from '@angular/material/select';
import { SelectableItem } from '../../models/core.model';

@Component({
  selector: 'sbi-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss', '../base.styles.scss'],
})
export class CustomSelectComponent implements OnInit {
  @Input() control!: FormControl<string | null>;

  @Input() options?: SelectableItem<any>[] | null = [];

  @Input() label: string = '';

  @Input() isMultiple: boolean = false;

  /**
   * Сообщения пользователю при ошибке
   */
  @Input() errorMessages?: ErrorMessages;

  @Output() selectionChange: EventEmitter<any> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Функция отображения
   * Функция сравнивает значение контрола и объекты из списка, показывает нужный
   */
  public compareFunction(elem1: Object | string | number, elem2: Object | string | number) {
    if (elem1 && elem2 && typeof elem1 === 'object' && typeof elem2 === 'object') {
      if ('id' in elem1 && 'id' in elem2) {
        return elem1.id === elem2.id;
      }
      if ('sysName' in elem1 && 'sysName' in elem2) {
        return elem1.sysName === elem2.sysName;
      }
      if ('key' in elem1 && 'key' in elem2) {
        return elem1.key === elem2.key;
      }
      if ('inn' in elem1 && 'inn' in elem2) {
        return elem1.inn === elem2.inn;
      }
    }
    return elem1 == elem2;
  }

  public onSelectionChange(val: MatSelectChange) {
    this.selectionChange.emit(val.value);
  }
}
