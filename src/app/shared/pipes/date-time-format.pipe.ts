import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormat',
})
export class DateTimeFormatPipe implements PipeTransform {
  transform(
    value: any,
    month: any = 'numeric',
    weekday: string | undefined | any = undefined,
    time: boolean = false
  ) {
    if (value) {
      const date = new Date(value);
      if (time) {
        return `${date.toLocaleDateString('ru-RU', {
          weekday: weekday ? weekday : undefined,
          day: 'numeric',
          month: month,
          year: 'numeric',
        })} ${date.toLocaleTimeString('ru-RU')}`;
      } else {
        return date.toLocaleDateString('ru-RU', {
          weekday: weekday,
          day: 'numeric',
          month: month,
          year: 'numeric',
        });
      }
    }

    return '';
  }
}
