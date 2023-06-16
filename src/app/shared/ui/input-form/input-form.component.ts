import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['../input/input.component.scss', './input-form.component.scss'],
})
export class InputFormComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() controlName: any;
  @Input() form: any;
  @Input() mask: string = '';
  @Input() dropSpecialCharacters: boolean = false;
  @Input() styles: object = {};
}
