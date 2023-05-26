import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: [
    '../../document-list.component.scss',
    './document-item.component.scss',
  ],
})
export class DocumentItemComponent {
  @Input() file: any;
}
