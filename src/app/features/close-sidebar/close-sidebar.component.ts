import { Component } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-close-sidebar',
  templateUrl: './close-sidebar.component.html',
  styleUrls: ['./close-sidebar.component.scss'],
})
export class CloseSidebarComponent {
  constructor(public flagService: FlagService) {}

  toggleSidebar() {
    // this.flagService.tooggleSidebar(false);
  }
}
