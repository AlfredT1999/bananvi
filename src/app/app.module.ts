import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoComponent } from './home/listado/listado.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { ProductComponent } from './home/product/product.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ConditionsTermsComponent } from './footer/conditions-terms/conditions-terms.component';
import { AboutComponent } from './navbar/about/about.component';
import { ReviewComponent } from './navbar/review/review.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ListadoComponent,
    LoaderComponent,
    ProductComponent,
    PaymentComponent,
    PrivacyPolicyComponent,
    ConditionsTermsComponent,
    AboutComponent,
    ReviewComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
