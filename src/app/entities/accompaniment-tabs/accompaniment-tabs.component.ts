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
    if (!localStorage.getItem('accompanimentTab')) {
      localStorage.setItem('accompanimentTab', 'all');
    }

    this.tab = localStorage.getItem('accompanimentTab')
      ? localStorage.getItem('accompanimentTab')
      : 'all';

    console.log(' this.tab', this.tab);

    if (localStorage.getItem('filterDataAccompaniment')) {
      this.searchValue = JSON.parse(
        localStorage.getItem('filterDataAccompaniment') || ''
      )?.search;

      console.log('this.searchValue', this.searchValue);
    }
  }

  toggleTab(filter: string) {
    localStorage.clear();
    localStorage.setItem('accompanimentTab', filter);
    this.tab = filter;
  }
}
