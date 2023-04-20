import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lozenge2',
  templateUrl: './lozenge2.component.html',
  styleUrls: ['./lozenge2.component.scss'],
})
export class Lozenge2Component {
  @Input() className: string = '';
  @Input() fontSize: number = 11;
}
