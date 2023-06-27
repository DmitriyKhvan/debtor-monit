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
  listUrl: string = '';

  constructor(
    public apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    const url = location.path();

    // console.log('this.url', url.includes('confirmation'));

    if (url.includes('confirmation')) {
      this.listUrl = '/confirmation-credits';
    } else if (url.includes('foreclosure')) {
      this.listUrl = '/credits';
    } else if (url.includes('accompaniment/users')) {
      this.listUrl = '/accompaniment-credits/users';
    } else if (url.includes('accompaniment')) {
      this.listUrl = '/accompaniment-credits';
    }
  }

  goBack() {
    this.location.back();
  }
}
