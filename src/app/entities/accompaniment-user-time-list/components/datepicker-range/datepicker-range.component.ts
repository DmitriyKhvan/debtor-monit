import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styleUrls: ['./datepicker-range.component.scss'],
})
export class DatepickerRangeComponent implements OnInit, OnChanges {
  @Input() defaultData: any;
  @Output() data: EventEmitter<any> = new EventEmitter<any>();

  range!: FormGroup;

  ngOnInit(): void {
    this.range = new FormGroup({
      start: new FormControl(this.defaultData.periodBegin),
      end: new FormControl(this.defaultData.periodEnd),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.range?.patchValue({
      start: changes.defaultData.currentValue.periodBegin,
      end: changes.defaultData.currentValue.periodEnd,
    });
  }

  setPeriodDatepicker() {
    if (this.range.value.start && this.range.value.end) {
      const start = moment(this.range.value.start).format('YYYY-MM-DD');
      const end = moment(this.range.value.end).format('YYYY-MM-DD');
      this.data.emit({
        start,
        end,
      });
    }
  }
}
