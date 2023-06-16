import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.scss'],
})
export class ChangeDataComponent implements OnInit, OnDestroy {
  fSub!: Subscription;
  type: number | string = '';
  mask: string = '';
  mask2: string = '';
  value: string = '';
  value2: string = '';

  constructor(private flagService: FlagService) {}

  ngOnInit(): void {
    this.fSub = this.flagService.changeData$.subscribe((data: any) => {
      this.type = data.type;
      this.mask = data.mask;
      this.mask2 = data.mask2;
      this.value = data.value;
      this.value2 = data.value2;
    });
  }

  closeForm() {
    this.flagService.changeData$.next({ value: '' });
  }

  ngOnDestroy(): void {
    this.fSub?.unsubscribe();
  }
}
