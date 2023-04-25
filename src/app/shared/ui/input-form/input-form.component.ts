import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['../input/input.component.scss', './input-form.component.scss'],
})
export class InputFormComponent {
  @Input() type: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() className: string | undefined;
  @Input() controlName: any;
  @Input() form: any;
}
