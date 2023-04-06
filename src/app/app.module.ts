import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
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
import { ProductListComponent } from './entities/credit-info-item/components/product-list/product-list.component';
import { ActivityComponent } from './entities/credit-info-item/components/activity/activity.component';
import { ActivityItemComponent } from './entities/credit-info-item/components/activity/components/activity-item/activity-item.component';
import { ProductItemComponent } from './entities/credit-info-item/components/product-list/components/product-item/product-item.component';
import { CreditLayoutComponent } from './widgets/credit-layout/credit-layout.component';
import { PaymentItemComponent } from './entities/credit-info-item/components/payment-schedule/components/payment-item/payment-item.component';
import { ActivityPopUpComponent } from './widgets/activity-pop-up/activity-pop-up.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
