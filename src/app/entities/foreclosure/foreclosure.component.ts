import { Component } from '@angular/core';

@Component({
  selector: 'app-foreclosure',
  templateUrl: './foreclosure.component.html',
  styleUrls: ['./foreclosure.component.scss'],
})
export class ForeclosureComponent {
  tab: string = 'all';
  toggleTab(filter: string) {
    localStorage.clear();
    this.tab = filter;
  }
}
