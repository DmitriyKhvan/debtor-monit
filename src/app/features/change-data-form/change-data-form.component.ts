import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-change-data-form',
  templateUrl: './change-data-form.component.html',
  styleUrls: ['./change-data-form.component.scss'],
})
export class ChangeDataFormComponent {
  @Input() value: string = '';
  @Input() value2: string = '';
  @Input() mask: string = '';
  @Input() mask2: string = '';
  @Input() type: string | number = '';

  constructor(private flagService: FlagService) {}

  changeData() {
    this.flagService.changeData$.next({
      value: this.value,
      value2: this.value2,
      mask: this.mask,
      mask2: this.mask2,
      type: this.type,
    });
  }
}
