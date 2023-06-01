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
    files: [],
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

  removeAction(id: number, event: any) {
    this.rSub = this.apiService.removeAction(id).subscribe((res) => {
      this.flagService.updateActions$.next(true);
    });

    // this.close(event);
    this.closeAllTooltip();
  }

  confirm(event: any) {
    this.closeAllTooltip();
    event.target.parentNode.nextElementSibling.classList.add('open');
  }

  closeAllTooltip() {
    const elAll = document.querySelectorAll('.tooltip');
    elAll.forEach((el) => {
      el.classList.remove('open');
    });
  }

  upload(file: any) {
    let url = `data:${file.filename};base64,${file.file64}`;
    let link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${file.filename}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  // close(event: any) {
  //   event.target.closest('.tooltip').classList.remove('open');
  // }

  ngOnDestroy(): void {
    this.rSub?.unsubscribe();
  }
}
