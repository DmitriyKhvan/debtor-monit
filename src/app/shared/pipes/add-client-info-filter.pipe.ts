import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addClientInfoFilter',
  pure: false,
})
export class AddClientInfoFilterPipe implements PipeTransform {
  transform(addClientInfo: any, type: string) {
    if (addClientInfo) {
      return addClientInfo.filter((info: any) => info.type === type);
    }
  }
}
