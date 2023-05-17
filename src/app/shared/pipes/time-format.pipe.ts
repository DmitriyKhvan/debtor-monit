import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(sec: number, hour: boolean = false): string {
    if (hour) {
      return moment(sec * 1000).format('hh:mm:ss');
    }

    return moment(sec * 1000).format('mm:ss');
  }
}
