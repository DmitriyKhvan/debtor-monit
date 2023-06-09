import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditInfoComponent } from './pages/credit/credit-info.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { CreditLayoutComponent } from './widgets/credit-layout/credit-layout.component';
import { MainLayoutComponent } from './widgets/main-layout/main-layout.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CalculationSumProductsComponent } from './pages/calculation-sum-products/calculation-sum-products.component';
import { ConfirmationCreditsComponent } from './pages/confirmation-credits/confirmation-credits.component';
import { ConfirmationCreditComponent } from './pages/confirmation-credit/confirmation-credit.component';
import { CreditInfoLayoutComponent } from './widgets/credit-info-layout/credit-info-layout.component';
import { ForeclosureTabsComponent } from './entities/foreclosure-tabs/foreclosure-tabs.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ConfirmationTabsComponent } from './entities/confirmation-tabs/confirmation-tabs.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { AccompanimentCreditsComponent } from './pages/accompaniment-credits/accompaniment-credits.component';
import { AccompanimentTabsComponent } from './entities/accompaniment-tabs/accompaniment-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'credits', pathMatch: 'full' },
      {
        path: 'credits',
        component: CreditsComponent,
        children: [
          {
            path: '',
            component: ForeclosureTabsComponent,
          },
          {
            path: 'documents',
            component: DocumentsComponent,
          },
          {
            path: 'statistics',
            component: StatisticsComponent,
          },
        ],
      },
      {
        path: 'confirmation-credits',
        component: ConfirmationCreditsComponent,
        children: [
          {
            path: '',
            component: ConfirmationTabsComponent,
          },
        ],
      },
      {
        path: 'accompaniment-credits',
        component: AccompanimentCreditsComponent,
        children: [
          {
            path: '',
            component: AccompanimentTabsComponent,
          },
        ],
      },

      {
        path: 'calculation',
        component: CalculationSumProductsComponent,
      },
    ],
  },
  {
    path: 'credit',
    component: CreditLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'confirmation/:claimsId',
        component: CreditInfoLayoutComponent,
        children: [
          // { path: '', redirectTo: 'user', pathMatch: 'full' },
          {
            path: '',
            component: ConfirmationCreditComponent,
          },
          // {
          //   path: 'test',
          //   component: TestComponent,
          // },
        ],
      },
      {
        path: 'foreclosure/:claimsId',
        component: CreditInfoLayoutComponent,
        children: [
          {
            path: '',
            component: CreditInfoComponent,
          },
        ],
      },
    ],
  },

  // { path: 'error', component: ErrorComponent },
  // { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
