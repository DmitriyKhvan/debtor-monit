import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormat',
})
export class DateTimeFormatPipe implements PipeTransform {
  transform(value: any, month: any = 'numeric', time: boolean = false) {
    if (value) {
      const date = new Date(value);
      if (time) {
        return `${date.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: month,
          year: 'numeric',
        })} ${date.toLocaleTimeString('ru-RU')}`;
      } else {
        return date.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: month,
          year: 'numeric',
        });
      }
    }

    return '';
  }
}
