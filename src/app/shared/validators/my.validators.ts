import { FormControl } from '@angular/forms';

export class MyValidator {
  static spaceOnlyValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    if (control.value && control.value.trim() === '') {
      return { spaceOnly: true };
    }

    return null;
  }
}
