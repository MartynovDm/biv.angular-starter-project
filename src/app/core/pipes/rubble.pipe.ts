import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rubbleWalletTransform',
  standalone: true,
})
export class RubblePipe implements PipeTransform {
  transform(value: any): string {
    return value ? RubblePipe.moneyFormatTransform(value) + ' ₽' : '0 ₽';
  }

  public static moneyFormatTransform(value: string): string {
    return value.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  }
}
