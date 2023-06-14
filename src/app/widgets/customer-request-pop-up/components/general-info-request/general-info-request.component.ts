import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-general-info-request',
  templateUrl: './general-info-request.component.html',
  styleUrls: ['./general-info-request.component.scss'],
})
export class GeneralInfoRequestComponent implements OnInit, OnDestroy {
  @Input() userInfo: any;
  @ViewChild('copyText') copyTextRef!: ElementRef;
  aSub!: Subscription;
  iSub!: Subscription;
  rSub!: Subscription;

  flag = false;
  type: string | undefined;
  isRemoveClientInfo = false;

  formData: any;
  addClientInfoId: number = 0;

  productsAmount: number = 0;

  constructor(
    public flagService: FlagService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // this.getAddClientInfo();

    this.productsAmount = this.userInfo?.products.reduce(
      (acc: number, product: any) => {
        return acc + Number(product.amount);
      },
      0
    );

    this.aSub = this.flagService.isAddClientInfoForm$.subscribe(
      ({ flag, addClientInfo, type }) => {
        this.flag = flag;
        this.type = type;

        if (flag && addClientInfo) {
          this.formData = addClientInfo;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.rSub = this.flagService.removeAddClientInfo$.subscribe(
      ({ flag, id }) => {
        this.isRemoveClientInfo = flag;

        if (id) {
          this.addClientInfoId = id;
        }
      }
    );
  }

  // getAddClientInfo() {
  //   this.iSub = this.apiService.getAddClientInfo().subscribe((info) => {
  //     this.addClientInfo = info;
  //   });
  // }

  copy(event: any) {
    const copyText = this.copyTextRef.nativeElement.innerText;

    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = copyText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  addInfo(type: string) {
    this.flagService.isAddClientInfoForm$.next({
      flag: true,
      type,
    });
  }

  // editAddClientInfo(id: number, description: string, value: string) {
  //   this.flagService.isAddClientInfoForm$.next({
  //     flag: true,
  //     addClientInfo: { id, description, value },
  //     type: 'ADD_OTHER',
  //   });
  // }

  // removeAddClientInfo(id: number) {
  //   this.flagService.removeAddClientInfo$.next({
  //     flag: true,
  //     id,
  //   });
  // }

  ngOnDestroy(): void {
    this.aSub?.unsubscribe();
    this.iSub?.unsubscribe();
    this.rSub?.unsubscribe();
  }
}
