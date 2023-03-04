import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsTermsComponent } from './footer/conditions-terms/conditions-terms.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './home/listado/listado.component';
import { ProductComponent } from './home/product/product.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { ReviewComponent } from './navbar/review/review.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'producto',
    component: ProductComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'privacyPolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'conditionsTerms',
    component: ConditionsTermsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
