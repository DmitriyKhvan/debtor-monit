import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-info-accompaniment-user',
  templateUrl: './general-info-accompaniment-user.component.html',
  styleUrls: ['./general-info-accompaniment-user.component.scss'],
})
export class GeneralInfoAccompanimentUserComponent {
  @Input() userInfo: any;
}
