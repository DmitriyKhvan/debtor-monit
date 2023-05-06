import { APP_INITIALIZER, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { SidebarComponent } from './widgets/sidebar/sidebar.component';
import { UpdateCreditsComponent } from './features/update-credits/update-credits.component';
import { SearchCreditsComponent } from './features/search-credits/search-credits.component';
import { PaginationComponent } from './features/pagination/pagination.component';
import { MenuComponent } from './widgets/header/componets/menu/menu.component';
import { MainLayoutComponent } from './widgets/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { CreditListComponent } from './entities/credit-list/credit-list.component';
import { CreditComponent } from './entities/credit-list/components/credit/credit.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './shared/ui/loader/loader.component';
import { LozengeComponent } from './shared/ui/lozenge/lozenge.component';
import { NumberTransformPipe } from './shared/pipes/number-transform.pipe';
import { DateTimeFormatPipe } from './shared/pipes/date-time-format.pipe';
import { InputComponent } from './shared/ui/input/input.component';
import { CloseSidebarComponent } from './features/close-sidebar/close-sidebar.component';
import { CreditInfoComponent } from './pages/credit/credit-info.component';
import { CreditInfoItemComponent } from './entities/credit-info-item/credit-info-item.component';
import { PaymentScheduleComponent } from './entities/credit-info-item/components/payment-schedule/payment-schedule.component';
import { GeneralInfoComponent } from './entities/credit-info-item/components/general-info/general-info.component';
import { ProductListComponent } from './entities/product-list/product-list.component';
import { ActivityComponent } from './entities/credit-info-item/components/activity/activity.component';
import { ActivityItemComponent } from './entities/credit-info-item/components/activity/components/activity-item/activity-item.component';
import { ProductItemComponent } from './entities/product-list/components/product-item/product-item.component';
import { CreditLayoutComponent } from './widgets/credit-layout/credit-layout.component';
import { PaymentItemComponent } from './entities/credit-info-item/components/payment-schedule/components/payment-item/payment-item.component';
import { ActivityPopUpComponent } from './widgets/activity-pop-up/activity-pop-up.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgxMatDateFormats,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  NGX_MAT_DATE_FORMATS,
} from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PhoneFormatPipe } from './shared/pipes/phone-format.pipe';
import { PrintScheduleComponent } from './features/print-schedule/print-schedule.component';
import { initializeKeycloak } from './shared/init/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { Lozenge2Component } from './shared/ui/lozenge2/lozenge2.component';
import { CalculationSumProductsComponent } from './pages/calculation-sum-products/calculation-sum-products.component';
import { CalculationProductsComponent } from './features/calculation-products/calculation-products.component';
import { CalculationProductListComponent } from './entities/calculation-product-list/calculation-product-list.component';
import { CalculationProductItemComponent } from './entities/calculation-product-list/calculation-product-item/calculation-product-item.component';
import { InputFormComponent } from './shared/ui/input-form/input-form.component';
import { AuthIntercepter } from './shared/auth.intercepter';
import { ConfirmationCreditsComponent } from './pages/confirmation-credits/confirmation-credits.component';
import { ConfirmationCreditListComponent } from './entities/confirmation-credit-list/confirmation-credit-list.component';
import { ConfirmationCreditItemComponent } from './entities/confirmation-credit-list/components/confirmation-credit-item/confirmation-credit-item.component';
import { ConfirmationCreditComponent } from './pages/confirmation-credit/confirmation-credit.component';
import { ConfirmationCreditInfoItemComponent } from './entities/confirmation-credit-info-item/confirmation-credit-info-item.component';
import { UserInfoComponent } from './entities/user-info/user-info.component';
import { GeneralUserInfoConfirmationCreditComponent } from './entities/confirmation-credit-info-item/components/general-user-info-confirmation-credit/general-user-info-confirmation-credit.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthIntercepter,
};

const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: 'DD.MM.YYYY HH:mm',
  },
  display: {
    dateInput: 'DD.MM.YYYY HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UpdateCreditsComponent,
    SearchCreditsComponent,
    PaginationComponent,
    MenuComponent,
    MainLayoutComponent,
    HomeComponent,
    ButtonComponent,
    CreditListComponent,
    CreditComponent,
    LoaderComponent,
    LozengeComponent,
    NumberTransformPipe,
    DateTimeFormatPipe,
    InputComponent,
    CloseSidebarComponent,
    CreditInfoComponent,
    CreditInfoItemComponent,
    PaymentScheduleComponent,
    GeneralInfoComponent,
    ProductListComponent,
    ActivityComponent,
    ActivityItemComponent,
    ProductItemComponent,
    CreditLayoutComponent,
    PaymentItemComponent,
    ActivityPopUpComponent,
    PhoneFormatPipe,
    PrintScheduleComponent,
    Lozenge2Component,
    CalculationSumProductsComponent,
    CalculationProductsComponent,
    CalculationProductListComponent,
    CalculationProductItemComponent,
    InputFormComponent,
    ConfirmationCreditsComponent,
    ConfirmationCreditListComponent,
    ConfirmationCreditItemComponent,
    ConfirmationCreditComponent,
    ConfirmationCreditInfoItemComponent,
    UserInfoComponent,
    GeneralUserInfoConfirmationCreditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatMomentModule,
    KeycloakAngularModule,
  ],
  providers: [
    INTERCEPTOR_PROVIDER,
    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
