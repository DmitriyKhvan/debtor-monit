import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() className: string | undefined;
  @Input() type: string | undefined;
  @Input() disabled: boolean = false;
}
