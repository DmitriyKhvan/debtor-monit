import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import { Action, Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss'],
})
export class ActivityItemComponent implements OnDestroy {
  @Input() action: Action = {
    id: 0,
    debtorId: 0,
    type: 0,
    reminder: '',
    text: '',
    createdBy: null,
    createdAt: '',
    updatedBy: null,
    updatedAt: '',
    user: {
      firstName: '',
      lastName: '',
      middleName: '',
      username: '',
      uuid: '',
    },
  };

  @Input() type: Status | undefined;

  rSub!: Subscription;

  constructor(
    private apiService: ApiService,
    private flagService: FlagService
  ) {}

  removeAction(id: number) {
    this.rSub = this.apiService.removeAction(id).subscribe((res) => {
      this.flagService.updateActions$.next(true);
    });
  }

  ngOnDestroy(): void {
    this.rSub?.unsubscribe();
  }
}
