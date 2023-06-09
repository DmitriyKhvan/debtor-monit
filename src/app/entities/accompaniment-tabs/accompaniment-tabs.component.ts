import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accompaniment-tabs',
  templateUrl: './accompaniment-tabs.component.html',
  styleUrls: [
    '../foreclosure-tabs/foreclosure-tabs.component.scss',
    './accompaniment-tabs.component.scss',
  ],
})
export class AccompanimentTabsComponent implements OnInit {
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
