import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      var format = '+xxx xx xxx xx xx';

      for (var i = 1; i < value.length; i++) {
        format = format.replace('x', value[i]);
      }

      return format;
    }

    return '';
  }
}
