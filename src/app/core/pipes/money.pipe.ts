import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'walletTransform',
  standalone: true,
})
export class MoneyPipe implements PipeTransform {
  transform(value: any): string {
    return value ? MoneyPipe.moneyFormatTransform(value) : '0';
  }

  private static moneyFormatTransform(value: string): string {
    return value.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  }
}
