import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-show-avatar-pop-up',
  templateUrl: './show-avatar-pop-up.component.html',
  styleUrls: ['./show-avatar-pop-up.component.scss'],
})
export class ShowAvatarPopUpComponent {
  @Input() src: any;

  constructor(private flagService: FlagService) {}

  close(event: any) {
    if (event.target.getAttribute('attr') === 'close') {
      this.flagService.showAvatar$.next(false);
    }
  }
}
