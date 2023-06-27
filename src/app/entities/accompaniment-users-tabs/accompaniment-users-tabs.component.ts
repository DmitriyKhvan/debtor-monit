import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accompaniment-users-tabs',
  templateUrl: './accompaniment-users-tabs.component.html',
  styleUrls: ['./accompaniment-users-tabs.component.scss'],
})
export class AccompanimentUsersTabsComponent implements OnInit {
  tab: string | null = 'all';
  searchValue: string = '';

  ngOnInit(): void {
    if (!localStorage.getItem('accompanimentUserTab')) {
      localStorage.setItem('accompanimentUserTab', 'all');
    }

    this.tab = localStorage.getItem('accompanimentUserTab')
      ? localStorage.getItem('accompanimentUserTab')
      : 'all';

    if (localStorage.getItem('filterDataAccompanimentUser')) {
      this.searchValue = JSON.parse(
        localStorage.getItem('filterDataAccompanimentUser') || ''
      ).search;
    }
  }
  toggleTab(filter: string) {
    localStorage.clear();
    localStorage.setItem('accompanimentUserTab', filter);
    this.tab = filter;
  }
}
