import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  RouterEvent,
} from '@angular/router';
import { filter } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-sidebar-foreclosure',
  templateUrl: './sidebar-foreclosure.component.html',
  styleUrls: ['./sidebar-foreclosure.component.scss'],
})
export class SidebarForeclosureComponent {
  constructor(public apiService: ApiService) {}
  // currentRoute: string = '';
  // constructor(private router: Router) {
  //   router.events
  //     .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
  //     .subscribe((e: RouterEvent) => {
  //       console.log(e);
  //       this.currentRoute = e.url;
  //     });
  // }
}
