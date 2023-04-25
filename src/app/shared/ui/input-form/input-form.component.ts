import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['../input/input.component.scss', './input-form.component.scss'],
})
export class InputFormComponent {
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() className: string = '';
  @Input() controlName: any;
  @Input() form: any;
}
