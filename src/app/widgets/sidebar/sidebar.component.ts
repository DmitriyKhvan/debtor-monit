import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  url: any;

  constructor(
    public apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.url = window.location.href;

    console.log(this.url);
  }

  goBack() {
    this.location.back();
  }
}
