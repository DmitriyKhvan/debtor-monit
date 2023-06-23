import { Component, Input } from '@angular/core';
import { FileService } from 'src/app/shared/api/file.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

export interface File {
  invoiceFile: string;
  invoiceMimeType: string;
}

@Component({
  selector: 'app-insurance-debt-item',
  templateUrl: './insurance-debt-item.component.html',
  styleUrls: [
    '../../insurance-debt.component.scss',
    './insurance-debt-item.component.scss',
  ],
})
export class InsuranceDebtItemComponent {
  @Input() insurance: any;

  constructor(
    private fileService: FileService,
    private flagService: FlagService
  ) {}

  dictionary: any = {
    Успешно: 'success',
    Отменен: 'danger',
    'Транзакция отменена': 'danger',
  };

  cancelInvoice(id: number) {
    this.flagService.cofirm$.next({ flag: true, id });
  }

  // download(file: File) {
  //   this.fileService.download(file.invoiceMimeType, file.invoiceFile);
  // }
}
