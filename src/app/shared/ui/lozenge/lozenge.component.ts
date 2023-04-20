import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lozenge',
  templateUrl: './lozenge.component.html',
  styleUrls: ['./lozenge.component.scss'],
})
export class LozengeComponent {
  @Input() className: string = '';
}
