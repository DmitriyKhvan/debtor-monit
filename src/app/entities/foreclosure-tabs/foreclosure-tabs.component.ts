import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreclosure-tabs',
  templateUrl: './foreclosure-tabs.component.html',
  styleUrls: ['./foreclosure-tabs.component.scss'],
})
export class ForeclosureTabsComponent implements OnInit {
  tab: string | null = 'all';

  ngOnInit(): void {
    if (!localStorage.getItem('active')) {
      localStorage.setItem('active', 'all');
    }

    this.tab = localStorage.getItem('active')
      ? localStorage.getItem('active')
      : 'all';
  }

  toggleTab(filter: string) {
    localStorage.clear();
    localStorage.setItem('active', filter);
    this.tab = filter;
  }
}
