import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileService } from 'src/app/shared/api/file.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit, OnDestroy {
  fSub!: Subscription;
  uploadFilesSub!: Subscription;
  files: any = [];

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fSub = this.fileService.getInsuranceDebitFiles().subscribe((files) => {
      this.files = files;
    });

    this.uploadFilesSub = this.fileService.filesExcel$.subscribe((files) => {
      this.files = files;
    });
  }

  ngOnDestroy(): void {
    this.fSub?.unsubscribe();
    this.uploadFilesSub?.unsubscribe();
  }
}
