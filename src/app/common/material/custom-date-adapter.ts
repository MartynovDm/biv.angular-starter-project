import { DateTime } from 'luxon';
import { LuxonDateAdapter } from 'ngx-material-luxon';

export class CustomDateAdapter extends LuxonDateAdapter {
  override parse(value: any): DateTime | null {
    if (typeof value === 'string' && value.indexOf('.') > -1) {
      const str = value.slice(0, 10).split('.');

      const year = Number(str[2]);
      const month = Number(str[1]);
      const day = Number(str[0]);

      return !isNaN(year) && !isNaN(month) && !isNaN(day) ? DateTime.fromObject({ year, month, day }) : null;
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : DateTime.fromMillis(timestamp).setLocale(this.locale);
  }

  override getFirstDayOfWeek(): number {
    return 1;
  }
}
