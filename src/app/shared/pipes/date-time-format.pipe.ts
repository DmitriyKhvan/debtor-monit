import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormat',
})
export class DateTimeFormatPipe implements PipeTransform {
  transform(value: any, time: boolean = false) {
    if (value) {
      const date = new Date(value);
      if (time) {
        return `${date.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })} ${date.toLocaleTimeString('ru-RU', { timeZone: 'UTC' })}`;
      } else {
        return date.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
      }
    } else {
      return '';
    }
  }
}
