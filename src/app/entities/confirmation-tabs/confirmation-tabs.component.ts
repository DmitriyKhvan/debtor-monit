import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-tabs',
  templateUrl: './confirmation-tabs.component.html',
  styleUrls: [
    '../foreclosure-tabs/foreclosure-tabs.component.scss',
    './confirmation-tabs.component.scss',
  ],
})
export class ConfirmationTabsComponent implements OnInit {
  tab: string | null = 'all';
  searchValue: string = '';

  ngOnInit(): void {
    if (!localStorage.getItem('confirmTab')) {
      localStorage.setItem('confirmTab', 'all');
    }

    this.tab = localStorage.getItem('confirmTab')
      ? localStorage.getItem('confirmTab')
      : 'all';

    if (localStorage.getItem('filterDataConfirm')) {
      this.searchValue = JSON.parse(
        localStorage.getItem('filterDataConfirm') || ''
      )?.search;
    }
  }

  toggleTab(filter: string) {
    localStorage.clear();
    localStorage.setItem('confirmTab', filter);
    this.tab = filter;
  }
}
