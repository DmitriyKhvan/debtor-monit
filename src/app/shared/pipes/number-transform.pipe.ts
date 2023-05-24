import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberTransform',
})
export class NumberTransformPipe implements PipeTransform {
  transform(value: any, isTein: boolean = true): string {
    // if (value && value !== 'NaN') {
    //   if (isTein) {
    //     return new Intl.NumberFormat('ru-RU', {
    //       minimumFractionDigits: 2,
    //     }).format(value / 100);
    //   } else {
    //     return new Intl.NumberFormat('ru-RU', {
    //       minimumFractionDigits: 2,
    //     }).format(value);
    //   }
    // } else {
    //   return '0';
    // }

    const number = Number(value) || 0;

    if (isTein) {
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
      }).format(number / 100);
    } else {
      return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
      }).format(number);
    }
  }
}
