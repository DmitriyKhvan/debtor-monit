import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-update-credits',
  templateUrl: './update-credits.component.html',
  styleUrls: ['./update-credits.component.scss'],
})
export class UpdateCreditsComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  updateList() {
    this.apiService.updateList$.next(true);
  }
}
