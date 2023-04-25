import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditInfoComponent } from './pages/credit/credit-info.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { HomeComponent } from './pages/home/home.component';
import { CreditLayoutComponent } from './widgets/credit-layout/credit-layout.component';
import { MainLayoutComponent } from './widgets/main-layout/main-layout.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CalculationSumProductsComponent } from './pages/calculation-sum-products/calculation-sum-products.component';

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
        path: ':claimsId',
        component: CreditInfoComponent,
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
