import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = [
    {
      id: 450435,
      name: 'Smartfon XIAOMI REDMI NOTE 11 PRO (6/64) White',
      price: '2 999 000',
    },
    {
      id: 340133,
      name: 'Smartfon APPLE IPHONE 13 PRO (512 GB) Alpine Green',
      price: '16 855 000',
    },
    {
      id: 560121,
      name: 'Televizor SONY KD-65XH8096 4K UHD SMART TV',
      price: '15 999 000',
    },
    {
      id: 860155,
      name: 'Televizor SAMSUNG QE65Q900RBU QLED 8K UHD',
      price: '48 699 000',
    },
    {
      id: 250115,
      name: 'Smartfon XIAOMI REDMI NOTE 11 PRO (6/128) White',
      price: '3 099 000',
    },
  ];
}
