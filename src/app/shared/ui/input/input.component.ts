import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() className: string | undefined;
}
